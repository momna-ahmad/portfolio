from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
import uvicorn

# IMPORT YOUR RAG FUNCTION
# This will trigger the PDF loading and embedding creation in rag.py
from rag import query

# Initialize FastAPI
app = FastAPI(
    title="Portfolio Chatbot API",
    description="AI chatbot backend",
    version="1.0.0"
)

# CORS Setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request Model
class ChatRequest(BaseModel):
    query: str = Field(..., min_length=1, max_length=1000)

# Response Model
class ChatResponse(BaseModel):
    response: str

# Endpoints
@app.get("/")
async def root():
    return {"status": "online", "message": "Chatbot API is running"}

@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    try:
        # CALL THE FUNCTION FROM RAG.PY
        answer = query(request.query)
        
        return ChatResponse(response=answer)
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)