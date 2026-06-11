import { news } from "@/lib/data";

export default function News() {
  return (
    <div className="py-10">
      <h1 className="text-xl font-bold tracking-tight mb-6" style={{ color: "var(--text-1)" }}>News</h1>

      <div>
        {news.map((item, i) => (
          <div
            key={i}
            className="flex gap-6 px-4 py-3 -mx-4 rounded-lg transition-colors duration-150 border-b last:border-b-0"
            style={{ borderColor: "var(--border)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-hover)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <span className="text-xs font-medium w-24 shrink-0 pt-0.5" style={{ color: "var(--text-4)" }}>
              {item.date}
            </span>
            <p className="text-sm leading-5" style={{ color: "var(--text-2)" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
