export default function ProblemSolution() {
  return (
    <section className="px-6 pb-[72px]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-stretch gap-6">
        {/* Masalah */}
        <div className="flex flex-col gap-3.5 rounded-3xl border border-[#E5E7EF] bg-white p-9">
          <span className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#4F46E5]">
            Masalahnya
          </span>
          <h2 className="m-0 text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] md:text-[30px]">
            Banyak CV gugur sebelum dibaca HRD
          </h2>
          <p className="m-0 text-[16px] leading-[1.7] text-[#475569]">
            Perusahaan memakai ATS untuk menyaring lamaran. Format yang rumit atau kata kunci yang
            kurang pas bisa membuat CV yang sebenarnya bagus tidak pernah sampai ke tangan perekrut.
          </p>
        </div>

        {/* Solusi */}
        <div className="flex flex-col gap-3.5 rounded-3xl bg-[#1E1B4B] p-9 text-white">
          <span className="text-[14px] font-bold uppercase tracking-[0.06em] text-[#A5B4FC]">
            Solusinya
          </span>
          <h2 className="m-0 text-[28px] font-extrabold leading-[1.2] tracking-[-0.03em] md:text-[30px]">
            Cek dulu, perbaiki, baru kirim
          </h2>
          <p className="m-0 text-[16px] leading-[1.7] text-[#E0E7FF]">
            CV Scanner membaca CV kamu seperti ATS, memberi skor, menunjukkan kata kunci yang
            hilang, dan menjelaskan apa yang perlu diperbaiki dengan bahasa yang mudah dipahami.
          </p>
        </div>
      </div>
    </section>
  );
}