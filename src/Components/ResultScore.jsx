export default function ScoreCard({ score, label }) {
  return (
    <section
      aria-label="Skor ATS"
      className="flex flex-col items-center gap-4 rounded-3xl border border-[#E5E7EF] bg-white p-7 shadow-[0_20px_48px_-28px_rgba(79,70,229,0.3)]"
    >
      <div
        className="flex h-[180px] w-[180px] items-center justify-center rounded-full"
        style={{ background: `conic-gradient(#4F46E5 0 ${score}%, #E5E7EF ${score}% 100%)` }}
        role="img"
        aria-label={`Skor ATS ${score} dari 100`}
      >
        <div className="flex h-[144px] w-[144px] flex-col items-center justify-center gap-0.5 rounded-full bg-white">
          <span className="text-[48px] font-extrabold leading-none tracking-[-0.04em]">{score}</span>
          <span className="text-[13px] font-semibold text-[#64748B]">dari 100</span>
        </div>
      </div>

      <span className="rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[14px] font-bold text-[#3730A3]">
        {label}
      </span>
    </section>
  );
}