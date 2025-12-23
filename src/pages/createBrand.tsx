import { Icon } from "@iconify/react";
import { useRef, useState } from "react";

const CreateBrand = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  };

  return (
    <main className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-full md:max-w-8xl mx-auto w-full">
      <div className="max-w-md w-full mx-auto py-6 px-8 bg-white rounded-2xl border border-[#e7e3e4]">
        <h1 className="text-center font-gilroy text-xl font-semibold">
          Шинээр брэнд нэмэх
        </h1>

        <div className="w-full flex flex-col gap-4 mt-8">
          {/* ===== Brand name ===== */}
          <div className="grid w-full gap-1.5">
            <label className="text-sm font-medium mb-1">
              Брэндийн нэр <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Брэндийн нэрийг оруулна уу"
              className="h-10 w-full rounded-md px-3 border border-[#e7e3e4] focus:outline-none focus:border-blue-500 focus:border-2"
            />
          </div>

          {/* ===== Image upload ===== */}
          <div>
            <label className="text-sm font-medium mb-1 flex gap-2">
              Брэндийн үндсэн зураг <span>*</span>
            </label>

            {/* Hidden file input */}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Clickable box */}
            <div
              onClick={() => fileRef.current?.click()}
              className="aspect-square w-full bg-[#f5f4f4] border border-[#e7e3e4] rounded-xl flex items-center justify-center cursor-pointer overflow-hidden"
            >
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <Icon
                  icon="icon-park-outline:picture"
                  width="36"
                  color="gray"
                />
              )}
            </div>
          </div>

          {/* ===== Description ===== */}
          <div className="grid w-full gap-2">
            <label className="text-sm font-medium mb-1">Брэндийн тайлбар</label>
            <textarea
              placeholder="Брэндийн тайлбарыг оруулна уу"
              className="bg-[#f5f4f4] border border-[#e7e3e4] min-h-20 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:border-2"
            />
          </div>

          {/* ===== Save button ===== */}
          <div className="flex justify-end gap-2 mt-8">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm
              bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-44"
            >
              <Icon icon="lucide-lab:save" width="22" />
              <p>Хадгалах</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateBrand;
