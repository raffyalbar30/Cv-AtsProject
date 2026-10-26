import { IoDocumentTextOutline } from "react-icons/io5";




export default function Logo() {
  return (
    <a href="/" className="flex ml-8 items-center gap-2.5 text-[#0F172A] hover:text-[#0F172A]">
      <IconBox icon={IoDocumentTextOutline} size="sm" />
      <span className="text-[19px] font-extrabold tracking-[-0.01em]">CV Scanner</span>
    </a>
  );
}

const sizes = {
  sm: { box: "h-9 w-9 rounded-[10px]", icon: 20 }, 
  md: { box: "h-12 w-12 rounded-[14px]", icon: 22 },
};

function IconBox({ icon: Icon, size = "md" }) {
  const s = sizes[size];
  return (
    <span className={`flex shrink-0 items-center justify-center bg-[#4F46E5] text-white ${s.box}`}>
      <Icon size={s.icon} strokeWidth={2.2} aria-hidden="true" />
    </span>
  );
}