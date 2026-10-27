import { useRef, useState } from "react";
import { FiUpload, FiX } from "react-icons/fi";

const ACCEPT = [".pdf", ".doc", ".docx"];
const MAX_SIZE = 5 * 1024 * 1024; // 5 MB

function formatSize(bytes) {
  if (bytes > 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  return Math.max(1, Math.round(bytes / 1024)) + " KB";
}

/**
 * Kotak upload CV: klik untuk pilih file, atau drag & drop.
 * `file` dan `onFileChange` dikontrol dari parent (ScanCard).
 */
export default function UploadBox({ file, onFileChange }) {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (f) => {
    if (!f) return;
    const ext = "." + f.name.split(".").pop().toLowerCase();
    if (!ACCEPT.includes(ext)) {
      setError("Format file harus PDF, DOC, atau DOCX.");
      return;
    }
    if (f.size > MAX_SIZE) {
      setError("Ukuran file maksimal 5 MB.");
      return;
    }
    setError("");
    onFileChange(f);
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  const clear = () => {
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  // ── State: file sudah dipilih ──
  if (file) {
    const ext = file.name.split(".").pop().toUpperCase().slice(0, 4);
    return (
      <div className="flex items-center gap-3.5 rounded-2xl border border-[#E5E7EF] bg-[#FAFAFF] p-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FEE2E2] text-[12px] font-extrabold text-[#B91C1C]">
          {ext}
        </span>
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="truncate text-[15px] font-bold">{file.name}</span>
          <span className="text-[13px] text-[#64748B]">{formatSize(file.size)} · Siap di-scan</span>
        </div>
        <button
          type="button"
          onClick={clear}
          aria-label="Hapus file"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#64748B] transition-colors hover:bg-[#EEF2FF]"
        >
          <FiX size={20} />
        </button>
      </div>
    );
  }

  // ── State: belum ada file ──
  return (
    <div className="flex flex-col gap-2">
      <label
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        className={`relative flex cursor-pointer flex-col items-center justify-center gap-3.5 rounded-[18px] border-2 border-dashed px-6 py-12 text-center transition-colors ${
          dragging
            ? "border-[#6366F1] bg-[#F5F5FF]"
            : "border-[#C7CBE0] bg-[#FAFAFF] hover:border-[#6366F1] hover:bg-[#F5F5FF]"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT.join(",")}
          aria-label="Pilih file CV"
          onChange={(e) => handleFile(e.target.files?.[0])}
          className="sr-only"
        />
        <span className="flex h-16 w-16 items-center justify-center rounded-[18px] bg-[#EEF2FF] text-[#4F46E5]">
          <FiUpload size={30} />
        </span>
        <span className="text-[18px] font-bold">Tarik &amp; lepas CV kamu di sini</span>
        <span className="text-[15px] text-[#64748B]">
          atau <span className="font-bold text-[#4F46E5]">pilih file</span> dari perangkat
        </span>
        <span className="text-[13px] text-[#64748B]">PDF, DOC, DOCX · maks. 5 MB</span>
      </label>

      {error && (
        <p role="alert" className="m-0 text-[13px] font-semibold text-[#B91C1C]">
          {error}
        </p>
      )}
    </div>
  );
}