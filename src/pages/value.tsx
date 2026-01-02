import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type valueType = {
  id: string;
  name: string;
  values: string[];
};

const Value = () => {
  const { id } = useParams();

  const [value, setValue] = useState<valueType | null>(null);
  const [inputValue, setInputValue] = useState<string>("");

  // Аль индекс дээр засаж байгааг хадгалах state
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Өгөгдөл (Жишээ)
  const [indicators, setIndicators] = useState<valueType[]>([
    { id: "1", name: "Өнгө", values: ["Хар", "Цагаан", "Улаан"] },
    { id: "2", name: "Хэмжээ", values: ["S", "M", "L", "XL"] },
  ]);

  useEffect(() => {
    const foundValue = indicators.find((item) => item.id === id);
    if (foundValue) {
      setValue(foundValue);
    }
  }, [id, indicators]);

  // Засах товч дарахад утгыг input-рүү шилжүүлэх
  const handleEditClick = (index: number, currentVal: string) => {
    setEditingIndex(index);
    setInputValue(currentVal);
  };

  // Хадгалах (Шинээр нэмэх болон Засах)
  const handleSave = () => {
    if (!inputValue.trim() || !value) return;

    let updatedValues = [...value.values];

    if (editingIndex !== null) {
      // Засах үйлдэл
      updatedValues[editingIndex] = inputValue;
    } else {
      // Шинээр нэмэх үйлдэл
      updatedValues.push(inputValue);
    }

    // State шинэчлэх
    const updatedIndicator = { ...value, values: updatedValues };
    setValue(updatedIndicator);

    // Үндсэн жагсаалтаа шинэчлэх (байнгын хадгалалт mock)
    setIndicators((prev) =>
      prev.map((item) => (item.id === id ? updatedIndicator : item))
    );

    // Form-г цэвэрлэх
    setInputValue("");
    setEditingIndex(null);
  };

  if (!value) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f5f4f4]">
        <p className="text-gray-500">Мэдээлэл олдсонгүй...</p>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] min-h-screen md:max-w-8xl mx-auto w-full font-sans">
      {/* Header */}
      <div className="w-full flex flex-col gap-1 mb-6">
        <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900">
          {value.name} удирдах
        </h1>
        <p className="text-sm text-[#71717b]">
          "{value.name}" үзүүлэлтийн утгуудыг засах болон нэмэх
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Side: Table */}
        <div className="col-span-1 xl:col-span-8">
          <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white shadow-sm">
            <h2 className="font-semibold text-lg px-2 mb-4">
              Одоо байгаа утгууд
            </h2>
            <div className="overflow-hidden border border-[#f5f4f4] rounded-xl">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#e7e3e4]">
                    <th className="p-4 w-12 text-left text-gray-500">#</th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      Утгын нэр
                    </th>
                    <th className="py-4 px-2 text-right font-semibold text-gray-900 pr-6">
                      Үйлдэл
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {value.values.map((val, index) => (
                    <tr
                      key={index}
                      className={`border-b border-[#e7e3e4] hover:bg-gray-50 transition-colors ${
                        editingIndex === index ? "bg-blue-50/50" : ""
                      }`}
                    >
                      <td className="p-4 text-gray-500">{index + 1}</td>
                      <td className="px-2 py-4 font-bold text-gray-900">
                        {val}
                      </td>
                      <td className="px-2 py-4 pr-6 text-right">
                        <button
                          onClick={() => handleEditClick(index, val)}
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <Icon icon="lucide:edit" className="w-5 h-5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="col-span-1 xl:col-span-4">
          <div
            className={`p-6 rounded-xl border transition-all bg-white shadow-sm sticky top-6 ${
              editingIndex !== null
                ? "border-blue-500 ring-4 ring-blue-50"
                : "border-[#e7e3e4]"
            }`}
          >
            <h2 className="font-semibold text-lg mb-4 text-gray-900">
              {editingIndex !== null ? "Утга засах" : "Шинэ утга нэмэх"}
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Төрөл
                </label>
                <div className="w-full px-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500">
                  {value.name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Утгын нэр
                </label>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Жишээ нь: Улаан"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleSave}
                  className="w-full text-white inline-flex items-center text-sm justify-center gap-2 rounded-xl font-medium transition-colors bg-gradient-to-r from-blue-600 to-indigo-500 h-10 px-4 py-2 hover:opacity-90 shadow-md"
                >
                  <Icon icon="uil:save" width="20" />
                  {editingIndex !== null ? "Өөрчлөлтийг хадгалах" : "Хадгалах"}
                </button>

                {editingIndex !== null && (
                  <button
                    onClick={() => {
                      setEditingIndex(null);
                      setInputValue("");
                    }}
                    className="text-sm text-gray-500 hover:text-red-500 underline"
                  >
                    Болих
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
