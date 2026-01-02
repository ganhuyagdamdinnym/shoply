import { Icon } from "@iconify/react";
import { useState } from "react";

const AVAILABLE_ATTRIBUTES = [
  { id: "1", name: "Өнгө", values: ["Хар", "Цагаан", "Улаан", "Цэнхэр"] },
  { id: "2", name: "Хэмжээ", values: ["S", "M", "L", "XL", "2XL"] },
];

export const DetailedInfo = () => {
  const [selectedAttributes, setSelectedAttributes] = useState<
    { attrId: string; value: string }[]
  >([]);

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
    if (field === "attrId") newAttrs[index].value = "";
    setSelectedAttributes(newAttrs);
  };

  return (
    <div className="mt-4 p-5 rounded-xl border border-[#e7e3e4] bg-[#fcfcfc] space-y-6 animate-in fade-in duration-300">
      {/* Barcode & SKU Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">Бар код</label>
          <div className="relative flex h-10 items-center rounded-md border border-[#e7e3e4] bg-white px-3 focus-within:ring-2 focus-within:ring-blue-100">
            <Icon
              icon="lucide:barcode"
              className="text-gray-400 mr-2"
              width="18"
            />
            <input
              placeholder="Barcode..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-gray-700">SKU</label>
          <div className="relative flex h-10 items-center rounded-md border border-[#e7e3e4] bg-white px-3 focus-within:ring-2 focus-within:ring-blue-100">
            <Icon
              icon="lucide:hash"
              className="text-gray-400 mr-2"
              width="16"
            />
            <input
              placeholder="SKU код..."
              className="flex-1 bg-transparent text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <hr className="border-[#e7e3e4]" />

      {/* Attributes Section */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-semibold text-gray-800">
            Шинж чанар (Attributes)
          </h3>
          <button
            onClick={addAttributeRow}
            className="text-xs flex items-center gap-1 text-blue-600 font-bold hover:underline"
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
                className="flex items-center gap-3 p-2 bg-white rounded-lg border border-[#e7e3e4]"
              >
                <select
                  value={selected.attrId}
                  onChange={(e) =>
                    updateAttribute(index, "attrId", e.target.value)
                  }
                  className="flex-1 h-9 text-sm rounded-md border-none bg-transparent px-2 outline-none"
                >
                  <option value="">Төрөл сонгох</option>
                  {AVAILABLE_ATTRIBUTES.map((attr) => (
                    <option key={attr.id} value={attr.id}>
                      {attr.name}
                    </option>
                  ))}
                </select>

                <select
                  disabled={!selected.attrId}
                  value={selected.value}
                  onChange={(e) =>
                    updateAttribute(index, "value", e.target.value)
                  }
                  className="flex-1 h-9 text-sm rounded-md border-none bg-transparent px-2 outline-none disabled:text-gray-300"
                >
                  <option value="">Утга сонгох</option>
                  {currentAttr?.values.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => removeAttributeRow(index)}
                  className="text-gray-300 hover:text-red-500 px-2"
                >
                  <Icon icon="lucide:x" width="18" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
