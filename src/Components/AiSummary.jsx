import { HiOutlineSparkles } from "react-icons/hi";

export default function AiSummary({ text }) {
  return (
    <section
      aria-label="Ringkasan AI"
      className="flex flex-col gap-3.5 rounded-3xl bg-[#1E1B4B] p-7 text-white"
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-white/[0.12] text-[#C7D2FE]">
          <HiOutlineSparkles size={18} />
        </span>
        <h2 className="m-0 text-[18px] font-extrabold">Ringkasan AI</h2>
      </div>
      <p className="m-0 text-[16px] leading-[1.7] text-[#E0E7FF]">{text}</p>
    </section>
  );
}
 