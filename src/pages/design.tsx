import { Icon } from "@iconify/react";
import { useRef, useState, type ChangeEvent } from "react";

const Design = () => {
  const [logo, setLogo] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Файл сонгох товч дээр дарах үед
  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  // Файл сонгогдсоны дараа ажиллах функц
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Зургийг устгах функц
  const removeLogo = () => {
    setLogo(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Input-ыг цэвэрлэх
    }
  };

  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] min-h-screen md:max-w-8xl mx-auto w-full font-sans">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">Дизайн тохиргоо</p>
          <p className="text-sm text-[#71717b]">
            Дэлгүүрийн харагдах байдлыг удирдах боломжтой
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="p-6 flex flex-col bg-white border border-[#e7e3e4] rounded-2xl shadow-sm">
            <div className="text-lg font-bold flex items-center gap-2">
              Дэлгүүрийн лого
            </div>
            <p className="text-xs text-[#71717b] font-medium mt-1">
              Өөрийн дэлгүүрийн лого-г оруулж өгсөнөөр таны цахим дэлгүүрийн
              дээд хэсэгт харагдана.
            </p>

            {/* Hidden Input */}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <div className="mt-6">
              <div
                onClick={handleButtonClick}
                className={`relative h-48 w-full bg-[#f9f9f9] border-2 border-dashed border-[#e7e3e4] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-all overflow-hidden group ${
                  logo ? "border-none" : ""
                }`}
              >
                {logo ? (
                  <>
                    <img
                      src={logo}
                      alt="Store logo"
                      className="w-full h-full object-contain p-4"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <p className="text-white text-sm font-medium">Солих</p>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <Icon
                      icon="ic:outline-photo"
                      width="48"
                      className="text-gray-300"
                    />
                    <span className="text-xs text-gray-400">Лого оруулах</span>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-end mt-6 gap-3">
              {logo && (
                <button
                  onClick={removeLogo}
                  className="text-red-500 text-sm font-medium px-4 py-2 hover:bg-red-50 rounded-xl transition-colors"
                >
                  Устгах
                </button>
              )}

              <button
                onClick={handleButtonClick}
                className="bg-[#f5f4f4] text-[#1b1718] inline-flex items-center text-sm justify-center gap-2 rounded-xl font-bold hover:bg-gray-200 transition-all h-11 px-6 shadow-sm"
              >
                <Icon icon="ic:outline-photo" width="20" />
                {logo ? "Лого солих" : "Лого сонгох"}
              </button>

              <button className="text-white inline-flex items-center text-sm justify-center gap-2 rounded-xl font-bold transition-all bg-gradient-to-r from-blue-600 to-indigo-500 hover:opacity-90 h-11 px-6 shadow-md shadow-blue-100">
                <Icon icon="uil:save" width="20" />
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
