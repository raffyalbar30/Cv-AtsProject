import { FiFileText, FiRotateCcw, FiDownload } from "react-icons/fi";
import ScoreCard from "../Components/ResultScore";
import ScoreBreakdown from "../Components/Scorebreakdown";
import AiSummary from "../Components/AiSummary";
import ResultTabs from "../Components/ResultsTabs";




const mockResult = {
  fileName: "[nama-file-cv].pdf",
  role: "Frontend Developer",
  score: 78,
  scoreLabel: "Cukup baik, masih bisa ditingkatkan",
  breakdown: [
    { label: "Format & keterbacaan", value: 92 },
    { label: "Struktur bagian", value: 85 },
    { label: "Kata kunci", value: 61 },
    { label: "Isi & pencapaian", value: 70 },
  ],
  summary:
    "CV kamu sudah memakai format yang mudah dibaca ATS dan struktur bagiannya jelas. Kekurangan utamanya ada di kata kunci teknis untuk posisi Frontend Developer dan pencapaian kerja yang belum memakai angka. Tambahkan skill yang relevan dan ukur hasil kerjamu supaya skor naik.",
  tips: [
    {
      level: "Penting",
      title: "Tambahkan kata kunci teknis",
      body: "Lowongan Frontend Developer biasanya mencari React, TypeScript, dan REST API. Cantumkan yang memang kamu kuasai di bagian Skill dan pengalaman.",
    },
    {
      level: "Penting",
      title: "Ukur pencapaianmu dengan angka",
      body: 'Ganti "membuat website" jadi kalimat yang menunjukkan hasil, misalnya jumlah fitur, pengguna, atau peningkatan kecepatan.',
    },
    {
      level: "Sedang",
      title: "Ringkas bagian profil",
      body: "Buat 2–3 kalimat yang langsung menyebut peran, skill utama, dan target karier.",
    },
    {
      level: "Ringan",
      title: "Samakan format tanggal",
      body: 'Pakai satu format yang konsisten, misalnya "Jan 2025 – Jun 2025".',
    },
  ],
  keywordsFound: ["JavaScript", "HTML", "CSS", "Git", "Tailwind CSS"],
  keywordsMissing: ["React", "TypeScript", "REST API", "Responsive Design"],
  strengths: [
    "Format satu kolom tanpa tabel, mudah dibaca ATS.",
    "Judul bagian memakai istilah umum (Pengalaman, Pendidikan, Skill).",
    "Kontak dan tautan portofolio lengkap di bagian atas.",
  ],
};

export default function ResultPage({ result = mockResult }) {
  const ext = result.fileName.split(".").pop().toUpperCase();

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F7FB] font-['Plus_Jakarta_Sans',system-ui,sans-serif] leading-[normal] text-[#0F172A] antialiased">

      <main className="flex-1 px-6 pb-[72px] pt-10">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-6">
          {/* Judul + tombol aksi */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex min-w-0 items-center gap-3.5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FEE2E2] text-[12px] font-extrabold text-[#B91C1C]">
                {ext}
              </span>
              <div className="flex min-w-0 flex-col gap-1">
                <h1 className="m-0 text-[26px] font-extrabold tracking-[-0.02em]">Hasil scan CV</h1>
                <span className="text-[14px] text-[#64748B]">
                  {result.fileName} · Posisi: {result.role || "-"}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="/scan"
                className="inline-flex items-center gap-2 rounded-xl border border-[#D5D9E6] bg-white px-[18px] py-3 text-[15px] font-bold text-[#0F172A] transition-colors hover:bg-[#EEF2FF] hover:text-[#3730A3]"
              >
                <FiRotateCcw size={16} strokeWidth={2.4} />
                Scan ulang
              </a>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#4F46E5] px-[18px] py-3 text-[15px] font-bold text-white transition-colors hover:bg-[#3730A3]"
              >
                <FiDownload size={16} strokeWidth={2.4} />
                Download laporan
              </button>
            </div>
          </div>

          {/* Dua kolom: kiri skor, kanan ringkasan + tab */}
          <div className="flex flex-wrap items-start gap-6">
            <aside className="flex min-w-0 flex-[1_1_320px] flex-col gap-6">
              <ScoreCard score={result.score} label={result.scoreLabel} />
              <ScoreBreakdown items={result.breakdown} />
            </aside>

            <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-6">
              <AiSummary text={result.summary} />
              <ResultTabs
                tips={result.tips}
                keywordsFound={result.keywordsFound}
                keywordsMissing={result.keywordsMissing}
                strengths={result.strengths}
              />
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}