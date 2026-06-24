"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
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

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
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

  useLayoutEffect(() => {
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
        <button
          onClick={() => setActiveTab("about")}
          className="font-semibold text-sm tracking-tight"
          style={{
            color: "var(--text-1)",
            transition: "color 150ms",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-1)")}
        >
          {profile.name}
        </button>

        <div className="flex items-center gap-2">
          <nav
            ref={navRef}
            className="relative flex items-center"
            style={{ padding: "4px" }}
          >
            {/* sliding pill */}
            <span
              ref={pillRef}
              className="absolute rounded-md pointer-events-none"
              style={{
                top: 4,
                bottom: 4,
                left: 0,
                width: 0,
                opacity: 0,
                background: "var(--bg-surface)",
                transition: "left 220ms cubic-bezier(0.4, 0, 0.2, 1), width 220ms cubic-bezier(0.4, 0, 0.2, 1), opacity 120ms",
              }}
            />
            {tabs.map((tab, i) => (
              <button
                key={tab.id}
                ref={el => { tabRefs.current[i] = el; }}
                onClick={() => setActiveTab(tab.id)}
                className="relative z-10 px-3 py-1.5 text-sm rounded-md"
                style={{
                  color: activeTab === tab.id ? "var(--text-1)" : "var(--text-3)",
                  fontWeight: activeTab === tab.id ? 500 : 400,
                  transition: "color 150ms",
                }}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-md"
            style={{
              color: "var(--text-3)",
              transition: "color 150ms, background 150ms",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.color = "var(--text-1)";
              e.currentTarget.style.background = "var(--bg-surface)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = "var(--text-3)";
              e.currentTarget.style.background = "transparent";
            }}
            aria-label="Toggle theme"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </header>
  );
}
