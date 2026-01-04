import { Icon } from "@iconify/react";
import { useState } from "react";

// Backend-ээс ирэх боломжит атрибутууд
const AVAILABLE_ATTRIBUTES = [
  { id: "1", name: "Өнгө", values: ["Хар", "Цагаан", "Улаан", "Цэнхэр"] },
  { id: "2", name: "Хэмжээ", values: ["S", "M", "L", "XL", "2XL"] },
];

export function CreatingProductInfo() {
  const [isActive, setIsActive] = useState<boolean>(false);

  // Үндсэн мэдээллийн state
  const [basePrice, setBasePrice] = useState("");
  const [baseStock, setBaseStock] = useState("");

  // Хувилбаруудыг (Attributes) хадгалах state
  const [selectedAttributes, setSelectedAttributes] = useState<
    { attrId: string; value: string; price: string; stock: string }[]
  >([]);

  // Шинэ хувилбар нэмэх
  const addAttributeRow = () => {
    setSelectedAttributes([
      ...selectedAttributes,
      { attrId: "", value: "", price: "", stock: "" },
    ]);
  };

  // Хувилбар устгах
  const removeAttributeRow = (index: number) => {
    setSelectedAttributes(selectedAttributes.filter((_, i) => i !== index));
  };

  // Хувилбарын утга шинэчлэх
  const updateAttribute = (
    index: number,
    field: "attrId" | "value" | "price" | "stock",
    val: string
  ) => {
    const newAttrs = [...selectedAttributes];
    newAttrs[index][field] = val;

    // Хэрэв төрөл (Өнгө/Хэмжээ) солигдвол сонгосон утгыг цэвэрлэнэ
    if (field === "attrId") {
      newAttrs[index].value = "";
    }
    setSelectedAttributes(newAttrs);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans text-gray-900">
      <div className="flex flex-col gap-6">
        {/* 1. Зураг оруулах хэсэг */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
          <label className="flex items-center gap-2 text-sm font-semibold mb-3">
            Барааны төрлийн зураг
          </label>
          <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-xl py-8 flex flex-col justify-center items-center">
            <div className="text-sm text-gray-500 text-center px-6">
              PNG, JPG, WEBP (Ихдээ 1 MB)
            </div>
            <button className="mt-4 flex items-center gap-2 text-sm font-medium bg-white border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-50 transition-all shadow-sm">
              <Icon icon="ic:outline-photo" width="20" />
              Зураг оруулах
            </button>
          </div>
        </div>

        {/* 2. Үндсэн үнэ болон Үлдэгдэл */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">
              Үндсэн үнэ <span className="text-red-500">*</span>
            </label>
            <div className="relative flex h-10 items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500">
              <input
                type="number"
                value={basePrice}
                onChange={(e) => setBasePrice(e.target.value)}
                placeholder="10,000"
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <span className="text-sm text-gray-400 font-medium">₮</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold">
              Үндсэн үлдэгдэл <span className="text-red-500">*</span>
            </label>
            <div className="relative flex h-10 items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-500">
              <input
                type="number"
                value={baseStock}
                onChange={(e) => setBaseStock(e.target.value)}
                placeholder="0"
                className="flex-1 bg-transparent text-sm outline-none"
              />
              <span className="text-sm text-gray-400 font-medium">ш</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-400">
              Хямдарсан үнэ
            </label>
            <div className="relative flex h-10 items-center rounded-lg border border-gray-100 bg-gray-50 px-3">
              <input
                disabled
                placeholder="5,000"
                className="flex-1 bg-transparent text-sm outline-none cursor-not-allowed"
              />
              <span className="text-sm text-gray-300 font-medium">₮</span>
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-400">
              Хямдрал %
            </label>
            <div className="relative flex h-10 items-center rounded-lg border border-gray-100 bg-gray-50 px-3">
              <input
                disabled
                placeholder="50"
                className="flex-1 bg-transparent text-sm outline-none cursor-not-allowed"
              />
              <span className="text-sm text-gray-300 font-medium">%</span>
            </div>
          </div>
        </div>

        {/* 3. Дэлгэрэнгүй хэсгийн Toggle */}
        <div className="flex items-center space-x-3 py-2">
          <button
            type="button"
            onClick={() => setIsActive(!isActive)}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
              isActive ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isActive ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <label
            className="text-sm font-bold cursor-pointer select-none"
            onClick={() => setIsActive(!isActive)}
          >
            Дэлгэрэнгүй мэдээлэл
          </label>
        </div>

        {/* 4. Дэлгэрэнгүй мэдээлэл (Attributes & Variants) */}
        {isActive && (
          <div className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  Бар код
                </label>
                <div className="flex h-10 items-center rounded-lg border border-gray-200 bg-gray-50 px-3">
                  <Icon
                    icon="lucide:barcode"
                    className="text-gray-400 mr-2"
                    width="18"
                  />
                  <input
                    placeholder="Barcode"
                    className="flex-1 bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  SKU код
                </label>
                <div className="flex h-10 items-center rounded-lg border border-gray-200 bg-gray-50 px-3">
                  <Icon
                    icon="lucide:hash"
                    className="text-gray-400 mr-2"
                    width="16"
                  />
                  <input
                    placeholder="SKU-001"
                    className="flex-1 bg-transparent text-sm outline-none"
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Хувилбарын жагсаалт */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm font-bold text-gray-800">
                  Хувилбарын тохиргоо
                </h3>
                <button
                  onClick={addAttributeRow}
                  className="text-xs flex items-center gap-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg font-bold transition-all"
                >
                  <Icon icon="lucide:plus" width="14" /> НЭМЭХ
                </button>
              </div>

              {selectedAttributes.length === 0 ? (
                <div className="text-center py-8 border-2 border-dotted border-gray-100 rounded-xl text-gray-400 text-sm">
                  Одоогоор тусгай үнэтэй хувилбар нэмээгүй байна.
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  {selectedAttributes.map((selected, index) => {
                    const currentAttr = AVAILABLE_ATTRIBUTES.find(
                      (a) => a.id === selected.attrId
                    );
                    return (
                      <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-12 gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 items-end"
                      >
                        {/* Атрибут сонгох */}
                        <div className="md:col-span-3 flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            Төрөл
                          </span>
                          <select
                            value={selected.attrId}
                            onChange={(e) =>
                              updateAttribute(index, "attrId", e.target.value)
                            }
                            className="w-full h-9 text-sm rounded-lg border border-gray-300 bg-white px-2 outline-none focus:ring-2 focus:ring-blue-100"
                          >
                            <option value="">Сонгох</option>
                            {AVAILABLE_ATTRIBUTES.map((attr) => (
                              <option key={attr.id} value={attr.id}>
                                {attr.name}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Утга сонгох */}
                        <div className="md:col-span-3 flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            Сонголт
                          </span>
                          <select
                            disabled={!selected.attrId}
                            value={selected.value}
                            onChange={(e) =>
                              updateAttribute(index, "value", e.target.value)
                            }
                            className="w-full h-9 text-sm rounded-lg border border-gray-300 bg-white px-2 outline-none disabled:bg-gray-100 focus:ring-2 focus:ring-blue-100"
                          >
                            <option value="">Сонгох</option>
                            {currentAttr?.values.map((v) => (
                              <option key={v} value={v}>
                                {v}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* ТУСГАЙ ҮНЭ */}
                        <div className="md:col-span-3 flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-blue-500 uppercase">
                            Тусгай үнэ (₮)
                          </span>
                          <input
                            type="number"
                            placeholder={basePrice || "Үнэ"}
                            value={selected.price}
                            onChange={(e) =>
                              updateAttribute(index, "price", e.target.value)
                            }
                            className="w-full h-9 text-sm rounded-lg border border-blue-200 bg-white px-3 outline-none focus:ring-2 focus:ring-blue-100"
                          />
                        </div>

                        {/* ТУСГАЙ ҮЛДЭГДЭЛ */}
                        <div className="md:col-span-2 flex flex-col gap-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase">
                            Үлдэгдэл
                          </span>
                          <input
                            type="number"
                            placeholder="0"
                            value={selected.stock}
                            onChange={(e) =>
                              updateAttribute(index, "stock", e.target.value)
                            }
                            className="w-full h-9 text-sm rounded-lg border border-gray-300 bg-white px-3 outline-none focus:ring-2 focus:ring-blue-100"
                          />
                        </div>

                        {/* Устгах */}
                        <div className="md:col-span-1 flex justify-center pb-1">
                          <button
                            onClick={() => removeAttributeRow(index)}
                            className="text-gray-400 hover:text-red-500 p-2 rounded-lg hover:bg-red-50 transition-all"
                          >
                            <Icon icon="lucide:trash-2" width="18" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
