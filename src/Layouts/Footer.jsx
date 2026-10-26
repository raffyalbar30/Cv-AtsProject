import NavLinks from "../Components/Menu";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
  { label: "Q&A", href: "#faq" },
];
 
export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#E5E7EF] bg-white">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-4 px-6 py-7 text-sm text-[#64748B]">
        <span>
          © {new Date().getFullYear()} CV Scanner. All rights reserved by{" "}
          <strong className="text-[#0F172A]">Raffy</strong>.
        </span>
        <div className="flex gap-6 font-semibold">
          <NavLinks links={footerLinks} />
        </div>
      </div>
    </footer>
  );
}
