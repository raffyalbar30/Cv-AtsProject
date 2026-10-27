// Warna bar: hijau ≥ 80, ungu ≥ 65, oranye di bawahnya
function barColor(value) {
  if (value >= 80) return "#16A34A";
  if (value >= 65) return "#4F46E5";
  return "#EA580C";
}

export default function ScoreBreakdown({ items }) {
  return (
    <section
      aria-label="Rincian skor"
      className="flex flex-col gap-[18px] rounded-3xl border border-[#E5E7EF] bg-white p-6"
    >
      <h2 className="m-0 text-[17px] font-extrabold">Rincian skor</h2>

      {items.map((item) => (
        <div key={item.label} className="flex flex-col gap-2">
          <div className="flex justify-between text-[14px] font-semibold">
            <span>{item.label}</span>
            <span className="text-[#475569]">{item.value}/100</span>
          </div>
          <div className="h-2.5 overflow-hidden rounded-full bg-[#EEF0F6]">
            <div
              className="h-full rounded-full"
              style={{ width: `${item.value}%`, background: barColor(item.value) }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}