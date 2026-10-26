const tones = {
  success: "bg-[#F0FDF4] text-[#166534]",
  warning: "bg-[#FFF7ED] text-[#9A3412]",
  info: "bg-[#EEF2FF] text-[#3730A3]",
};

export default function InsightItem({ icon: Icon, tone = "info", children }) {
  return (
    <div
      className={`flex items-center gap-3 rounded-[14px] px-4 py-3.5 text-[14px] font-semibold ${tones[tone]}`}
    >
      <Icon size={18} className="shrink-0" aria-hidden="true" />
      {children}
    </div>
  );
}