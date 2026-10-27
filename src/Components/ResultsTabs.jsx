import { useState } from "react";
import { FiCheck, FiPlus } from "react-icons/fi";

const TABS = [
  { id: "saran", label: "Saran perbaikan" },
  { id: "keyword", label: "Kata kunci" },
  { id: "kuat", label: "Kelebihan CV" },
];

const levelStyle = {
  Penting: "bg-[#FEE2E2] text-[#B91C1C]",
  Sedang: "bg-[#FFF7ED] text-[#9A3412]",
  Ringan: "bg-[#EEF2FF] text-[#3730A3]",
};

export default function ResultTabs({ tips, keywordsFound, keywordsMissing, strengths }) {
  const [tab, setTab] = useState("saran");

  return (
    <section className="overflow-hidden rounded-3xl border border-[#E5E7EF] bg-white">
      {/* Tombol tab */}
      <div
        role="tablist"
        aria-label="Detail hasil"
        className="flex flex-wrap gap-1.5 border-b border-[#E5E7EF] p-2.5"
      >
        {TABS.map((t) => {
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setTab(t.id)}
              className={`min-h-11 rounded-xl px-[18px] py-2.5 text-[15px] font-bold transition-colors ${
                active ? "bg-[#4F46E5] text-white" : "text-[#475569] hover:bg-[#EEF2FF]"
              }`}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div className="p-6">
        {/* Tab: Saran perbaikan */}
        {tab === "saran" && (
          <ol className="m-0 flex list-none flex-col gap-3.5 p-0">
            {tips.map((tip) => (
              <li
                key={tip.title}
                className="flex gap-3.5 rounded-2xl border border-[#EEF0F6] bg-[#FAFAFF] p-4"
              >
                <span
                  className={`shrink-0 self-start rounded-lg px-2.5 py-1 text-[12px] font-extrabold ${levelStyle[tip.level]}`}
                >
                  {tip.level}
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="text-[15px] font-bold">{tip.title}</span>
                  <span className="text-[14px] leading-[1.6] text-[#475569]">{tip.body}</span>
                </div>
              </li>
            ))}
          </ol>
        )}

        {/* Tab: Kata kunci */}
        {tab === "keyword" && (
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2.5">
              <h3 className="m-0 text-[15px] font-bold">Sudah ada di CV</h3>
              <div className="flex flex-wrap gap-2">
                {keywordsFound.map((k) => (
                  <span
                    key={k}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#F0FDF4] px-3.5 py-2 text-[14px] font-semibold text-[#166534]"
                  >
                    <FiCheck size={14} strokeWidth={2.8} /> {k}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              <h3 className="m-0 text-[15px] font-bold">Belum ada, disarankan ditambah</h3>
              <div className="flex flex-wrap gap-2">
                {keywordsMissing.map((k) => (
                  <span
                    key={k}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF7ED] px-3.5 py-2 text-[14px] font-semibold text-[#9A3412]"
                  >
                    <FiPlus size={14} strokeWidth={2.8} /> {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab: Kelebihan CV */}
        {tab === "kuat" && (
          <ul className="m-0 flex list-none flex-col gap-3 p-0">
            {strengths.map((s) => (
              <li key={s} className="flex items-start gap-3 text-[15px] leading-[1.6]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F0FDF4] text-[#16A34A]">
                  <FiCheck size={16} strokeWidth={2.8} />
                </span>
                {s}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}