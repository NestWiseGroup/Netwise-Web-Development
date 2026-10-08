"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ArrowRight,
  Home,
  TrendingUp,
  Sparkles,
} from "@/components/shared/Icons";

interface OwnerSegmentationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OwnerSegmentationModal({
  isOpen,
  onClose,
}: OwnerSegmentationModalProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const options = [
    {
      id: "long-term",
      title: "My property is currently a long-term rental",
      icon: Home,
    },
    {
      id: "existing-str",
      title: "I already have an Airbnb or a short-term rental",
      icon: TrendingUp,
    },
    {
      id: "vacant",
      title: "I have a vacant, second, or investment home",
      icon: Sparkles,
    },
  ];

  const handleSelect = (segmentId: string) => {
    try {
      localStorage.setItem("nestwise_owner_segment", segmentId);
      localStorage.setItem("nestwise_owner_segment_timestamp", new Date().toISOString());
    } catch {}
    onClose();
    router.push(`/audit?segment=${encodeURIComponent(segmentId)}`);
  };

  return (
    <div
      className="fixed inset-0 z-[9999] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="column-segmentation-modal-title"
    >
      <div className="min-h-full flex items-center justify-center p-4 text-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Card with 3 Columns (Boxes) */}
        <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-[#E6DCB8] p-6 sm:p-8 text-left my-6 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Top Actions: Skip & Close (Cross) Button */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 z-20">
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-slate-400 hover:text-[#1E3A8A] px-2.5 py-1 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Skip
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Clean Header */}
          <div className="mb-6 pr-14 text-center sm:text-left">
            <h2
              id="column-segmentation-modal-title"
              className="font-serif text-xl sm:text-2xl font-extrabold text-[#1E3A8A] leading-snug"
            >
              Which Property Owner Are You?
            </h2>
            <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
              Select your property to see what it could earn:
            </p>
          </div>

          {/* Three Boxes in Columns (Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
            {options.map((opt) => {
              const Icon = opt.icon;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelect(opt.id)}
                  className="p-5 rounded-2xl border border-[#E6DCB8] bg-[#FDFAF5] hover:bg-white hover:border-[#B8860B] hover:shadow-lg transition-all duration-200 flex flex-col justify-between items-start text-left group cursor-pointer min-h-[160px] sm:min-h-[190px]"
                >
                  <div className="space-y-3.5 w-full">
                    {/* Icon Box */}
                    <div className="w-11 h-11 rounded-xl bg-white border border-[#E6DCB8] text-[#B8860B] flex items-center justify-center shrink-0 group-hover:bg-[#1E3A8A] group-hover:text-[#D4AF37] group-hover:border-[#1E3A8A] transition-colors shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-sm sm:text-base font-bold text-[#1E3A8A] group-hover:text-[#B8860B] transition-colors leading-snug">
                      {opt.title}
                    </h3>
                  </div>

                  {/* Bottom Select Action */}
                  <div className="pt-3 w-full flex items-center justify-between text-xs font-semibold text-[#1E3A8A] group-hover:text-[#B8860B] transition-colors border-t border-slate-100/60 mt-2">
                    <span>Select</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom Bar */}
          <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] sm:text-xs text-[#6B7280]">
            <span>Free 48-Hour Property Analysis • No Obligation</span>
            <button
              type="button"
              onClick={onClose}
              className="font-semibold text-[#1E3A8A] hover:text-[#B8860B] hover:underline cursor-pointer"
            >
              Skip to browse site →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
