import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <div className="py-10">
      <h1 className="text-xl font-bold tracking-tight mb-6" style={{ color: "var(--text-1)" }}>Experience</h1>

      <div>
        {experience.map((item, i) => (
          <div key={i}>
            <div
              className="rounded-lg px-4 py-5 -mx-4 transition-colors duration-150"
              onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
                <span className="font-semibold" style={{ color: "var(--text-1)" }}>{item.role}</span>
                <span className="text-xs shrink-0" style={{ color: "var(--text-4)" }}>{item.dates}</span>
              </div>
              <p className="text-sm font-medium mb-0.5" style={{ color: "var(--accent)" }}>{item.org}</p>
              {item.team && (
                <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>{item.team}</p>
              )}
              {item.focus && (
                <p className="text-xs italic mb-2" style={{ color: "var(--text-3)" }}>{item.focus}</p>
              )}
              <ul className="mt-2 space-y-1">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-2)" }}>
                    <span className="mt-1 shrink-0" style={{ color: "var(--border)" }}>—</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {i < experience.length - 1 && (
              <div className="border-t" style={{ borderColor: "var(--border)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
