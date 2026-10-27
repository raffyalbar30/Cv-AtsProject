import { HiOutlineSparkles } from "react-icons/hi";

export default function AboutHero() {
  return (
    <section className="bg-[radial-gradient(900px_480px_at_50%_-10%,#E0E7FF_0%,rgba(224,231,255,0)_70%)] px-6 pb-[72px] pt-[88px]">
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-5 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[13px] font-bold text-[#4338CA]">
          <HiOutlineSparkles size={14} />
          Tentang kami
        </span>
        <h1 className="m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-0.035em] md:text-[52px]">
          Bantu CV kamu dibaca, bukan tersaring
        </h1>
        <p className="m-0 max-w-[620px] text-[18px] leading-[1.65] text-[#475569]">
          CV Scanner dibuat untuk pencari kerja yang ingin tahu bagaimana CV mereka dibaca oleh
          sistem rekrutmen otomatis, lalu memperbaikinya sebelum melamar.
        </p>
      </div>
    </section>
  );
}
 