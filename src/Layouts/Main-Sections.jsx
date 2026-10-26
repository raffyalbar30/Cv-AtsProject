import { FiArrowRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import Badge from "../Components/Badge";
import Button from "../Components/Button";
import ScoreRing from "../Components/ScoreRing";
import InsightItem from "../Components/InsightItem";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="bg-[radial-gradient(900px_520px_at_50%_-10%,#E0E7FF_0%,rgba(224,231,255,0)_70%)] px-6 pb-14 pt-14 md:pb-[88px] md:pt-24"
    >
      {/* Teks hero */}
      <div className="mx-auto flex max-w-[820px] flex-col items-center gap-[22px] text-center">
        <Badge icon={HiOutlineSparkles}>ATS Checker berbasis AI</Badge>

        <h1 className="m-0 text-[38px] font-extrabold leading-[1.06] tracking-[-0.035em] text-[#0F172A] md:text-[60px]">
          CV bagus percuma kalau nggak lolos ATS
        </h1>

        <p className="m-0 max-w-[620px] text-[19px] leading-[1.6] text-[#475569]">
          Upload CV kamu, dapatkan skor ATS, cek kata kunci yang hilang, dan terima saran
          perbaikan sebelum kamu kirim lamaran.
        </p>

        <div className="mt-1.5 flex flex-wrap justify-center gap-3">
          <Button href="/scan" icon={FiArrowRight}>
            Scan CV Gratis
          </Button>
          <Button href="#cara-kerja" variant="secondary">
            Lihat cara kerja
          </Button>
        </div>
      </div>

      {/* Kartu contoh hasil scan */}
      <div className="mx-auto mt-16 grid max-w-[880px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6 rounded-3xl border border-[#E5E7EF] bg-white p-7 shadow-[0_30px_70px_-30px_rgba(79,70,229,0.35)]">
        <div className="flex flex-col items-center justify-center gap-3 p-3">
          <ScoreRing score={78} />
          <span className="text-[13px] text-[#64748B]">Contoh hasil scan</span>
        </div>

        <div className="flex flex-col justify-center gap-3">
          <InsightItem icon={FiCheck} tone="success">
            Format mudah dibaca sistem
          </InsightItem>
          <InsightItem icon={FiAlertCircle} tone="warning">
            Kata kunci &quot;React&quot; &amp; &quot;REST API&quot; belum ada
          </InsightItem>
          <InsightItem icon={HiOutlineSparkles} tone="info">
            Tambahkan angka pada pencapaian kerja
          </InsightItem>
        </div>
      </div>
    </section>
  );
}