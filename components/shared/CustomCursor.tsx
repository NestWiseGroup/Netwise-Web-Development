"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<"default" | "interactive" | "gold">("default");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable on mobile/touch devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Direct instant repositioning for inner dot (zero lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    // Smooth lerp trailing physics for the outer ring
    const render = () => {
      ringX += (mouseX - ringX) * 0.22;
      ringY += (mouseY - ringY) * 0.22;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isGold =
        target.classList.contains("btn-gold") ||
        target.closest(".btn-gold") ||
        target.closest("[class*='gold']") ||
        target.closest("[class*='B8860B']") ||
        target.closest("[class*='D4AF37']");

      if (isGold) {
        setHoverState("gold");
        return;
      }

      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.tagName === "INPUT" ||
        target.tagName === "SELECT" ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.classList.contains("cursor-pointer");

      if (isInteractive) {
        setHoverState("interactive");
      } else {
        setHoverState("default");
      }
    };

    const onMouseLeaveDoc = () => setIsVisible(false);
    const onMouseEnterDoc = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeaveDoc);
    document.addEventListener("mouseenter", onMouseEnterDoc);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeaveDoc);
      document.removeEventListener("mouseenter", onMouseEnterDoc);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Dot (Hardware-accelerated translate3d) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            hoverState === "gold"
              ? "w-3 h-3 bg-[#1E3A8A] ring-2 ring-white shadow-md scale-125"
              : hoverState === "interactive"
              ? "w-2.5 h-2.5 bg-[#D4AF37] scale-125 shadow-sm"
              : "w-2 h-2 bg-[#B8860B]"
          }`}
        />
      </div>

      {/* Trailing Outer Ring (Smooth Lerp RAF) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform -translate-x-1/2 -translate-y-1/2"
        style={{ transform: "translate3d(-100px, -100px, 0)" }}
      >
        <div
          className={`rounded-full border transition-all duration-200 ${
            hoverState === "gold"
              ? "w-11 h-11 border-[#1E3A8A] bg-[#1E3A8A]/15 shadow-sm scale-110"
              : hoverState === "interactive"
              ? "w-10 h-10 border-[#D4AF37] bg-[#B8860B]/10 scale-105"
              : "w-7 h-7 border-[#B8860B]/40 bg-transparent"
          }`}
        />
      </div>
    </>
  );
}
