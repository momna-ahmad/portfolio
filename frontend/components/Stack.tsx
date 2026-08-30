'use client' ;
import React , { useState } from 'react';
import '../styles/stack.css';

interface StackProps {
  stack: string[];
}

export default function Stack({ stack : initialStack }: StackProps) {
    const [items, setItems] = useState<string[]>(initialStack);
    const [isPopping, setIsPopping] = useState<boolean>(false);

    const handlePop = () => {
        // Prevent multiple clicks while popping or if empty
        if (isPopping || items.length === 0) return;

        setIsPopping(true);

        // Wait for the CSS animation to finish (600ms), then remove top element
        setTimeout(() => {
        setItems((prev) => prev.slice(1));
        setIsPopping(false);
        }, 600);
    };

  return (
    <div className="container">
      <div className="disc-stack" onClick={handlePop}>
        {items.map((tech, index) => (
          <div 
            key={index} 
            className="disc" 
            style={{ zIndex: items.length - index }}
          >
            <div className="disc-top" />
            <span className="disc-text">{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}