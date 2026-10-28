import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiFileText,
  FiArrowLeft,
  FiSearch,
  FiInfo,
  FiHelpCircle,
  FiMail,
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

const quickLinks = [
  { to: "/about", label: "About", icon: FiInfo },
  { to: "/#faq", label: "Q&A", icon: FiHelpCircle },
  { to: "/contact", label: "Contact", icon: FiMail },
];

// Kaca pembesar dengan tanda silang (tidak ditemukan)
function SearchXIcon() {
  return (
    <svg
      aria-hidden="true"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#4F46E5"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
      <path d="M9 9l4 4" />
      <path d="M13 9l-4 4" />
    </svg>
  );
}

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "404 – Halaman tidak ditemukan | CV Scanner";
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-[#F6F7FB] bg-[radial-gradient(900px_480px_at_50%_-10%,#E0E7FF_0%,rgba(224,231,255,0)_70%)] font-['Plus_Jakarta_Sans',system-ui,sans-serif] leading-[normal] text-[#0F172A] antialiased">

      <main className="flex flex-1 items-center justify-center px-6 pb-[72px] pt-14">
        <div className="flex w-full max-w-[640px] flex-col items-center gap-6 text-center">
          {/* 404 dengan "0" berbentuk lingkaran skor */}
          <div role="img" aria-label="404" className="flex items-center justify-center gap-3.5">
            <span className="text-[120px] font-extrabold leading-none tracking-[-0.06em] sm:text-[176px]">4</span>
            <div className="flex h-[118px] w-[118px] items-center justify-center rounded-full bg-[conic-gradient(#C7D2FE_0_8%,#E5E7EF_8%_100%)] shadow-[0_20px_48px_-24px_rgba(79,70,229,0.4)] sm:h-[168px] sm:w-[168px]">
              <div className="flex h-[82px] w-[82px] items-center justify-center rounded-full bg-white sm:h-[120px] sm:w-[120px]">
                <SearchXIcon />
              </div>
            </div>
            <span className="text-[120px] font-extrabold leading-none tracking-[-0.06em] sm:text-[176px]">4</span>
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[13px] font-bold text-[#4338CA]">
            <HiOutlineSparkles size={14} />
            Error 404
          </span>

          <div className="flex flex-col items-center gap-3">
            <h1 className="m-0 text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-[40px]">
              Halaman ini nggak lolos scan
            </h1>
            <p className="m-0 max-w-[500px] text-[17px] leading-[1.6] text-[#475569]">
              Halaman yang kamu cari nggak ditemukan. Mungkin link-nya salah, atau halamannya sudah
              dipindah.
            </p>
          </div>

          <div className="mt-1 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 rounded-[14px] bg-[#4F46E5] px-[26px] py-4 text-[16px] font-bold text-white transition-colors hover:bg-[#3730A3]"
            >
              <FiArrowLeft size={18} strokeWidth={2.4} />
              Kembali ke beranda
            </Link>
            <Link
              to="/scan"
              className="inline-flex items-center gap-2.5 rounded-[14px] border border-[#D5D9E6] bg-white px-[26px] py-4 text-[16px] font-bold text-[#0F172A] transition-colors hover:bg-[#EEF2FF] hover:text-[#3730A3]"
            >
              <FiSearch size={18} />
              Scan CV
            </Link>
          </div>

          {/* Link cepat */}
          <div className="mt-4 flex w-full flex-col gap-3.5 border-t border-[#E5E7EF] pt-7">
            <span className="text-[14px] font-bold text-[#64748B]">Atau coba halaman ini</span>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-3">
              {quickLinks.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center gap-3 rounded-2xl border border-[#E5E7EF] bg-white px-4 py-3.5 text-left text-[15px] font-bold text-[#0F172A] transition-colors hover:border-[#C7D2FE] hover:bg-[#FAFAFF]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-[#EEF2FF] text-[#4F46E5]">
                    <Icon size={18} />
                  </span>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}