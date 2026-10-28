import { FiMail, FiInstagram, FiLinkedin, FiInfo } from "react-icons/fi";

// Ganti dengan kontak asli kamu
const contacts = [
  { icon: FiMail, label: "Email", value: "[raffialbar135@gmail.com]", href: "mailto:email@kamu.com" },
  { icon: FiInstagram, label: "Instagram", value: "[@raffy_samaa]", href: "#" },
  { icon: FiLinkedin, label: "LinkedIn", value: "[mohammadraffyalbar]", href: "#" },
];

export default function ContactInfo() {
  return (
    <section aria-label="Info kontak" className="flex min-w-0 flex-[1_1_320px] flex-col gap-3.5">
      {contacts.map(({ icon: Icon, label, value, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noreferrer"
          className="flex items-center gap-4 rounded-[20px] border border-[#E5E7EF] bg-white p-5 text-[#0F172A] transition-colors hover:border-[#C7D2FE] hover:bg-[#FAFAFF]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#EEF2FF] text-[#4F46E5]">
            <Icon size={22} />
          </span>
          <span className="flex min-w-0 flex-col gap-1">
            <span className="text-[13px] font-semibold text-[#64748B]">{label}</span>
            <span className="truncate text-[16px] font-bold">{value}</span>
          </span>
        </a>
      ))}

      <div className="flex items-start gap-3.5 rounded-[20px] bg-[#1E1B4B] p-5 text-[#E0E7FF]">
        <FiInfo size={20} className="mt-0.5 shrink-0 text-[#A5B4FC]" />
        <p className="m-0 text-[14px] leading-[1.6]">
          Untuk pertanyaan seputar hasil scan, cek dulu bagian{" "}
          <a href="/#faq" className="font-bold text-white underline">
            Q&amp;A
          </a>
          . Siapa tahu jawabannya sudah ada.
        </p>
      </div>
    </section>
  );
}