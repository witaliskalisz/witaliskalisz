"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DEFAULT_FOLLOWUPS,
  DEFAULT_GREETING,
  findCannedResponse,
} from "./canned-responses";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

type Message = {
  id: string;
  role: "user" | "bot";
  text: string;
  followups?: string[];
};

const id = () => Math.random().toString(36).slice(2);

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: id(), role: "bot", text: DEFAULT_GREETING, followups: DEFAULT_FOLLOWUPS },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  function sendUser(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Message = { id: id(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTimeout(() => {
      const { answer, followups } = findCannedResponse(trimmed);
      setMessages((m) => [...m, { id: id(), role: "bot", text: answer, followups }]);
    }, 500);
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 280, damping: 22 }}
        className="fixed bottom-5 right-5 z-40"
      >
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Zamknij asystenta" : "Otwórz asystenta"}
          className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary via-primary to-[hsl(var(--neon))] text-primary-foreground shadow-[0_10px_40px_-8px_hsl(var(--primary)/0.6)] transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <span className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--neon))] opacity-50 blur-lg group-hover:opacity-80 transition-opacity -z-10" />
          <AnimatePresence mode="wait">
            {open ? (
              <motion.span
                key="x"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <X className="size-6" />
              </motion.span>
            ) : (
              <motion.span
                key="msg"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
              >
                <MessageCircle className="size-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-5 z-40 w-[min(380px,calc(100vw-2.5rem))] h-[min(560px,calc(100dvh-9rem))] flex flex-col rounded-3xl border border-border bg-card/95 backdrop-blur-2xl shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-4 border-b border-border/50 flex items-center justify-between bg-gradient-to-r from-primary/5 to-[hsl(var(--neon))]/5">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="size-9 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--neon))] flex items-center justify-center">
                    <Sparkles className="size-4 text-primary-foreground" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full bg-success border-2 border-card" />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-none">Asystent Witalis</p>
                  <p className="text-[10px] text-muted-foreground mt-1">
                    Aktywny · Średni czas odpowiedzi ~30s
                  </p>
                </div>
              </div>
              <Badge variant="glass" className="text-[9px]">DEMO</Badge>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-5 py-4 space-y-4 no-scrollbar"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[85%] space-y-2">
                    <div
                      className={`px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.role === "user"
                          ? "bg-primary text-primary-foreground rounded-br-sm"
                          : "bg-muted text-foreground rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                    {m.followups && m.followups.length > 0 && m.role === "bot" && (
                      <div className="flex flex-wrap gap-1.5">
                        {m.followups.map((q, i) => (
                          <button
                            key={i}
                            onClick={() => sendUser(q)}
                            className="text-[11px] px-2.5 py-1 rounded-full border border-border bg-background hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            {q}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendUser(input);
              }}
              className="border-t border-border/50 p-3 flex gap-2"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Napisz pytanie..."
                className="h-10 text-sm"
              />
              <Button type="submit" variant="primary" size="icon" disabled={!input.trim()}>
                <Send className="size-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
