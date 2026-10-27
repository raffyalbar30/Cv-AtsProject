import { FiArrowRight } from "react-icons/fi";

export default function AboutCta() {
  return (
    <section className="px-6 pb-[88px]">
      <div className="mx-auto flex max-w-[1184px] flex-col items-center gap-[18px] rounded-[28px] bg-[#1E1B4B] px-8 py-14 text-center">
        <h2 className="m-0 text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] text-white md:text-[38px]">
          Siap cek CV kamu?
        </h2>
        <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#C7D2FE]">
          Upload CV dan lihat apa yang bisa diperbaiki.
        </p>
        <a
          href="/scan"
          className="mt-1.5 inline-flex items-center gap-2.5 rounded-[14px] bg-white px-[26px] py-4 text-[16px] font-bold text-[#1E1B4B] transition-colors hover:bg-[#EEF2FF]"
        >
          Mulai Scan CV <FiArrowRight size={18} />
        </a>
      </div>
    </section>
  );
}