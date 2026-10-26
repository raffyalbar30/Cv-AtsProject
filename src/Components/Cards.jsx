export default function StepCard({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col gap-3.5 rounded-[20px] border border-[#E5E7EF] bg-[#FAFAFF] p-7">
      <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#4F46E5] text-white">
        <Icon size={22} aria-hidden="true" />
      </span>
      <h3 className="m-0 text-[20px] font-bold text-[#0F172A]">{title}</h3>
      <p className="m-0 text-[15px] leading-[1.6] text-[#475569]">{desc}</p>
    </div>
  );
}