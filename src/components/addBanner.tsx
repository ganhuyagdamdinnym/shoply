import { Icon } from "@iconify/react";
import { useRef, useState, type ChangeEvent } from "react";

type Props = {
  setAddBannerStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AddBanner = (props: Props) => {
  const { setAddBannerStatus } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleOverlayClick = (e: React.MouseEvent) => {
    // Хэрэв даралт нь modalRef (цагаан хэсэг) дотор биш бол хаана
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setAddBannerStatus(false);
    }
  };

  return (
    <div
      // Бүхэлд нь хамарсан overlay хэсэгт onClick өгнө
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      {/* Desktop Version */}
      <div
        ref={modalRef} // Энэ хэсэгт дарахад хаагдахгүй байхын тулд ref холбоно
        className="hidden sm:block w-full max-w-[500px] rounded-xl border border-gray-200 bg-white p-6 shadow-xl"
        // Контент доторх даралт overlay руу дамжихаас сэргийлнэ (заавал биш, дээр handleOverlayClick шалгаж байгаа)
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col gap-2 text-left">
          <h2 className="text-lg leading-none font-semibold font-gilroy">
            Баннер нэмэх
          </h2>
          <p className="text-[#71717b] text-sm">Баннерын мэдээлэл оруулна уу</p>
        </div>

        <div className="mt-4 mb-4 max-h-[60vh] overflow-y-auto pr-2">
          <div className="flex flex-col gap-4">
            <input
              ref={fileInputRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            <div>
              <label
                htmlFor="fileUpload"
                className="flex flex-col gap-2 cursor-pointer"
              >
                <span className="text-sm font-medium">
                  Брэндийн үндсэн зураг <span className="text-blue-500">*</span>
                </span>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="aspect-9/4 w-full bg-[#f5f4f4] border border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-400">
                      <Icon icon="proicons:photo" width={40} />
                    </div>
                  )}
                </div>
              </label>
              <p className="text-xs font-medium text-[#71717b] mt-2">
                Баннер зургийн хэмжээ 900x400px байвал зохино.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <button
            onClick={() => setAddBannerStatus(false)}
            className="px-4 h-9 text-sm font-medium rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            Цуцлах
          </button>
          <button className="px-4 h-9 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-blue-500 to-indigo-400 flex items-center justify-center gap-2">
            <Icon icon="gravity-ui:copy-picture" width="20" />
            Баннер нэмэх
          </button>
        </div>
      </div>

      {/* Mobile Version */}
      <div
        ref={modalRef}
        className="sm:hidden w-full bg-white rounded-t-3xl p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-6" />
        <h2 className="text-lg font-bold font-gilroy mb-1">Баннер нэмэх</h2>
        <p className="text-[#71717b] text-sm mb-6">
          Баннерын мэдээлэл оруулна уу
        </p>
        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <div className="space-y-6 mb-8">
          <div
            onClick={() => fileInputRef.current?.click()}
            className="aspect-9/4 w-full bg-[#f5f4f4] rounded-xl flex items-center justify-center"
          >
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex flex-col items-center gap-2 text-gray-400">
                <Icon icon="proicons:photo" width={40} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full h-12 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-indigo-400">
            Баннер нэмэх
          </button>
          <button
            onClick={() => setAddBannerStatus(false)}
            className="w-full h-12 text-gray-500 font-medium rounded-xl bg-gray-50"
          >
            Цуцлах
          </button>
        </div>
      </div>
    </div>
  );
};
