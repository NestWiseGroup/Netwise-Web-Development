"use client";

import React, { useState, useRef, useEffect, useId } from "react";
import { ChevronDown, Check } from "@/components/shared/Icons";

export interface SelectOption {
  value: string;
  label: string;
  sublabel?: string;
}

interface CustomSelectProps {
  id?: string;
  name?: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export default function CustomSelect({
  id,
  name,
  value,
  onChange,
  options,
  placeholder = "Select an option…",
  required = false,
  disabled = false,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const generatedId = useId();
  const selectId = id || generatedId;

  const selectedOption = options.find((opt) => opt.value === value);

  // Close when clicking outside
  useEffect(() => {
    const handlePointerDown = (e: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handlePointerDown);
      document.addEventListener("touchstart", handlePointerDown);
    }
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && listboxRef.current && highlightedIndex >= 0) {
      const items = listboxRef.current.querySelectorAll<HTMLLIElement>('[role="option"]');
      const item = items[highlightedIndex];
      if (item) {
        item.scrollIntoView({ block: "nearest" });
      }
    }
  }, [isOpen, highlightedIndex]);

  const openMenu = () => {
    if (disabled) return;
    const idx = options.findIndex((opt) => opt.value === value);
    setHighlightedIndex(idx >= 0 ? idx : 0);
    setIsOpen(true);
  };

  const toggleMenu = () => {
    if (disabled) return;
    if (isOpen) {
      setIsOpen(false);
    } else {
      openMenu();
    }
  };

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (!isOpen) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        openMenu();
      }
      return;
    }

    switch (e.key) {
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < options.length - 1 ? prev + 1 : 0
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : options.length - 1
        );
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        if (highlightedIndex >= 0 && highlightedIndex < options.length) {
          handleSelect(options[highlightedIndex].value);
        }
        break;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${isOpen ? "z-40" : "z-10"} ${className}`}
    >
      {/* Hidden input for form submission semantics and validation */}
      <input
        type="hidden"
        name={name || selectId}
        value={value}
        required={required}
      />

      {/* Dropdown Trigger Button */}
      <button
        id={selectId}
        type="button"
        disabled={disabled}
        onClick={toggleMenu}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full px-4 py-3 rounded-lg border text-sm text-left flex items-center justify-between gap-2.5 transition-all cursor-pointer select-none bg-[#FDFAF5]/60 hover:bg-[#FDFAF5] focus:outline-none focus:ring-2 focus:ring-[#B8860B] focus:border-transparent ${
          isOpen
            ? "border-[#B8860B] ring-2 ring-[#B8860B]/20 bg-white shadow-xs"
            : "border-[#D1D5DB] hover:border-[#B8860B]/60"
        } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
      >
        <span
          className={`block truncate ${
            selectedOption ? "text-[#111827] font-medium" : "text-[#9CA3AF]"
          }`}
        >
          {selectedOption ? selectedOption.label : placeholder}
        </span>

        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#B8860B]" : "text-[#6B7280]"
          }`}
        />
      </button>

      {/* Popover Menu */}
      {isOpen && (
        <ul
          ref={listboxRef}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={selectId}
          className="absolute left-0 right-0 top-[calc(100%+6px)] max-h-60 overflow-y-auto bg-white rounded-xl border border-[#E6DCB8] shadow-luxury-lg py-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 focus:outline-none"
        >
          {options.map((option, idx) => {
            const isSelected = option.value === value;
            const isHighlighted = idx === highlightedIndex;

            return (
              <li
                key={option.value}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlightedIndex(idx)}
                onClick={() => handleSelect(option.value)}
                className={`px-3.5 py-2.5 mx-1 rounded-lg text-sm cursor-pointer flex items-center justify-between gap-3 transition-colors select-none ${
                  isSelected
                    ? "bg-[#1E3A8A]/5 text-[#1E3A8A] font-semibold"
                    : isHighlighted
                    ? "bg-[#FDFAF5] text-[#1E3A8A]"
                    : "text-[#374151]"
                }`}
              >
                <div className="flex flex-col min-w-0">
                  <span className="truncate">{option.label}</span>
                  {option.sublabel && (
                    <span className="text-[11px] text-[#6B7280]">
                      {option.sublabel}
                    </span>
                  )}
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 text-[#B8860B] shrink-0" />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
