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

  const indicators: valueType[] = [
    {
      id: "1",
      name: "Өнгө",
      values: ["Хар", "Цагаан", "Улаан"],
    },
    {
      id: "2",
      name: "Хэмжээ",
      values: ["S", "M", "L", "XL"],
    },
  ];

  useEffect(() => {
    // 2. Using .find() instead of .filter() to get the specific object
    const foundValue = indicators.find((item) => item.id === id);
    if (foundValue) {
      setValue(foundValue);
    }
  }, [id]); // Added id as dependency

  // Handle case where ID doesn't match any data
  if (!value) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#f5f4f4]">
        <p className="text-gray-500">Мэдээлэл олдсонгүй...</p>
      </div>
    );
  }

  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] min-h-screen md:max-w-8xl mx-auto w-full">
      {/* Header */}
      <div className="w-full flex flex-col gap-1 mb-6">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900">
            {value.name} удирдах
          </h1>
        </div>
        <p className="text-sm text-[#71717b]">
          "{value.name}" үзүүлэлтийн утгуудыг засах
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* Left Side: Table of Specific Values */}
        <div className="col-span-1 xl:col-span-8">
          <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white shadow-sm">
            <h2 className="font-semibold text-lg px-2 mb-4">
              Одоо байгаа утгууд
            </h2>
            <div className="overflow-hidden border border-[#f5f4f4] rounded-xl">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-[#e7e3e4]">
                    <th className="p-4 w-12 text-left text-gray-500 font-medium">
                      #
                    </th>
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
                      className="border-b border-[#e7e3e4] hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4 text-gray-500">{index + 1}</td>
                      <td className="px-2 py-4 font-bold text-gray-900">
                        {val}
                      </td>
                      <td className="px-2 py-4 pr-6">
                        <div className="flex items-center gap-3 justify-end text-gray-400">
                          <button className="hover:text-red-600 transition-colors">
                            <Icon icon="lucide:trash-2" className="w-5 h-5" />
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

        {/* Right Side: Add New Value Form */}
        <div className="col-span-1 xl:col-span-4">
          <div className="p-6 rounded-xl border border-[#e7e3e4] bg-white shadow-sm sticky top-6">
            <h2 className="font-semibold text-lg mb-4 text-gray-900">
              Шинэ утга нэмэх
            </h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Attribute
                </label>
                <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50">
                  {value.name}{" "}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Утгын нэр
                </label>
                <input
                  type="text"
                  placeholder="Жишээ нь: Улаан"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              <button className="text-white inline-flex items-center text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xl font-medium transition-colors bg-gradient-to-r from-blue-500 to-indigo-500 h-10 px-4 py-2 hover:opacity-90 active:scale-95">
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

export default Value;
