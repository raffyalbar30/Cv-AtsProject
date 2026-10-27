import { FiClock, FiLock, FiUsers } from "react-icons/fi";

const principles = [
  {
    icon: FiClock,
    title: "Cepat & jelas",
    desc: "Hasil scan langsung bisa dipahami: skor, alasan, dan langkah perbaikan yang konkret.",
  },
  {
    icon: FiLock,
    title: "Privasi dijaga",
    desc: "File CV hanya dipakai untuk proses scan dan tidak dibagikan ke pihak lain.",
  },
  {
    icon: FiUsers,
    title: "Untuk semua pencari kerja",
    desc: "Fresh graduate, career switcher, atau profesional: semua bisa cek CV dengan mudah.",
  },
];

export default function Principles() {
  return (
    <section className="border-y border-[#E5E7EF] bg-white px-6 py-[72px]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#4F46E5]">
            Prinsip kami
          </span>
          <h2 className="m-0 text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] md:text-[40px]">
            Yang kami pegang
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {principles.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col gap-3.5 rounded-[20px] border border-[#E5E7EF] bg-[#FAFAFF] p-7"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-[#4F46E5] text-white">
                <Icon size={22} />
              </span>
              <h3 className="m-0 text-[20px] font-bold">{title}</h3>
              <p className="m-0 text-[15px] leading-[1.6] text-[#475569]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}