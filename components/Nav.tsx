"use client";

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
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm border-b"
      style={{ background: "var(--nav-bg)", borderColor: "var(--border)" }}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => setActiveTab("about")}
          className="font-semibold text-sm tracking-tight transition-colors"
          style={{ color: "var(--text-1)" }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--text-1)")}
        >
          {profile.name}
        </button>

        <nav className="flex items-center gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-3 py-1.5 text-sm rounded-md transition-colors"
              style={{
                color: activeTab === tab.id ? "var(--accent)" : "var(--text-3)",
                fontWeight: activeTab === tab.id ? 500 : 400,
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
