import { FiUpload, FiSearch, FiEdit2 } from "react-icons/fi";
import SectionHeader from "../Components/SectionsHeader";
import StepCard from "../Components/Cards";

export const steps = [
  {
    icon: FiUpload,
    title: "1. Upload CV",
    desc: "Tarik dan lepas file CV kamu dalam format PDF atau DOCX.",
  },
  {
    icon: FiSearch,
    title: "2. Scan otomatis",
    desc: "Sistem membaca CV seperti ATS: format, struktur, dan kata kunci untuk posisi yang kamu tuju.",
  },
  {
    icon: FiEdit2,
    title: "3. Perbaiki & kirim",
    desc: "Dapatkan skor dan saran yang jelas, perbaiki CV, lalu kirim lamaran dengan lebih percaya diri.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="border-y border-[#E5E7EF] bg-white px-6 py-14 md:py-[88px]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-12">
        <SectionHeader eyebrow="Cara kerja" title="Tiga langkah, CV kamu siap kirim" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {steps.map((step) => (
            <StepCard key={step.title} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}