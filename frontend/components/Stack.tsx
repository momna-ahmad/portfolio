'use client';
import React, { useState } from 'react';
import styles from "../styles/stack.module.css";

interface StackProps {
  stack: string[];
}

interface TransferringDisc {
  tech: string;
  from: 'left' | 'right';
  dx: number;
  dy: number;
  peakY: number;
}

const DISC_HEIGHT = 50;
const STACK_GAP = 245;
const ANIMATION_DURATION = 850;

export default function Stack({ stack: initialStack }: StackProps) {
  const [leftStack, setLeftStack] = useState<string[]>(initialStack);
  const [rightStack, setRightStack] = useState<string[]>([]);
  const [movingDisc, setMovingDisc] = useState<TransferringDisc | null>(null);

  const handlePop = (from: 'left' | 'right') => {
    if (movingDisc) return;

    if (from === 'left') {
      if (leftStack.length === 0) return;

      const poppedItem = leftStack[0];
      const leftCount = leftStack.length;
      const rightCount = rightStack.length;

      const dx = STACK_GAP; // Move right
      const dy = (leftCount - 1 - rightCount) * DISC_HEIGHT;

      let peakY = -40;
      if (rightCount >= leftCount) {
        peakY = dy - 50;
      }

      setMovingDisc({
        tech: poppedItem,
        from: 'left',
        dx,
        dy,
        peakY,
      });

      setLeftStack((prev) => prev.slice(1));

      setTimeout(() => {
        setRightStack((prev) => [poppedItem, ...prev]);
        setMovingDisc(null);
      }, ANIMATION_DURATION);

    } else {
      if (rightStack.length === 0) return;

      const poppedItem = rightStack[0];
      const rightCount = rightStack.length;
      const leftCount = leftStack.length;

      const dx = -STACK_GAP - 70; // Move left
      const dy = (rightCount - 1 - leftCount) * DISC_HEIGHT;

      let peakY = -40;
      if (leftCount >= rightCount) {
        peakY = dy - 50;
      }

      setMovingDisc({
        tech: poppedItem,
        from: 'right',
        dx,
        dy,
        peakY,
      });

      setRightStack((prev) => prev.slice(1));

      setTimeout(() => {
        setLeftStack((prev) => [poppedItem, ...prev]);
        setMovingDisc(null);
      }, ANIMATION_DURATION);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h2 className={styles.heading}>/ Tech Stack</h2>
        <p className={styles.eyebrow}>
          <span className={styles.k}>const</span> techStack{" "}
          <span className={styles.p}>=</span> new Stack
          <span className={styles.p}>()</span>
        </p>
      </div>

      <div className={styles.arena}>
        {/* Left Stack Column */}
        <div 
          className={styles['disc-column']} 
          onClick={() => handlePop('left')}
        >
          <div className={styles['stack-shadow']} />

          {/* Flying Disc from Left -> Right */}
          {movingDisc && movingDisc.from === 'left' && (
            <div
              className={`${styles.disc} ${styles['flying-disc']}`}
              style={{
                zIndex: 999,
                ['--dx' as any]: `${movingDisc.dx}px`,
                ['--dy' as any]: `${movingDisc.dy}px`,
                ['--peak-y' as any]: `${movingDisc.peakY}px`,
              }}
            >
              <div className={styles['disc-top']} />
              <span className={styles['disc-text']}>{movingDisc.tech}</span>
            </div>
          )}

          {movingDisc && movingDisc.from === 'left' && (
            <div style={{ height: '50px', visibility: 'hidden' }} />
          )}

          {leftStack.map((tech, index) => (
            <div 
              key={tech} 
              className={styles.disc} 
              style={{ zIndex: leftStack.length - index }}
            >
              <div className={styles['disc-top']} />
              <span className={styles['disc-text']}>{tech}</span>
            </div>
          ))}
        </div>

        {/* Right Stack Column */}
        <div 
          className={`${styles['disc-column']} ${styles['target-column']}`} 
          onClick={() => handlePop('right')}
        >
          <div className={styles['stack-shadow']} />

          {/* Flying Disc from Right -> Left */}
          {movingDisc && movingDisc.from === 'right' && (
            <div
              className={`${styles.disc} ${styles['flying-disc']}`}
              style={{
                zIndex: 999,
                ['--dx' as any]: `${movingDisc.dx}px`,
                ['--dy' as any]: `${movingDisc.dy}px`,
                ['--peak-y' as any]: `${movingDisc.peakY}px`,
              }}
            >
              <div className={styles['disc-top']} />
              <span className={styles['disc-text']}>{movingDisc.tech}</span>
            </div>
          )}

          {movingDisc && movingDisc.from === 'right' && (
            <div style={{ height: '50px', visibility: 'hidden' }} />
          )}

          {rightStack.map((tech, index) => (
            <div
              key={tech}
              className={styles.disc}
              style={{ zIndex: rightStack.length - index }}
            >
              <div className={styles['disc-top']} />
              <span className={styles['disc-text']}>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}