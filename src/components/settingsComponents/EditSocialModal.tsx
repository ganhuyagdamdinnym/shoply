import { Icon } from "@iconify/react";
import { useRef } from "react";

type EditProps = {
  platform: { name: string; link: string };
  onClose: () => void;
};

export const EditSocialModal = ({ platform, onClose }: EditProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className="w-full sm:max-w-125 bg-white rounded-t-3xl sm:rounded-xl p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sm:hidden w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />

        <div className="flex flex-col gap-2 text-left mb-6">
          <h2 className="text-lg font-bold font-gilroy text-black">
            {platform.name} холбоос засах
          </h2>
          <p className="text-[#71717b] text-sm">
            Хэрэглэгчдэд харагдах зөв холбоосыг оруулна уу.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-black">
              Холбоос (URL) <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              autoFocus
              defaultValue={platform.link === "---" ? "" : platform.link}
              placeholder={`https://www.${platform.name.toLowerCase()}.com/yourpage`}
              className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-[#f5f4f4] focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-black"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 h-12 sm:h-10 text-sm font-medium rounded-xl sm:rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-black"
          >
            Цуцлах
          </button>
          <button className="w-full sm:w-auto px-6 h-12 sm:h-10 text-sm font-medium text-white rounded-xl sm:rounded-lg bg-linear-to-r from-blue-500 to-indigo-400 flex items-center justify-center gap-2">
            <Icon icon="lucide:save" width="18" />
            Хадгалах
          </button>
        </div>
      </div>
    </div>
  );
};
