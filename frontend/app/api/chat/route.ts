import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

import { OpenAIEmbeddings, ChatOpenAI } from '@langchain/openai';


const embeddings = new OpenAIEmbeddings({
  modelName: 'sentence-transformers/all-MiniLM-L6-v2',
  openAIApiKey: process.env.OPENROUTER_API_KEY,
  configuration: {
    baseURL: 'https://openrouter.ai/api/v1',
  },
});

// Cosine Similarity Math Helper
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((sum, a, idx) => sum + a * vecB[idx], 0);
  const normA = Math.sqrt(vecA.reduce((sum, a) => sum + a * a, 0));
  const normB = Math.sqrt(vecB.reduce((sum, b) => sum + b * b, 0));
  return normA && normB ? dotProduct / (normA * normB) : 0;
}

// In-Memory Document Store
interface VectorDoc {
  text: string;
  embedding: number[];
}

let cachedDocs: VectorDoc[] | null = null;

async function initVectorStore(): Promise<VectorDoc[]> {
  if (cachedDocs) return cachedDocs;

  // Read the text file
  const filePath = path.join(process.cwd(), 'public', 'resume.txt');
  const rawText = fs.readFileSync(filePath, 'utf-8');

  // Split text by paragraph breaks
  const rawChunks = rawText
    .split(/\n\s*\n/)
    .map((c) => c.trim())
    .filter((c) => c.length > 0);

  // Generate embeddings for each chunk
  const vectorDocs: VectorDoc[] = [];
  for (const chunk of rawChunks) {
    const emb = await embeddings.embedQuery(chunk);
    vectorDocs.push({ text: chunk, embedding: emb });
  }

  cachedDocs = vectorDocs;
  return cachedDocs;
}

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'A valid query string is required.' },
        { status: 400 }
      );
    }

    const store = await initVectorStore();
    // 2. Embed the user's search query
    const queryEmb = await embeddings.embedQuery(query);

    // 3. Rank chunks by Cosine Similarity and grab top 3
    const rankedDocs = store
      .map((doc) => ({
        text: doc.text,
        similarity: cosineSimilarity(queryEmb, doc.embedding),
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, 3);

    // 4. Construct context
    const contextText = rankedDocs.map((d) => d.text).join('\n\n---\n\n');

    const prompt = `You are an AI portfolio assistant. Answer the question based ONLY on the context below. If the answer is not in the context, say you do not know.

Context:
${contextText}

Question: ${query}

Answer:`;

      const apiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY;

      const llm = new ChatOpenAI({
      modelName: 'inclusionai/ling-3.0-flash-fin:free',
      temperature: 0.2,
      apiKey: apiKey,
      configuration: {
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: apiKey,
        defaultHeaders: {
          'HTTP-Referer': 'http://localhost:3000',
          'X-Title': 'Portfolio Assistant',
        },
      },
    });

    const response = await llm.invoke(prompt);

    return NextResponse.json({ response: response.content });
  } catch (error: any) {
    console.error('RAG Chatbot Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}