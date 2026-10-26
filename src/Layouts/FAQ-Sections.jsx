import { useState } from "react";
import SectionHeader from "../Components/SectionsHeader";
import FaqItem from "../Components/FaqItems";

export const faqs = [
  {
    question: "Apa itu ATS?",
    answer:
      "ATS (Applicant Tracking System) adalah software yang dipakai perusahaan untuk menyaring CV secara otomatis sebelum dibaca HRD. CV yang formatnya sulit dibaca atau kurang kata kunci bisa tersaring lebih dulu.",
  },
  {
    question: "Format file apa saja yang didukung?",
    answer: "Kamu bisa upload CV dalam format PDF, DOC, atau DOCX.",
  },
  {
    question: "Apakah CV saya aman?",
    answer: "File CV hanya dipakai untuk proses scan dan tidak dibagikan ke pihak lain.",
  },
  {
    question: "Apakah layanan ini gratis?",
    answer: "Ya, kamu bisa scan CV secara gratis.",
  },
  {
    question: "Bagaimana cara menaikkan skor ATS?",
    answer:
      "Pakai format sederhana tanpa tabel atau kolom rumit, gunakan judul bagian yang umum (Pengalaman, Pendidikan, Skill), dan cantumkan kata kunci yang sesuai dengan lowongan yang kamu lamar.",
  },
];
 
export default function FaqSection() {
  // index FAQ yang terbuka; -1 = semua tertutup. Default: pertanyaan pertama terbuka.
  const [openIndex, setOpenIndex] = useState(0);
 
  return (
    <section id="faq" className="px-6 py-14 md:py-[88px]">
      <div className="mx-auto flex max-w-[760px] flex-col gap-9">
        <SectionHeader eyebrow="Q&A" title="Pertanyaan yang sering ditanyakan" />
        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FaqItem
              key={item.question}
              id={`faq-${i}`}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 