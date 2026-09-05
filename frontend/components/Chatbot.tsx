'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, Sparkles, X, Send } from 'lucide-react';
import "../styles/aibutton.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hi! I'm here to help you learn more about Momina's work, tech stack, and background. Ask me anything!"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages((prev) => [...prev, { type: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMessage }),
      });

      if (!response.ok) throw new Error('Failed to get response');

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: data.response || "Sorry, I couldn't process that request."
        }
      ]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          type: 'bot',
          text: "I'm having trouble connecting to the backend. Please try again in a moment."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          className="ai-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open Assistant Chat"
          style={{
            borderColor: 'var(--punct)',
            backgroundColor: 'var(--bg-glow)',
            color: 'var(--mint)',
          }}
        >
          <div className="icon-wrapper">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="chat-bubble"
              style={{ stroke: 'var(--mint)' }}
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h10" />
            </svg>
            <Sparkles className="sparkles" size={12} style={{ color: 'var(--amber)' }} />
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] h-[520px] rounded-xl flex flex-col z-50 overflow-hidden shadow-2xl transition-all"
          style={{
            backgroundColor: 'var(--bg)',
            border: '1px solid var(--punct)',
            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.7), 0 0 30px rgba(127, 217, 168, 0.08)',
            fontFamily: '"Space Grotesk", sans-serif',
          }}
        >
          {/* Chat Header */}
          <div
            className="px-4 py-3.5 flex justify-between items-center select-none"
            style={{
              backgroundColor: 'var(--bg-glow)',
              borderBottom: '1px solid var(--punct)',
            }}
          >
            <div className="flex items-center space-x-2.5">
              <div>
                <h3
                  className="font-semibold text-sm tracking-wide"
                  style={{ color: 'var(--text)' }}
                >
                  Assistant
                </h3>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg transition hover:brightness-125"
              style={{
                color: 'var(--muted)',
                backgroundColor: 'transparent',
              }}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Container */}
          <div
            className="flex-1 overflow-y-auto p-4 space-y-3.5"
            style={{
              backgroundColor: 'var(--bg)',
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--punct) transparent',
            }}
          >
            {messages.map((message, index) => {
              const isUser = message.type === 'user';
              return (
                <div
                  key={index}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <span
                    className="text-[10px] mb-1 px-1 font-mono tracking-wider"
                    style={{ color: isUser ? 'var(--amber)' : 'var(--mint-dim)' }}
                  >
                    {isUser ? 'client' : 'ai'}
                  </span>
                  <div
                    className="max-w-[85%] px-3.5 py-2.5 rounded-xl text-sm leading-relaxed"
                    style={{
                      backgroundColor: isUser ? 'var(--mint-dim)' : 'var(--bg-glow)',
                      color: isUser ? '#ffffff' : 'var(--text)',
                      border: `1px solid ${isUser ? 'rgba(127, 217, 168, 0.3)' : 'var(--punct)'}`,
                      borderBottomRightRadius: isUser ? '3px' : '12px',
                      borderBottomLeftRadius: !isUser ? '3px' : '12px',
                      fontFamily: isUser ? '"Space Grotesk", sans-serif' : 'inherit',
                    }}
                  >
                    <p className="whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex flex-col items-start">
                <span
                  className="text-[10px] mb-1 px-1 font-mono"
                  style={{ color: 'var(--mint-dim)' }}
                >
                  ai
                </span>
                <div
                  className="px-4 py-3 rounded-xl rounded-bl-none flex items-center space-x-1.5"
                  style={{
                    backgroundColor: 'var(--bg-glow)',
                    border: '1px solid var(--punct)',
                  }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--mint)', animationDelay: '0ms' }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--mint)', animationDelay: '150ms' }}
                  />
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{ backgroundColor: 'var(--mint)', animationDelay: '300ms' }}
                  />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Container */}
          <div
            className="p-3"
            style={{
              backgroundColor: 'var(--bg-glow)',
              borderTop: '1px solid var(--punct)',
            }}
          >
            <div
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg transition-colors"
              style={{
                backgroundColor: 'var(--bg)',
                border: '1px solid var(--punct)',
              }}
            >
              <span
                className="select-none text-xs font-mono"
                style={{ color: 'var(--mint)' }}
              >
                &gt;
              </span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about projects, skills, stack..."
                className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-[13px]"
                style={{
                  color: 'var(--text)',
                  caretColor: 'var(--mint)',
                }}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="p-1.5 rounded-md transition disabled:opacity-30 hover:opacity-80"
                style={{
                  backgroundColor: 'var(--mint)',
                  color: 'var(--bg)',
                }}
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}