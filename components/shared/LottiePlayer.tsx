"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";
import { Lottie, LottieHandle } from "lottie-react";

interface LottiePlayerProps {
  animationData?: Record<string, unknown>;
  src?: string; // Optional remote or public URL to a Lottie JSON file
  loop?: boolean;
  autoplay?: boolean;
  hover?: boolean;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  fallbackIcon?: React.ReactNode;
}

const emptySubscribe = () => () => {};

export default function LottiePlayer({
  animationData,
  src,
  loop = true,
  autoplay = true,
  hover = false,
  speed = 1,
  className = "",
  style,
  fallbackIcon,
}: LottiePlayerProps) {
  const isMounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const lottieRef = useRef<LottieHandle | null>(null);

  useEffect(() => {
    if (lottieRef.current && speed) {
      try {
        lottieRef.current.setSpeed(speed);
      } catch {
        // Ignore speed errors if handle is not ready
      }
    }
  }, [speed, isMounted]);

  const animationSource = src || animationData;

  // SSR or loading fallback placeholder
  if (!isMounted || !animationSource) {
    return (
      <div
        className={`flex items-center justify-center rounded-2xl bg-[#1E3A8A]/5 border border-[#B8860B]/20 animate-pulse ${className}`}
        style={style}
        aria-hidden="true"
      >
        {fallbackIcon || (
          <div className="w-8 h-8 rounded-full border-2 border-[#B8860B]/40 border-t-[#B8860B] animate-spin" />
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={style}
      onMouseEnter={() => {
        if (hover && lottieRef.current) {
          lottieRef.current.play();
        }
      }}
      onMouseLeave={() => {
        if (hover && lottieRef.current) {
          lottieRef.current.pause();
        }
      }}
    >
      <Lottie
        lottieRef={lottieRef}
        src={animationSource}
        loop={loop}
        autoplay={hover ? false : autoplay}
        className="w-full h-full"
      />
    </div>
  );
}
