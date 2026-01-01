import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Indicator {
  id: string;
  name: string;
  values: string[];
  updatedAt: string;
}

export const Attribute = () => {
  const navigate = useNavigate();
  const [indicators, setIndicators] = useState<Indicator[]>([
    {
      id: "1",
      name: "Өнгө",
      values: ["Хар", "Цагаан", "Улаан"],
      updatedAt: "2025.12.12",
    },
    {
      id: "2",
      name: "Хэмжээ",
      values: ["S", "M", "L", "XL"],
      updatedAt: "2025.12.12",
    },
  ]);

  // States for handling the form
  const [inputValue, setInputValue] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  // Function to enter Edit Mode
  const handleEditClick = (item: Indicator) => {
    setEditingId(item.id);
    setInputValue(item.name);
  };

  // Function to Save (both New and Edited)
  const handleSave = () => {
    if (!inputValue.trim()) return;

    if (editingId) {
      // Update existing
      setIndicators((prev) =>
        prev.map((ind) =>
          ind.id === editingId ? { ...ind, name: inputValue } : ind
        )
      );
    } else {
      // Add new
      const newIndicator: Indicator = {
        id: Math.random().toString(),
        name: inputValue,
        values: [],
        updatedAt: new Date().toLocaleDateString(),
      };
      setIndicators([...indicators, newIndicator]);
    }

    // Reset Form
    setInputValue("");
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setInputValue("");
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 p-6">
      {/* Left Side: Table */}
      <div className="col-span-1 xl:col-span-8">
        <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white shadow-sm">
          <h2 className="font-semibold text-lg px-2 mb-4">Бүх үзүүлэлтүүд</h2>
          <div className="overflow-hidden border border-[#f5f4f4] rounded-xl">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-[#e7e3e4]">
                <tr>
                  <th className="p-4 w-12 text-left text-gray-500">#</th>
                  <th className="py-4 px-2 text-left font-semibold text-gray-900">
                    Нэр
                  </th>
                  <th className="py-4 px-2 text-left font-semibold text-gray-900">
                    Утгууд
                  </th>
                  <th className="py-4 px-2 text-right font-semibold text-gray-900 pr-6">
                    Үйлдэл
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {indicators.map((item, index) => (
                  <tr
                    key={item.id}
                    className="border-b border-[#e7e3e4] hover:bg-gray-50 transition-colors"
                  >
                    <td className="p-4 text-gray-500">{index + 1}</td>
                    <td className="px-2 py-4 font-bold text-gray-900">
                      {item.name}
                    </td>
                    <td className="px-2 py-4">
                      <div className="flex flex-wrap gap-1">
                        {item.values.map((val, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 px-2 py-0.5 rounded text-xs text-gray-600 border border-gray-200"
                          >
                            {val}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-2 py-4 pr-6">
                      <div className="flex items-center gap-3 justify-end text-gray-400">
                        {/* EDIT BUTTON */}
                        <button
                          onClick={() => handleEditClick(item)}
                          className={`transition-colors ${
                            editingId === item.id
                              ? "text-blue-600"
                              : "hover:text-blue-600"
                          }`}
                        >
                          <Icon icon="lucide:edit" className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => navigate(`/attribute/${item.id}`)}
                          className="hover:text-slate-600 transition-colors"
                        >
                          <Icon icon="lucide:settings" className="w-5 h-5" />
                        </button>
                      </div>
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
          className={`p-6 rounded-xl border transition-all duration-300 bg-white shadow-sm sticky top-6 ${
            editingId
              ? "border-blue-400 ring-2 ring-blue-50"
              : "border-[#e7e3e4]"
          }`}
        >
          <h2 className="font-semibold text-lg mb-4 text-gray-900">
            {editingId ? "Засварлах" : "Шинэ үзүүлэлт нэмэх"}
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Үзүүлэлтийн нэр
              </label>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Жишээ нь: Хэмжээ"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleSave}
                className="text-white inline-flex items-center text-sm justify-center gap-2 rounded-xl font-medium transition-colors bg-gradient-to-r from-blue-600 to-indigo-500 h-10 px-4 py-2 hover:opacity-90 shadow-md"
              >
                <Icon icon="uil:save" width="20" />
                {editingId ? "Өөрчлөлтийг хадгалах" : "Хадгалах"}
              </button>

              {editingId && (
                <button
                  onClick={cancelEdit}
                  className="text-gray-500 text-sm hover:underline"
                >
                  Болих (Цуцлах)
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
