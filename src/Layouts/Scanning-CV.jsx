import { FiCheck, FiFileText } from "react-icons/fi";
import ScanCard from "../Components/ScanCards";
import { HiOutlineSparkles } from "react-icons/hi";

const features = ["Skor ATS", "Cek kata kunci", "Saran perbaikan"];

export default function ScanPage() {
  const handleScan = ({ file, role }) => {
    // TODO: kirim file ke backend / AI, lalu pindah ke halaman hasil
    console.log("Scan:", file.name, role);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F7FB] bg-[radial-gradient(900px_480px_at_50%_-10%,#E0E7FF_0%,rgba(224,231,255,0)_70%)] font-['Plus_Jakarta_Sans',system-ui,sans-serif] leading-[normal] text-[#0F172A] antialiased">
      {/* Navbar */}

      {/* Konten */}
      <main className="flex flex-1 items-center justify-center px-6 pb-[72px] pt-14">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-7">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[13px] font-bold text-[#4338CA]">
              <HiOutlineSparkles size={14}/>
              ATS Checker
            </span>
            <h1 className="m-0 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] sm:text-[46px]">
              Cek CV kamu lolos ATS atau nggak
            </h1>
            <p className="m-0 max-w-[520px] text-[17px] leading-[1.6] text-[#475569]">
              Upload CV, lalu lihat skor ATS dan saran perbaikan supaya CV kamu lebih mudah dibaca
              sistem rekrutmen.
            </p>
          </div>

          <ScanCard onScan={handleScan} />

          <div className="flex flex-wrap justify-center gap-x-[22px] gap-y-2.5 text-[14px] font-semibold text-[#475569]">
            {features.map((f) => (
              <span key={f} className="flex items-center gap-2">
                <FiCheck size={16} strokeWidth={2.6} className="text-[#16A34A]" />
                {f}
              </span>
            ))}
          </div>
        </div>
      </main>

      
    </div>
  );
}