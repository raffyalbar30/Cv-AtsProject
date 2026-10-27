import { useState } from "react";
import { FiSend, FiCheck } from "react-icons/fi";

const topics = ["Pertanyaan umum", "Masalah saat scan CV", "Saran & masukan", "Kerja sama"];

const fieldClass =
  "rounded-xl border border-[#D5D9E6] bg-white text-[15px] text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#4F46E5] focus:shadow-[0_0_0_3px_rgba(79,70,229,0.18)]";

const emptyForm = { name: "", email: "", topic: topics[0], message: "" };

export default function ContactForm() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pesan:", form);
    setSent(true);
  };

  const reset = () => {
    setForm(emptyForm);
    setSent(false);
  };

  return (
    <section
      aria-label="Form kontak"
      className="min-w-0 flex-[999_1_520px] rounded-3xl border border-[#E5E7EF] bg-white p-6 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_48px_-20px_rgba(79,70,229,0.25)] sm:p-8"
    >
      {sent ? (
        /* ── Tampilan setelah terkirim ── */
        <div className="flex flex-col items-center gap-3.5 px-4 py-12 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F0FDF4] text-[#16A34A]">
            <FiCheck size={30} strokeWidth={2.6} />
          </span>
          <h2 className="m-0 text-[24px] font-extrabold tracking-[-0.02em]">Pesan terkirim!</h2>
          <p className="m-0 max-w-[360px] text-[15px] leading-[1.6] text-[#475569]">
            Terima kasih sudah menghubungi. Balasan akan dikirim ke email kamu.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-1.5 min-h-11 rounded-xl border border-[#D5D9E6] bg-white px-[18px] py-2.5 text-[15px] font-bold text-[#0F172A] hover:bg-[#EEF2FF]"
          >
            Kirim pesan lain
          </button>
        </div>
      ) : (
        /* ── Form ── */
        <form onSubmit={handleSubmit} className="flex flex-col gap-[18px]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="ct-name" className="text-[14px] font-bold">Nama</label>
              <input
                id="ct-name"
                type="text"
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Nama kamu"
                className={`h-12 px-4 ${fieldClass}`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="ct-email" className="text-[14px] font-bold">Email</label>
              <input
                id="ct-email"
                type="email"
                required
                value={form.email}
                onChange={update("email")}
                placeholder="nama@email.com"
                className={`h-12 px-4 ${fieldClass}`}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="ct-topic" className="text-[14px] font-bold">Topik</label>
            <select
              id="ct-topic"
              value={form.topic}
              onChange={update("topic")}
              className={`h-12 px-3.5 ${fieldClass}`}
            >
              {topics.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="ct-msg" className="text-[14px] font-bold">Pesan</label>
            <textarea
              id="ct-msg"
              required
              rows={6}
              value={form.message}
              onChange={update("message")}
              placeholder="Tulis pesan kamu di sini..."
              className={`resize-y px-4 py-3.5 leading-[1.6] ${fieldClass}`}
            />
          </div>

          <button
            type="submit"
            className="flex h-[54px] items-center justify-center gap-2.5 rounded-[14px] bg-[#4F46E5] text-[16px] font-bold text-white transition-colors hover:bg-[#3730A3]"
          >
            <FiSend size={18} />
            Kirim Pesan
          </button>
        </form>
      )}
    </section>
  );
}