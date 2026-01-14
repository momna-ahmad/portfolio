import os
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings, HuggingFaceEndpoint
from langchain_community.vectorstores import Chroma
from langchain_openai import ChatOpenAI
from dotenv import load_dotenv  

# 1. Load environment variables from .env file
load_dotenv() 

# 2. Verify it loaded (Optional check)
if not os.getenv("HUGGINGFACEHUB_API_TOKEN"):
    print("❌ Error: API Token not found. Did you create the .env file?")
    exit()


# 2. LOAD THE RESUME
print("Loading PDF...")
loader = PyPDFLoader("resume.pdf")
data = loader.load()

# 3. SPLIT TEXT INTO CHUNKS
# We need to break the PDF into smaller pieces so the AI can read it
text_splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
chunks = text_splitter.split_documents(data)

# 4. CREATE EMBEDDINGS (Locally)
# This runs on your laptop! It turns text into numbers.
print("Creating Embeddings (this might take a second)...")
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

# 5. SAVE TO VECTOR STORE (ChromaDB)
# This creates a temporary database in memory
vectorstore = Chroma.from_documents(documents=chunks, embedding=embeddings)

# 6. SETUP THE LLM (The Chatbot)
llm = ChatOpenAI(
    model="mistralai/mistral-7b-instruct",
    openai_api_key=os.getenv("OPENROUTER_API_KEY"),
    openai_api_base="https://openrouter.ai/api/v1",
    temperature=0
)

# 7. CONNECT IT ALL
def query(question):
    print(f"\nThinking about: {question}...")
    
    try:
        # Step 1: SEARCH the database manually
        # "k=3" means "Find the top 3 most relevant chunks"
        relevant_docs = vectorstore.similarity_search(question, k=3)
        
        # Step 2: BUILD the Context String
        # We join the text of the found docs into one big string
        context_text = "\n\n---\n\n".join([doc.page_content for doc in relevant_docs])
        
        # Step 3: CONSTRUCT the Prompt manually
        # We paste the context and the question into a template
        final_prompt = f"""
        You are a helpful assistant. Answer the question based ONLY on the context below.

        Context:
        {context_text}

        Question: {question}
        
        Answer:
        """
        
        # Step 4: ASK the LLM
        response = llm.invoke(final_prompt)
        return response.content
    except Exception as e:
        # THIS IS THE IMPORTANT PART
        print("\n❌ --------------------------------------------------")
        print("❌ CRITICAL ERROR IN RAG.PY:")
        print(e)
        print("❌ --------------------------------------------------\n")
        return f"Error: {str(e)}"

# --- TEST IT ---
if __name__ == "__main__":
    question = "What skills does this candidate have?"
    print(f"\nQuerying: {question}")
    response = query(question)
    print("\nAnswer:")
    print(response.content)