import { experience } from "@/lib/data";

const labelFont = { fontFamily: "var(--font-label), ui-monospace, monospace" };

export default function Experience() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold tracking-tight mb-6" style={{ color: "var(--text-1)" }}>
        Experience
      </h1>

      <div className="space-y-2">
        {experience.map((item, i) => (
          <div
            key={i}
            className="px-5 py-5 border"
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
              <span className="font-semibold text-base" style={{ color: "var(--text-1)" }}>
                {item.role}
              </span>
              <span
                className="text-sm shrink-0"
                style={{ ...labelFont, color: "var(--text-4)" }}
              >
                {item.dates}
              </span>
            </div>
            <p className="text-base font-medium mb-0.5" style={{ color: "var(--accent)" }}>
              {item.org}
            </p>
            {item.team && (
              <p className="text-xs mb-1" style={{ ...labelFont, color: "var(--text-3)" }}>
                {item.team}
              </p>
            )}
            {item.focus && (
              <p className="text-xs italic mb-2" style={{ color: "var(--text-3)" }}>
                {item.focus}
              </p>
            )}
            <ul className="mt-2 space-y-1.5">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex items-start gap-2 text-base" style={{ color: "var(--text-2)" }}>
                  <span
                    className="shrink-0 mt-[7px] w-1 h-1 rounded-full"
                    style={{ background: "var(--accent)", opacity: 0.5 }}
                  />
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
