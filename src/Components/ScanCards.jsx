import { useState } from "react";
import { FiSearch, FiLock } from "react-icons/fi";
import UploadBox from "./UploadBox";


/**
 * Kartu putih berisi kotak upload, input posisi, dan tombol scan.
 * `onScan({ file, role })` dipanggil saat tombol diklik.
 */
export default function ScanCard({ onScan }) {
  const [file, setFile] = useState(null);
  const [role, setRole] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      setError("Pilih file CV dulu sebelum scan.");
      return;
    }
    setError("");
    onScan?.({ file, role });
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label="Upload CV"
      className="flex w-full flex-col gap-5 rounded-3xl border border-[#E5E7EF] bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_20px_48px_-20px_rgba(79,70,229,0.25)] sm:p-7"
    >
      <UploadBox
        file={file}
        onFileChange={(f) => {
          setFile(f);
          if (f) setError("");
        }}
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="scan-role" className="text-[14px] font-bold">
          Posisi yang dilamar <span className="font-medium text-[#64748B]">(opsional)</span>
        </label>
        <input
          id="scan-role"
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Contoh: Frontend Developer"
          className="h-12 rounded-xl border border-[#D5D9E6] bg-white px-4 text-[15px] text-[#0F172A] outline-none placeholder:text-[#64748B] focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20"
        />
      </div>

      <button
        type="submit"
        className="flex h-[54px] items-center justify-center gap-2.5 rounded-[14px] bg-[#4F46E5] text-[16px] font-bold text-white transition-colors hover:bg-[#3730A3]"
      >
        <FiSearch size={20} />
        Scan CV Sekarang
      </button>

      {error && (
        <p role="alert" className="-mt-2 mb-0 text-center text-[13px] font-semibold text-[#B91C1C]">
          {error}
        </p>
      )}

      <p className="m-0 flex items-center justify-center gap-2 text-[13px] text-[#64748B]">
        <FiLock size={14} />
        File kamu hanya dipakai untuk proses scan.
      </p>
    </form>
  );
}