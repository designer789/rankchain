"use client";

import { cn } from "@/lib/utils";
import { Ripple } from "./Ripple";
import { useEffect, useState, useRef } from "react";

interface ScoringMechanismCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function ScoringMechanismCard({ title, description, className }: ScoringMechanismCardProps) {
  const [count, setCount] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCount(prevCount => {
          // If we reach 100, pause the counter
          if (prevCount >= 100) {
            setIsPaused(true);
            return 100;
          }
          return prevCount + 1;
        });
      }
    }, 100);
    
    return () => {
      clearInterval(interval);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused]);
  
  // Handle the pause and reset separately
  useEffect(() => {
    if (isPaused && count === 100) {
      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      // Set a new timeout to unpause and reset after 3 seconds
      timeoutRef.current = setTimeout(() => {
        setCount(0); // Reset to 0 first
        setTimeout(() => {
          setIsPaused(false); // Then start counting again
        }, 300);
      }, 3000);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused, count]);

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all",
      className
    )}>
      <div className="mb-4 h-32 overflow-hidden rounded-lg bg-gradient-to-br from-primary/5 to-blue-100/30 relative">
        <div className="flex h-full w-full items-center justify-center">
          {/* Animated counter */}
          <div 
            className={cn(
              "relative z-10 h-24 w-24 rounded-full flex items-center justify-center transition-all duration-300",
              "bg-gradient-to-b from-blue-50 to-primary/5 backdrop-blur-sm",
              "border-1 border-blue-400/20"
            )}
          >
            <div className="flex flex-col items-center">
              <span className={cn(
                "text-primary/70 font-bold text-2xl transition-all duration-300",
                isPaused && count === 100 && "text-primary scale-110"
              )}>
                {count}
              </span>
              <span className="text-primary/40 text-[10px] font-medium">SCORE</span>
            </div>
          </div>
          
          {/* Ripple effect */}
          <Ripple 
            mainCircleSize={80} 
            mainCircleOpacity={0.15} 
            numCircles={5}
            color="primary" 
          />
        </div>
      </div>
      <h3 className="mb-2 text-lg font-medium text-gray-900 tracking-tight">{title}</h3>
      <p className="text-xs leading-relaxed text-gray-600">{description}</p>
    </div>
  );
} 