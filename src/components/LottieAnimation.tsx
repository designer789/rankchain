"use client";

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { cn } from '@/lib/utils';
import type { LottieOptions } from 'lottie-react';

// Dynamically import Lottie with SSR disabled to prevent "document is not defined" error
const Lottie = dynamic(() => import('lottie-react'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center">Loading animation...</div>
});

interface LottieAnimationProps {
  animationData?: AnimationData;
  animationPath?: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
  options?: Partial<LottieOptions>;
}

interface AnimationData {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: unknown[];
  layers: unknown[];
  [key: string]: unknown; // Allow for additional properties
}

/**
 * LottieAnimation component
 * Can load animations either from a JSON object or from a file path
 */
const LottieAnimation: React.FC<LottieAnimationProps> = ({
  animationData,
  animationPath,
  loop = true,
  autoplay = true,
  className,
  style,
  options
}) => {
  const [loadedAnimation, setLoadedAnimation] = useState<AnimationData | null>(null);

  useEffect(() => {
    // If animation data is directly provided, use it
    if (animationData) {
      setLoadedAnimation(animationData);
      return;
    }
    
    // If path is provided, fetch the JSON file
    if (animationPath) {
      fetch(animationPath)
        .then(response => response.json())
        .then((data: AnimationData) => {
          setLoadedAnimation(data);
        })
        .catch(error => {
          console.error('Error loading animation from path:', error);
        });
    }
  }, [animationData, animationPath]);

  // Check that at least one animation source is provided
  if (!animationData && !animationPath) {
    console.error('LottieAnimation requires either animationData or animationPath');
    return null;
  }

  if (animationPath && !loadedAnimation) {
    return <div className={cn("w-full h-full flex items-center justify-center", className)}>Loading animation...</div>;
  }

  return (
    <div className={cn("w-full h-full", className)} style={style}>
      {loadedAnimation && (
        <Lottie
          animationData={loadedAnimation}
          loop={loop}
          autoplay={autoplay}
          style={{ width: '100%', height: '100%' }}
          {...options}
        />
      )}
    </div>
  );
};

export default LottieAnimation; 