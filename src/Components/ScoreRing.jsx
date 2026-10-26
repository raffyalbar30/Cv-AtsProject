export default function ScoreRing({ score = 78, label = "Skor ATS" }) {
  return (
    <div
      className="flex h-[150px] w-[150px] items-center justify-center rounded-full"
      style={{ background: `conic-gradient(#4F46E5 0 ${score}%, #E5E7EF ${score}% 100%)` }}
      role="img"
      aria-label={`${label}: ${score} dari 100`}
    >
      <div className="flex h-[118px] w-[118px] flex-col items-center justify-center rounded-full bg-white">
        <span className="text-[38px] font-extrabold leading-none tracking-[-0.03em] text-[#0F172A]">
          {score}
        </span>
        <span className="mt-1 text-[12px] font-semibold text-[#64748B]">{label}</span>
      </div>
    </div>
  );
}