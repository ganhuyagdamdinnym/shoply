import { Icon } from "@iconify/react";
import { useState } from "react";

// Боломжит атрибутуудын дата (Энэ нь backend-ээс ирэх жагсаалт)
const AVAILABLE_ATTRIBUTES = [
  { id: "1", name: "Өнгө", values: ["Хар", "Цагаан", "Улаан", "Цэнхэр"] },
  { id: "2", name: "Хэмжээ", values: ["S", "M", "L", "XL", "2XL"] },
];

export const CreatingProductInfo = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  // Атрибутуудыг хадгалах state
  const [selectedAttributes, setSelectedAttributes] = useState<
    { attrId: string; value: string }[]
  >([]);

  // Атрибут нэмэх, хасах, шинэчлэх үйлдлүүд
  const addAttributeRow = () =>
    setSelectedAttributes([...selectedAttributes, { attrId: "", value: "" }]);
  const removeAttributeRow = (index: number) =>
    setSelectedAttributes(selectedAttributes.filter((_, i) => i !== index));
  const updateAttribute = (
    index: number,
    field: "attrId" | "value",
    val: string
  ) => {
    const newAttrs = [...selectedAttributes];
    newAttrs[index][field] = val;
    if (field === "attrId") newAttrs[index].value = ""; // Төрөл солигдоход утгыг цэвэрлэх
    setSelectedAttributes(newAttrs);
  };

  return (
    <div className="mt-3 font-sans">
      <div className="flex flex-col gap-6">
        {/* 1. Барааны зураг оруулах хэсэг */}
        <div className="border border-[#e7e3e4] rounded-xl p-4 bg-white">
          <label className="flex items-center gap-2 text-sm font-medium mb-1">
            Барааны төрлийн зураг
          </label>
          <div className="bg-[#fcfcfc] border border-[#f5f4f4] border-dashed rounded-xl py-6 flex flex-col justify-center items-center mt-3">
            <div className="text-sm font-medium text-[#71717b] text-center px-6">
              Зөвхөн PNG, JPG, WEBP ба ихдээ 1 MB оруулах боломжтой
            </div>
            <button className="mt-4 inline-flex items-center text-sm justify-center gap-2 rounded-md font-medium bg-[#f5f4f4] h-10 px-4 py-2 hover:bg-gray-100 transition-colors">
              <Icon icon="ic:outline-photo" width="24" />
              Зураг оруулах
            </button>
          </div>
        </div>

        {/* 2. Үлдэгдэл болон Үнийн мэдээлэл */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
          {[
            { label: "Үлдэгдэл", unit: "ш", placeholder: "0" },
            { label: "Үндсэн үнэ", unit: "₮", placeholder: "10,000" },
            { label: "Хямдарсан үнэ", unit: "₮", placeholder: "5,000" },
            { label: "Хямдралын хувь", unit: "%", placeholder: "50" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">
                {item.label} <span className="text-blue-500">*</span>
              </label>
              <div className="relative flex h-10 w-full items-center rounded-md border border-[#e7e3e4] bg-white px-3 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500">
                <input
                  placeholder={item.placeholder}
                  className="flex-1 bg-transparent text-sm outline-none"
                />
                <span className="text-sm text-[#71717b] ml-1">{item.unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. Дэлгэрэнгүй мэдээлэл Toggle */}
        <div className="col-span-full">
          <div className="flex items-center space-x-3">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none ${
                isActive ? "bg-black" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isActive ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <label
              className="text-sm font-medium cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              Дэлгэрэнгүй мэдээлэл
            </label>
          </div>
        </div>

        {isActive && (
          <div className="p-5 rounded-xl border border-[#e7e3e4] bg-white shadow-sm space-y-6 animate-in fade-in duration-300">
            {/* Barcode болон SKU */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Barcode (Зурсан код)
                </label>
                <div className="relative flex h-10 items-center rounded-md border border-[#e7e3e4] bg-[#fcfcfc] px-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                  <Icon
                    icon="lucide:barcode"
                    className="text-gray-400 mr-2"
                    width="18"
                  />
                  <input
                    placeholder="Barcode бичих эсвэл уншуулах"
                    className="flex-1 bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-gray-700">
                  SKU (Дотоод код)
                </label>
                <div className="relative flex h-10 items-center rounded-md border border-[#e7e3e4] bg-[#fcfcfc] px-3 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                  <Icon
                    icon="lucide:hash"
                    className="text-gray-400 mr-2"
                    width="16"
                  />
                  <input
                    placeholder="Жишээ: BARA-001-RED-L"
                    className="flex-1 bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            <hr className="border-[#f5f4f4]" />

            {/* Attributes Section */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-semibold text-gray-800">
                  Шинж чанар (Attributes)
                </h3>
                <button
                  onClick={addAttributeRow}
                  className="text-xs flex items-center gap-1 text-blue-600 hover:text-blue-700 font-bold"
                >
                  <Icon icon="lucide:plus" /> НЭМЭХ
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {selectedAttributes.map((selected, index) => {
                  const currentAttr = AVAILABLE_ATTRIBUTES.find(
                    (a) => a.id === selected.attrId
                  );
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100"
                    >
                      <div className="flex-1">
                        <select
                          value={selected.attrId}
                          onChange={(e) =>
                            updateAttribute(index, "attrId", e.target.value)
                          }
                          className="w-full h-9 text-sm rounded-md border border-gray-300 bg-white px-2 outline-none focus:border-blue-500"
                        >
                          <option value="">Төрөл сонгох</option>
                          {AVAILABLE_ATTRIBUTES.map((attr) => (
                            <option key={attr.id} value={attr.id}>
                              {attr.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex-1">
                        <select
                          disabled={!selected.attrId}
                          value={selected.value}
                          onChange={(e) =>
                            updateAttribute(index, "value", e.target.value)
                          }
                          className="w-full h-9 text-sm rounded-md border border-gray-300 bg-white px-2 outline-none focus:border-blue-500 disabled:bg-gray-100"
                        >
                          <option value="">Утга сонгох</option>
                          {currentAttr?.values.map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>

                      <button
                        onClick={() => removeAttributeRow(index)}
                        className="text-gray-400 hover:text-red-500 p-1"
                      >
                        <Icon icon="lucide:trash-2" width="18" />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
