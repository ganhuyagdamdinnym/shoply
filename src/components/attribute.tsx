import { Icon } from "@iconify/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Attribute = () => {
  const navigate = useNavigate();
  const [indicators, setIndicators] = useState([
    {
      id: "1",
      name: "Өнгө", // Color
      values: ["Хар", "Цагаан", "Улаан"],
      updatedAt: "2025.12.12",
    },
    {
      id: "2",
      name: "Хэмжээ", // Size
      values: ["S", "M", "L", "XL"],
      updatedAt: "2025.12.12",
    },
  ]);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
      {/* Left Side: Table of Indicators */}
      <div className="col-span-1 xl:col-span-8">
        <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white shadow-sm">
          <h2 className="font-semibold text-lg px-2 mb-4">Бүх үзүүлэлтүүд</h2>
          <div className="overflow-hidden border border-[#f5f4f4] rounded-xl">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-gray-50 border-b border-[#e7e3e4]">
                  <th className="p-4 w-12 text-left text-gray-500 font-medium">
                    #
                  </th>
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
                    className="border-b border-[#e7e3e4] hover:bg-gray-50 transition-colors group"
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
                        <button className="hover:text-blue-600 transition-colors">
                          <Icon icon="lucide:edit" className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => navigate(`/attribute/${item.id}`)}
                          className="hover:text-red-600 transition-colors"
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

      {/* Right Side: Add New Indicator Form */}
      <div className="col-span-1 xl:col-span-4">
        <div className="p-6 rounded-xl border border-[#e7e3e4] bg-white shadow-sm sticky top-6">
          <h2 className="font-semibold text-lg mb-4 text-gray-900">
            Шинэ үзүүлэлт нэмэх
          </h2>
          <div className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Үзүүлэлтийн нэр
              </label>
              <input
                type="text"
                placeholder="Жишээ нь: Хэмжээ"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>

            <button className="text-white inline-flex items-center text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-linear-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
              <Icon icon="uil:save" width="24" color="white" />
              Xадгалах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
