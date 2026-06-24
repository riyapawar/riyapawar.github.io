import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <div className="py-10">
      <h1 className="text-xl font-bold tracking-tight mb-6" style={{ color: "var(--text-1)" }}>
        Experience
      </h1>

      <div className="space-y-2">
        {experience.map((item, i) => (
          <div
            key={i}
            className="rounded-xl px-5 py-5 border"
            style={{
              borderColor: "var(--border)",
              background: "var(--bg-surface)",
              boxShadow: "var(--card-shadow)",
              transition: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1), border-color 200ms",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "var(--card-shadow-hover)";
              el.style.borderColor = "var(--border-hover)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "var(--card-shadow)";
              el.style.borderColor = "var(--border)";
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 mb-1">
              <span className="font-semibold" style={{ color: "var(--text-1)" }}>
                {item.role}
              </span>
              <span className="text-xs shrink-0" style={{ color: "var(--text-4)" }}>
                {item.dates}
              </span>
            </div>
            <p className="text-sm font-medium mb-0.5" style={{ color: "var(--accent)" }}>
              {item.org}
            </p>
            {item.team && (
              <p className="text-xs mb-1" style={{ color: "var(--text-3)" }}>{item.team}</p>
            )}
            {item.focus && (
              <p className="text-xs italic mb-2" style={{ color: "var(--text-3)" }}>{item.focus}</p>
            )}
            <ul className="mt-2 space-y-1.5">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-2)" }}>
                  <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full" style={{ background: "var(--text-4)" }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
