"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import News from "@/components/News";

type Tab = "about" | "experience" | "projects" | "news";

export default function PortfolioClient() {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  return (
    <>
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-4xl mx-auto px-6">
        {activeTab === "about" && <About />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "projects" && <Projects />}
        {activeTab === "news" && <News />}
      </main>
      <footer
        className="max-w-4xl mx-auto px-6 py-8 mt-4 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-xs" style={{ color: "var(--text-4)" }}>© 2026 Riya Pawar</p>
      </footer>
    </>
  );
}
