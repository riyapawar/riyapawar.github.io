import { news } from "@/lib/data";

const labelFont = { fontFamily: "var(--font-label), ui-monospace, monospace" };

export default function News() {
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold tracking-tight mb-6" style={{ color: "var(--text-1)" }}>
        News
      </h1>

      <div className="space-y-px">
        {news.map((item, i) => (
          <div
            key={i}
            className="flex gap-6 px-4 py-3 -mx-4"
            style={{
              borderRadius: "8px",
              transition: "background 150ms",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <span
              className="text-xs font-medium w-24 shrink-0 pt-0.5 tabular-nums"
              style={{ ...labelFont, color: "var(--text-4)" }}
            >
              {item.date}
            </span>
            <p className="text-base leading-6" style={{ color: "var(--text-2)" }}>
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
