import { projects } from "@/lib/data";

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export default function Projects() {
  return (
    <div className="py-10">
      <h1 className="text-xl font-bold tracking-tight mb-6 px-4 -mx-4" style={{ color: "var(--text-1)" }}>Projects</h1>

      <div>
        {projects.map((project, i) => (
          <div key={i}>
            <div
              className="rounded-lg px-4 py-5 -mx-4 transition-colors duration-150"
              style={{ cursor: "default" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div className="mb-2">
                <h2 className="font-semibold text-base leading-snug" style={{ color: "var(--text-1)" }}>
                  {project.title}
                </h2>
                {project.subtitle && (
                  <p className="text-sm font-medium mt-0.5" style={{ color: "var(--accent)" }}>{project.subtitle}</p>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-xs rounded-full font-medium"
                    style={{ background: "var(--bg-tag)", color: "var(--text-3)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm leading-6" style={{ color: "var(--text-2)" }}>{project.description}</p>

              {project.funding && (
                <p className="mt-2 text-xs italic" style={{ color: "var(--text-3)" }}>{project.funding}</p>
              )}

              {project.links && project.links.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                      style={{ color: "var(--accent)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent-h)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--accent)")}
                    >
                      {link.label}
                      <ExternalLinkIcon />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {i < projects.length - 1 && (
              <div className="border-t" style={{ borderColor: "var(--border)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
