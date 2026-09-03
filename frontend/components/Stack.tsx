'use client' ;
import React , { useState } from 'react';
import styles from "../styles/stack.module.css" ;

interface StackProps {
  stack: string[];
}

interface TransferringDisc {
  tech: string;
  dx: number;
  dy: number;
  peakY: number;
}

const DISC_HEIGHT_RIGHT = 60; // 60px height - 15px overlap = 45px effective step per layer
const DISC_HEIGHT_LEFT = 35; // 60px height - 15px overlap = 45px effective step per layer
const DISC_HEIGHT = 40 ;
const STACK_GAP = 245;  // Horizontal distance between centers (px)
const ANIMATION_DURATION = 850;

export default function Stack({ stack : initialStack }: StackProps) {
    const [leftStack, setLeftStack] = useState<string[]>(initialStack);
    const [rightStack, setRightStack] = useState<string[]>([]);
    const [movingDisc, setMovingDisc] = useState<TransferringDisc | null>(null);

    const handlePop = () => {
      if (movingDisc || leftStack.length === 0) return;

      const poppedItem = leftStack[0];
      const leftCount = leftStack.length;
      const rightCount = rightStack.length;
      // Calculate vertical offset (dy)
    // Left stack top is at: -(leftCount - 1) * 45px from base
    // Right stack target top is at: -rightCount * 45px from base
    // dy = targetY - sourceY = (leftCount - 1 - rightCount) * 45px
    let dy ;
    dy = (leftCount - 1 - rightCount) * DISC_HEIGHT ;
    console.log(`Popping ${poppedItem}: leftCount=${leftCount}, rightCount=${rightCount}, dy=${dy}`);
    const dx = STACK_GAP;

    // Determine arc trajectory height
    let peakY = -40; // Default pop lift
    if (rightCount >= leftCount) {
      // If right stack is taller, elevate above the right stack's peak
      peakY = dy - 50; 
    }

    setMovingDisc({
      tech: poppedItem,
      dx,
      dy,
      peakY,
    });

    // Remove from left stack immediately so animation is visually active
    setLeftStack((prev) => prev.slice(1));

    // After animation duration (750ms), settle the disc on the right stack
    setTimeout(() => {
      setRightStack((prev) => [poppedItem, ...prev]);
      setMovingDisc(null);
    }, 850);
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
      <div className={styles['disc-column']} onClick={handlePop}>
        {/* Animated disc actively flying to the right */}
          {movingDisc && (
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

          {movingDisc && <div style={{ height: '50px', visibility: 'hidden' }} />}

        {leftStack.map((tech, index) => (
          <div 
            key={index} 
            className={styles.disc} 
            style={{ zIndex: leftStack.length - index }}
          >
            <div className={styles['disc-top']} />
            <span className={styles['disc-text']}>{tech}</span>
          </div>
        ))}
        {leftStack.length === 0 && !movingDisc && (
            <div className={`${styles['stack-placeholder']}`}>
            </div>
          )}
      </div>

      {/* Right Stack */}
          <div className={`${styles['disc-column']} ${styles['target-column']}`}>
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

            {rightStack.length === 0 && (
              <div className={`${styles['stack-placeholder']} ${styles['right-placeholder']}`}>
              </div>
            )}
          </div>
          
    </div>
    </div>
  );
}