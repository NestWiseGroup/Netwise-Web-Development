"use client";

import React, { useState } from "react";

interface ChatbaseWidgetProps {
  initialOpen?: boolean;
  inline?: boolean;
  className?: string;
}

export default function ChatbaseWidget({
  initialOpen = false,
  inline = false,
  className = "",
}: ChatbaseWidgetProps) {
  const [isOpen, setIsOpen] = useState(initialOpen || inline);
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string; time: string }[]
  >([
    {
      role: "bot",
      text: "Welcome to NestWise Group Operational Intelligence. Ask me anything regarding Seattle SMC 6.600 STR rules, our 22% flat fee structure, or onboarding turnarounds.",
      time: "Just now",
    },
  ]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const quickPrompts = [
    "What are Seattle's 2-unit STR rules?",
    "How does your 22% flat fee work?",
    "What is the onboarding timeline?",
  ];

  const handleSend = (queryText?: string) => {
    const textToSend = queryText || inputQuestion;
    if (!textToSend.trim()) return;

    const userMsg = { role: "user" as const, text: textToSend, time: "Just now" };
    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInputQuestion("");
    setIsTyping(true);

    setTimeout(() => {
      let reply = "";
      const lower = textToSend.toLowerCase();
      if (lower.includes("fee") || lower.includes("22%") || lower.includes("cost") || lower.includes("charge")) {
        reply =
          "NestWise Group operates on a transparent 22% flat fee on gross booking revenues. There are zero onboarding fees, zero linen replacement deductions, and zero long-term cancellation penalties.";
      } else if (lower.includes("seattle") || lower.includes("rule") || lower.includes("permit") || lower.includes("smc") || lower.includes("compliance")) {
        reply =
          "In Seattle (SMC 6.600), operators can host up to two STR units: your primary residence plus one additional unit. In Bellevue, STRs require city registration and King County lodging tax filings. We handle 100% of regulatory paperwork and compliance guardrails.";
      } else if (lower.includes("timeline") || lower.includes("onboard") || lower.includes("start") || lower.includes("fast")) {
        reply =
          "Onboarding is completed within 5 to 7 business days from on-site inspection. This covers professional HDR architectural staging, smart lock deployment, dynamic rate curve calibration, and multi-channel OTA syndication.";
      } else {
        reply =
          "Our local Bellevue & Seattle team manages 24/7 guest communications, automated AI yield pricing, and hotel-grade turnovers. Would you like to connect directly via +1 (425) 414-6819?";
      }

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: reply, time: "Just now" },
      ]);
      setIsTyping(false);
    }, 900);
  };

  const widgetContent = (
    <div className="rounded-2xl border border-[#E2E8F0] bg-[#FAFAF8] overflow-hidden flex flex-col h-[400px] shadow-sm">
      {/* Header */}
      <div className="bg-[#1E3A8A] text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <span className="text-xs font-serif font-bold text-[#FDF6E2] block">
              NestWise AI Operational Assistant
            </span>
            <span className="text-[10px] text-slate-300 block">
              Trained on PNW Short-Term Rental Codes
            </span>
          </div>
        </div>
        <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-200 border border-white/15">
          Chatbase Core
        </span>
      </div>

      {/* Message List */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl p-3.5 ${
                msg.role === "user"
                  ? "bg-[#1E3A8A] text-white rounded-br-none shadow-sm"
                  : "bg-white text-[#1F2937] border border-[#E2E8F0] rounded-bl-none shadow-sm"
              }`}
            >
              <p className="leading-relaxed">{msg.text}</p>
              <span
                className={`text-[9px] block mt-1 text-right ${
                  msg.role === "user" ? "text-slate-300" : "text-[#9CA3AF]"
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-[#6B7280] border border-[#E2E8F0] rounded-2xl rounded-bl-none p-3 shadow-sm flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-bounce" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-bounce [animation-delay:0.2s]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-bounce [animation-delay:0.4s]" />
            </div>
          </div>
        )}
      </div>

      {/* Suggested Quick Prompt Pills */}
      <div className="px-3 py-2 bg-white border-t border-[#E2E8F0] flex gap-1.5 overflow-x-auto">
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSend(prompt)}
            className="text-[10px] font-medium whitespace-nowrap px-2.5 py-1 rounded-full bg-[#FDFAF5] text-[#1E3A8A] border border-[#E6DCB8] hover:bg-[#1E3A8A] hover:text-white transition-colors cursor-pointer"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <div className="p-3 bg-white border-t border-[#E2E8F0] flex items-center gap-2">
        <input
          type="text"
          placeholder="Ask about 22% fee, Seattle permits, or ADR..."
          value={inputQuestion}
          onChange={(e) => setInputQuestion(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 px-3 py-2 text-xs rounded-lg border border-[#CBD5E1] bg-[#FDFAF5] focus:outline-none focus:ring-1 focus:ring-[#B8860B]"
        />
        <button
          type="button"
          onClick={() => handleSend()}
          className="p-2 rounded-lg bg-[#1E3A8A] text-white hover:bg-[#B8860B] transition-colors cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
        </button>
      </div>
    </div>
  );

  if (inline) {
    return <div className={className}>{widgetContent}</div>;
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] shadow-luxury-lg animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 text-white/80 hover:text-white p-1 rounded hover:bg-white/10"
              aria-label="Close Chat"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {widgetContent}
          </div>
        </div>
      )}

      {/* Circular Floating Launcher with Clean Message Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Operational Intelligence Chat"
        className="w-14 h-14 rounded-full btn-gold shadow-luxury flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-all relative group"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>

        {/* Subtle Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
      </button>
    </div>
  );
}
