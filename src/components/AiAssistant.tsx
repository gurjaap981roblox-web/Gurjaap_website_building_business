import React, { useState, useRef, useEffect } from 'react';
import { AI_PRESET_RESPONSES, BRAND_CONFIG } from '../data/content.ts';
import { Sparkles, MessageSquare, X, Send, Bot, User } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  time: string;
}

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Hello! I'm GURJAAP AI, your digital venture guide. Are you looking to launch a website, develop custom software, or validate a new business idea?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'I need a website.',
    'Custom software development',
    'I have a business idea.',
    'How does pricing work?',
    'Direct contact info'
  ];

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // Generate intelligent contextual response
    setTimeout(() => {
      const lower = text.toLowerCase();
      let reply = AI_PRESET_RESPONSES.default;

      if (lower.includes('website') || lower.includes('web') || lower.includes('store') || lower.includes('ecommerce')) {
        reply = AI_PRESET_RESPONSES.website;
      } else if (lower.includes('software') || lower.includes('app') || lower.includes('code') || lower.includes('tool') || lower.includes('dashboard')) {
        reply = AI_PRESET_RESPONSES.software;
      } else if (lower.includes('idea') || lower.includes('startup') || lower.includes('plan') || lower.includes('strategy')) {
        reply = AI_PRESET_RESPONSES.idea;
      } else if (lower.includes('price') || lower.includes('cost') || lower.includes('quote') || lower.includes('rate')) {
        reply = AI_PRESET_RESPONSES.pricing;
      } else if (lower.includes('contact') || lower.includes('email') || lower.includes('phone') || lower.includes('call')) {
        reply = AI_PRESET_RESPONSES.contact;
      }

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 700);
  };

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40">
      {/* Floating Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-r from-[#00BFFF] via-[#008CFF] to-[#00BFFF] text-white font-semibold text-xs glow-cyan-md hover:glow-cyan-lg active:scale-95 transition-all shadow-2xl"
        >
          <Sparkles className="w-4 h-4 text-white animate-pulse" />
          <span>Ask GURJAAP AI</span>
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div className="w-[340px] sm:w-[380px] h-[480px] bg-[#0D1424] border border-[#00BFFF]/40 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn glow-cyan-md">
          {/* Header */}
          <div className="p-4 bg-[#0A1020] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00BFFF]/20 border border-[#00BFFF]/40 flex items-center justify-center text-[#38D9FF]">
                <Bot className="w-4 h-4" />
              </div>
              <div className="text-left">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>GURJAAP AI Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>
                <div className="text-[10px] text-[#A7B1C2]">Interactive Venture Guide</div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close assistant"
              className="p-1.5 rounded-lg text-[#A7B1C2] hover:text-white hover:bg-white/5 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-left text-xs scrollbar-thin">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-[#00BFFF]/20 border border-[#00BFFF]/30 flex items-center justify-center text-[#00BFFF] shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-xl p-3 leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-[#00BFFF] to-[#008CFF] text-white'
                      : 'bg-[#0A1020] text-[#E2E8F0] border border-[#00BFFF]/20'
                  }`}
                >
                  <p>{msg.text}</p>
                  <span className="text-[9px] opacity-60 mt-1 block text-right">
                    {msg.time}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-2 text-[#A7B1C2] text-xs pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-bounce" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-bounce [animation-delay:0.2s]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#00BFFF] animate-bounce [animation-delay:0.4s]" />
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-2 bg-[#0A1020]/70 border-t border-white/5 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(q)}
                className="whitespace-nowrap text-[10px] text-[#38D9FF] bg-[#0D1424] hover:bg-[#00BFFF]/15 border border-[#00BFFF]/20 px-2.5 py-1 rounded-full transition-colors shrink-0"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input field */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-[#0A1020] border-t border-white/10 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about website, software, or ideas..."
              className="flex-1 bg-[#0D1424] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-[#A7B1C2]/50 focus:outline-none focus:border-[#00BFFF]"
            />
            <button
              type="submit"
              aria-label="Send message"
              disabled={!inputValue.trim()}
              className="p-2 rounded-lg bg-[#00BFFF] hover:bg-[#38D9FF] text-[#05070D] transition-colors disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
