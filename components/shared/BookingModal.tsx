"use client";

import React, { useEffect } from "react";
import CalendlyEmbed from "./CalendlyEmbed";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillName?: string;
  prefillEmail?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  prefillName = "",
  prefillEmail = "",
}: BookingModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      // Prevent background scrolling on both html root and body
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 overflow-y-auto overscroll-contain">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity overscroll-contain"
        onClick={onClose}
      />

      {/* Modal Card - Compact max-w-3xl to fit on laptop screens cleanly */}
      <div className="relative w-full max-w-2xl lg:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#E6DCB8] animate-in fade-in zoom-in-95 duration-200 my-auto">
        <CalendlyEmbed
          onClose={onClose}
          prefillName={prefillName}
          prefillEmail={prefillEmail}
        />
      </div>
    </div>
  );
}
