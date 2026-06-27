"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

type Tab = "about" | "experience" | "projects" | "news";

const tabs: { id: Tab; label: string }[] = [
  { id: "about", label: "about" },
  { id: "experience", label: "experience" },
  { id: "projects", label: "projects" },
  { id: "news", label: "news" },
];

interface NavProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export default function Nav({ activeTab, setActiveTab }: NavProps) {
  const [isDark, setIsDark] = useState(false);
  const pillRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored) {
      setIsDark(stored === "dark");
    } else {
      setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    const idx = tabs.findIndex(t => t.id === activeTab);
    const btn = tabRefs.current[idx];
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!btn || !nav || !pill) return;
    const navRect = nav.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    pill.style.left = `${btnRect.left - navRect.left}px`;
    pill.style.width = `${btnRect.width}px`;
    pill.style.opacity = "1";
  }, [activeTab]);

  function toggleTheme() {
    const next = isDark ? "light" : "dark";
    setIsDark(!isDark);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  }

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Terminal prompt */}
        <button
          onClick={() => setActiveTab("about")}
          className="flex items-center gap-2 text-sm"
          style={{ fontFamily: "var(--font-label), ui-monospace, monospace" }}
        >
          <span style={{ color: "var(--accent)", fontSize: "10px" }}>●</span>
          <span style={{ color: "var(--text-3)" }}>
            {profile.name.toLowerCase().replace(" ", "")}@princeton
          </span>
          <span style={{ color: "var(--text-4)" }}>:~$</span>
        </button>

        <div className="flex items-center gap-2">
          <nav
            ref={navRef}
            className="relative flex items-center"
            style={{ padding: "4px", fontFamily: "var(--font-label), ui-monospace, monospace" }}
          >
            {/* sliding pill */}
            <span
              ref={pillRef}
              className="absolute pointer-events-none"
              style={{
                top: 4,
                bottom: 4,
                left: 0,
                width: 0,
                opacity: 0,
                background: "var(--bg-tag)",
                borderRadius: "3px",
                border: "1px solid var(--border)",
                transition: "left 220ms cubic-bezier(0.4, 0, 0.2, 1), width 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 120ms",
              }}
            />
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                ref={el => { tabRefs.current[i] = el; }}
                onClick={() => setActiveTab(tab.id)}
                className="relative z-10 px-3 py-1.5 text-xs"
                style={{
                  color: activeTab === tab.id ? "var(--accent)" : "var(--text-3)",
                  fontWeight: activeTab === tab.id ? 600 : 400,
                  letterSpacing: "0.04em",
                  transition: "color 150ms",
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center text-sm border"
            style={{
              width: 30,
              height: 30,
              borderRadius: "3px",
              borderColor: "var(--border)",
              color: "var(--text-3)",
              fontFamily: "var(--font-label), ui-monospace, monospace",
              transition: "color 150ms, border-color 150ms, background 150ms",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--accent)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--text-3)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
            aria-label="Toggle theme"
          >
            {isDark ? "○" : "◐"}
          </button>
        </div>
      </div>
    </header>
  );
}
