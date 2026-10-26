import { FiChevronDown } from "react-icons/fi";

export default function FaqItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#E5E7EF] bg-white">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="flex min-h-16 w-full items-center justify-between gap-4 px-[22px] py-[18px] text-left text-[16px] font-bold text-[#0F172A] transition-colors hover:bg-[#FAFAFF]"
      >
        <span>{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] transition-transform duration-300 ${
            isOpen ? "rotate-180 bg-[#4F46E5] text-white" : "bg-[#EEF2FF] text-[#4F46E5]"
          }`}
        >
          <FiChevronDown size={18} aria-hidden="true" />
        </span>
      </button>

      {/* Animasi buka/tutup pakai grid-rows */}
      <div
        id={id}
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="m-0 px-[22px] pb-5 text-[15px] leading-[1.65] text-[#475569]">{answer}</p>
        </div>
      </div>
    </div>
  );
}