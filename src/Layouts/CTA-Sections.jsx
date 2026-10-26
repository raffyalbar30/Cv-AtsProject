import { FiArrowRight } from "react-icons/fi";
import Button from "../Components/Button";
import SectionHeader from "../Components/SectionsHeader";

 
export default function CtaSection() {
  return (
    <section className="px-6 pb-14 md:pb-[88px]">
      <div className="mx-auto flex max-w-[1120px] flex-col items-center gap-[18px] rounded-[28px] bg-[#1E1B4B] px-8 py-14 text-center">
        <SectionHeader title="Siap cek CV kamu?" light size="md" />
        <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#C7D2FE]">
          Cuma butuh beberapa detik untuk tahu apa yang perlu diperbaiki.
        </p>
        <Button href="/scan" variant="light" icon={FiArrowRight} className="mt-1.5">
          Mulai Scan CV
        </Button>
      </div>
    </section>
  );
}