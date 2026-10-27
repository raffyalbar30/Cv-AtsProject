// Ganti dengan review ASLI dari pengguna (minta izin dulu sebelum menampilkan nama mereka)
const reviews = [
  {
    quote: "[Isi review asli dari pengguna 1: apa yang terbantu setelah scan CV.]",
    name: "[Nama pengguna 1]",
    role: "[Posisi / status, mis. fresh graduate]",
  },
  {
    quote: "[Isi review asli dari pengguna 2: apa yang terbantu setelah scan CV.]",
    name: "[Nama pengguna 2]",
    role: "[Posisi / status, mis. fresh graduate]",
  },
  {
    quote: "[Isi review asli dari pengguna 3: apa yang terbantu setelah scan CV.]",
    name: "[Nama pengguna 3]",
    role: "[Posisi / status, mis. fresh graduate]",
  },
];

function QuoteIcon() {
  return (
    <svg aria-hidden="true" width="32" height="32" viewBox="0 0 24 24" fill="#C7D2FE">
      <path d="M9.5 6C6.5 6.6 4.5 9 4.5 12.3V18h5.6v-5.6H7.4c0-2 1-3.2 2.6-3.7zm9 0c-3 .6-5 3-5 6.3V18h5.6v-5.6h-2.7c0-2 1-3.2 2.6-3.7z" />
    </svg>
  );
}

export default function Reviews() {
  return (
    <section className="px-6 py-[72px]">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#4F46E5]">
            Review pengguna
          </span>
          <h2 className="m-0 text-[28px] font-extrabold leading-[1.15] tracking-[-0.03em] md:text-[40px]">
            Kata mereka yang sudah mencoba
          </h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="m-0 flex flex-col gap-[18px] rounded-[20px] border border-[#E5E7EF] bg-white p-7 shadow-[0_20px_48px_-32px_rgba(79,70,229,0.3)]"
            >
              <QuoteIcon />
              <blockquote className="m-0 flex-1 text-[16px] leading-[1.7] text-[#334155]">
                {r.quote}
              </blockquote>
              <figcaption className="flex items-center gap-3 border-t border-[#EEF0F6] pt-[18px]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEF2FF] text-[16px] font-extrabold text-[#4F46E5]">
                  {r.name.replace(/[^A-Za-z]/g, "").charAt(0) || "?"}
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="text-[15px] font-bold text-[#0F172A]">{r.name}</span>
                  <span className="text-[13px] text-[#64748B]">{r.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}