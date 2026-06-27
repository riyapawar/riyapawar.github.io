import { projects } from "@/lib/data";

const labelFont = { fontFamily: "var(--font-label), ui-monospace, monospace" };

const cardStyle = {
  borderRadius: "12px",
  borderColor: "var(--border)",
  background: "var(--bg-surface)",
  boxShadow: "var(--card-shadow)",
  transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
  cursor: "default" as const,
};

function onEnter(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "translateY(-2px)";
  e.currentTarget.style.boxShadow = "var(--card-shadow-hover)";
  e.currentTarget.style.borderColor = "var(--accent)";
}
function onLeave(e: React.MouseEvent<HTMLDivElement>) {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "var(--card-shadow)";
  e.currentTarget.style.borderColor = "var(--border)";
}

function ArrowUpRightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export default function Projects() {
  return (
    <div className="py-10">
      <h1
        className="text-2xl font-bold tracking-tight mb-6"
        style={{ color: "var(--text-1)" }}
      >
        Projects
      </h1>

      <div className="space-y-3">
        {projects.map((project, i) => (
          <div
            key={i}
            className="p-5 border"
            style={cardStyle}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
              <div className="min-w-0">
                <h2 className="font-semibold text-base leading-snug" style={{ color: "var(--text-1)" }}>
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-xs font-medium mt-0.5" style={{ ...labelFont, color: "var(--accent)" }}>
                    {project.subtitle}
                  </p>
                )}
              </div>

              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 shrink-0">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 px-2.5 py-1 border text-xs font-medium"
                      style={{
                        ...labelFont,
                        borderRadius: "8px",
                        color: "var(--text-2)",
                        borderColor: "var(--border)",
                        background: "var(--bg)",
                        letterSpacing: "0.04em",
                        transition: "color 150ms, border-color 150ms",
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.color = "var(--accent)";
                        e.currentTarget.style.borderColor = "var(--accent)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.color = "var(--text-2)";
                        e.currentTarget.style.borderColor = "var(--border)";
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      {link.label}
                      <ArrowUpRightIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs border"
                  style={{
                    ...labelFont,
                    borderRadius: "6px",
                    background: "var(--bg-tag)",
                    borderColor: "var(--border)",
                    color: "var(--text-3)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-base leading-7" style={{ color: "var(--text-2)" }}>
              {project.description}
            </p>

            {project.funding && (
              <p className="mt-2 text-xs italic" style={{ color: "var(--text-3)" }}>
                {project.funding}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
