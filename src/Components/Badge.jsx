export default function Badge({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[13px] font-bold text-[#4338CA]">
      {Icon && <Icon size={14} aria-hidden="true" />}
      {children}
    </span>
  );
}