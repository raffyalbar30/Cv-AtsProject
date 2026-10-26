export default function SectionHeader({ eyebrow, title, light = false, size = "lg" }) {
  const titleSize = size === "lg" ? "text-[30px] md:text-[40px]" : "text-[30px] md:text-[38px]";

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      {eyebrow && (
        <span className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#4F46E5]">
          {eyebrow}
        </span>
      )}
      <h2
        className={`m-0 font-extrabold leading-[1.15] tracking-[-0.03em] ${titleSize} ${
          light ? "text-white" : "text-[#0F172A]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}