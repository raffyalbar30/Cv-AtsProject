import { HiOutlineSparkles } from "react-icons/hi";
import ContactInfo from "../Components/ContactInfo";
import ContactForm from "../Components/Contact-form";


export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F6F7FB] bg-[radial-gradient(900px_480px_at_50%_-10%,#E0E7FF_0%,rgba(224,231,255,0)_70%)] font-['Plus_Jakarta_Sans',system-ui,sans-serif] leading-[normal] text-[#0F172A] antialiased">
    

      <main className="flex-1 px-6 pb-[88px] pt-16">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-12">
          <div className="flex flex-col items-center gap-3.5 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2FF] px-3.5 py-1.5 text-[13px] font-bold text-[#4338CA]">
              <HiOutlineSparkles size={14} />
              Hubungi kami
            </span>
            <h1 className="m-0 text-[36px] font-extrabold leading-[1.1] tracking-[-0.03em] md:text-[46px]">
              Ada pertanyaan atau masukan?
            </h1>
            <p className="m-0 max-w-[540px] text-[17px] leading-[1.6] text-[#475569]">
              Kirim pesan lewat form di bawah, atau hubungi langsung lewat kontak yang tersedia.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-6">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>

    
    </div>
  );
}