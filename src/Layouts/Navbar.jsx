import { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Button from "../Components/Button";
import Logo from "../Components/Logo";
import NavLinks from "../Components/Menu";


export default function Navbar() {
    
 const navLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
 ];

  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  // Tutup menu saat tekan Escape, atau saat layar dilebarkan ke ukuran desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    const onResize = () => window.innerWidth >= 768 && close();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
     <header className="sticky top-0 z-50 border-b border-[#E5E7EF] bg-[#F6F7FB]/[0.82] backdrop-blur-[10px]">
      <nav
        aria-label="Navigasi utama"
        className="flex items-center justify-between gap-4 px-6 py-4"
      >
        <Logo />

        {/* Menu desktop (md ke atas) */}
        <div className="mr-8 hidden items-center gap-6 text-[15px] font-semibold md:flex">
          <NavLinks links={navLinks} />
          <Button href="/scan" size="sm">
            Scan CV
          </Button>
        </div>

        {/* Tombol hamburger (mobile saja) */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="flex h-11 w-11 items-center justify-center rounded-xl text-[#0F172A] transition-colors hover:bg-[#EEF2FF] md:hidden"
        >
          {open ? <IoMdClose size={24} /> : <CiMenuFries size={24} />}
        </button>
      </nav>

      {/* Panel menu mobile */}
      <div
        id="mobile-menu"
        className={`grid border-t border-[#E5E7EF] bg-[#F6F7FB] transition-all duration-300 md:hidden ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "pointer-events-none grid-rows-[0fr] border-transparent opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 px-6 py-4 text-[16px] font-semibold">
            <NavLinks
              links={navLinks}
              onClick={close}
              className="rounded-xl px-3 py-3 hover:bg-[#EEF2FF]"
            />
            <Button href="/scan" size="sm" onClick={close} className="mt-2 w-full py-3">
              Scan CV
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
