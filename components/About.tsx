import Image from "next/image";
import { profile, education, publications } from "@/lib/data";

const labelFont = { fontFamily: "var(--font-label), ui-monospace, monospace" };

function TerminalLink({
  href,
  label,
  external = false,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center justify-center text-xs border w-full"
      style={{
        ...labelFont,
        borderRadius: "8px",
        borderColor: "var(--border)",
        color: "var(--text-2)",
        padding: "6px 12px",
        letterSpacing: "0.06em",
        transition: "color 150ms, border-color 150ms, background 150ms, transform 150ms",
        textDecoration: "none",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = "var(--accent)";
        e.currentTarget.style.borderColor = "var(--accent)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = "var(--text-2)";
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      [ {label} ]
    </a>
  );
}

const tickerItems = [
  "SWE Intern, DTCC",
  "Quant Research Intern, Verma Capital",
  "Undergraduate Researcher, Princeton Jha Lab",
  "Partnerships Lead, HackPrinceton",
];

export default function About() {
  const edu = education[0];
  const tickerContent = tickerItems.join("  ·  ") + "  ·  ";

  return (
    <div className="py-10">
      {/* Hero */}
      <div className="flex flex-col sm:flex-row gap-10 items-start mb-8">
        {/* Left: avatar + links */}
        <div className="shrink-0 flex flex-col gap-2" style={{ width: 180 }}>
          <div
            className="overflow-hidden"
            style={{
              width: 180,
              height: 180,
              borderRadius: "12px",
              border: "1px solid var(--border)",
              background: "var(--bg-surface)",
            }}
          >
            <Image
              src="/avatar.png"
              alt="Riya Pawar"
              width={180}
              height={180}
              className="w-full h-full object-cover object-top"
              priority
            />
          </div>
          <div className="flex flex-col gap-1.5 mt-1">
            <TerminalLink href={`mailto:${profile.email}`} label="email" />
            <TerminalLink href={profile.github} label="github" external />
            <TerminalLink href={profile.linkedin} label="linkedin" external />
          </div>
        </div>

        {/* Right: name + bio + tags */}
        <div className="flex-1 min-w-0">
          {/* Eyebrow */}
          <p
            className="text-sm mb-3 tracking-widest uppercase"
            style={{ ...labelFont, color: "var(--accent)", letterSpacing: "0.14em" }}
          >
            engineer · researcher · princeton
          </p>

          {/* Name with blinking cursor */}
          <h1
            className="font-bold mb-4 leading-tight"
            style={{ color: "var(--text-1)", fontSize: "clamp(2.4rem, 5vw, 3.8rem)" }}
          >
            {profile.name}
            <span className="cursor-blink">_</span>
          </h1>

          {/* Bio */}
          <p
            className="text-base leading-7 mb-5"
            style={{ color: "var(--text-2)", maxWidth: "58ch" }}
          >
            {profile.bio}
          </p>

          {/* Tag chips */}
          <div className="flex flex-wrap gap-2">
            {["systems", "ml", "security", "gpa 4.0", "advanced standing"].map(tag => (
              <span
                key={tag}
                className="text-sm border px-3 py-1"
                style={{
                  ...labelFont,
                  borderRadius: "6px",
                  borderColor: "var(--border)",
                  color: "var(--text-3)",
                  letterSpacing: "0.05em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* NOW → ticker */}
      <div
        className="overflow-hidden border-t border-b py-2 mb-10"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="ticker-track">
          {[tickerContent, tickerContent].map((chunk, i) => (
            <span key={i} className="text-xs" style={{ ...labelFont, color: "var(--text-3)" }}>
              <span style={{ color: "var(--accent)", fontWeight: 600, marginRight: "0.75rem" }}>
                NOW →
              </span>
              {chunk}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Below-hero sections */}
      <div className="space-y-8">
        {/* Education */}
        <section>
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ ...labelFont, color: "var(--text-4)", letterSpacing: "0.14em" }}
          >
            Education
          </h2>
          <div
            className="p-5 border"
            style={{
              borderRadius: "12px",
              borderColor: "var(--border)",
              background: "var(--bg-surface)",
              boxShadow: "var(--card-shadow)",
              transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
              e.currentTarget.style.borderColor = "var(--accent)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "var(--card-shadow)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
              <span className="font-semibold text-base" style={{ color: "var(--text-1)" }}>{edu.school}</span>
              <span className="text-sm" style={{ ...labelFont, color: "var(--text-4)" }}>{edu.dates}</span>
            </div>
            <p className="text-base mb-1" style={{ color: "var(--text-2)" }}>{edu.degree}</p>
            <p className="text-base font-medium mb-2" style={{ color: "var(--accent)" }}>GPA: {edu.gpa}</p>
            <p className="text-base mb-2" style={{ color: "var(--text-3)" }}>
              <span className="font-medium" style={{ color: "var(--text-2)" }}>Minors: </span>
              {edu.minors!.join(" · ")}
            </p>
            <p className="text-base" style={{ color: "var(--text-3)" }}>
              <span className="font-medium" style={{ color: "var(--text-2)" }}>Coursework: </span>
              {edu.coursework!.join(", ")}
            </p>
          </div>
        </section>

        {/* Publications */}
        <section>
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ ...labelFont, color: "var(--text-4)", letterSpacing: "0.14em" }}
          >
            Selected Publications
          </h2>
          <div className="space-y-2">
            {publications.map((p, i) => (
              <a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border"
                style={{
                  borderRadius: "3px",
                  borderColor: "var(--border)",
                  background: "var(--bg-surface)",
                  boxShadow: "var(--card-shadow)",
                  textDecoration: "none",
                  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "var(--card-shadow)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <p className="text-base font-medium leading-snug mb-1" style={{ color: "var(--text-1)" }}>
                  {p.title}
                </p>
                <p className="text-sm" style={{ ...labelFont, color: "var(--text-3)" }}>
                  {p.venue} · {p.year}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2
            className="text-xs font-semibold uppercase tracking-widest mb-5"
            style={{ ...labelFont, color: "var(--text-4)", letterSpacing: "0.14em" }}
          >
            Skills
          </h2>
          <div className="space-y-3 text-sm">
            {[
              { label: "Languages & Databases", value: "Python, C++, Java, C, Rust, JavaScript, TypeScript, SQL (PostgreSQL), MongoDB, Bash, HTML/CSS, LaTeX" },
              { label: "Cloud & Infrastructure", value: "AWS (EC2, S3, Lambda), Azure, Docker, Git, Linux, CI/CD pipelines" },
              { label: "Software Systems", value: "Scalable Systems Design, Full-Stack (React, Express, Flask, Firebase), API Development, SaaS Architecture, Memory Management, ARM64 Assembly" },
              { label: "Machine Learning & AI", value: "Deep Learning, Transformer Architectures, Graph Neural Networks, Knowledge Graphs, RAG, Energy-Based Models, Time-Series Analysis" },
              { label: "Mathematics & Optimization", value: "Probability & Stochastic Processes, Statistical Inference, Mathematical Optimization, Regularization Techniques" },
              { label: "Security & Cryptography", value: "Network Traffic Analysis, Penetration Testing, Ransomware Analysis, Chaos-Based Encryption" },
            ].map((row) => (
              <div key={row.label} className="flex flex-col sm:flex-row sm:gap-4">
                <span
                  className="font-medium sm:w-56 shrink-0 text-sm"
                  style={{ ...labelFont, color: "var(--text-2)", paddingTop: "2px" }}
                >
                  {row.label}
                </span>
                <span style={{ color: "var(--text-3)" }}>{row.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
