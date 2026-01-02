import { useState } from "react";
import { EditInfoModal } from "./editBackInfo";

export const BackgroundInfo = () => {
  const infoData = [
    {
      label: "Дэлгүүрийн нэр",
      value: "Shoply",
    },
    {
      label: "Холбоо барих дугаар",
      value: "80444040",
    },
    {
      label: "Имэйл хаяг",
      value: "80444040",
    },
    {
      label: "Үндсэн хаяг",
      value: "80444040",
    },
    {
      label: "Дэлгүүрийн нэр",
      value: "Shoply",
    },
  ];
  const [editingPlatform, setEditingPlatform] = useState<
    null | (typeof infoData)[0]
  >(null);
  return (
    <div className="p-4 pb-0 bg-white rounded-2xl border border-[#e7e3e4]">
      <h1 className="font-gilroy text-xl font-semibold">Ерөнхий мэдээлэл</h1>
      <p className="text-sm text-[#71717b] mt-1">Дэлгүүрийн ерөнхий мэдээлэл</p>

      <div className="mt-4 border-t border-[#f5f4f4]">
        <dl className="divide-y divide-[#f5f4f4]">
          {infoData.map((item, index) => (
            <div
              key={index}
              className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0"
            >
              <dt className="text-sm/6 font-medium flex items-center">
                {item.label}
              </dt>
              <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
                <span>{item.value}</span>
                <span>
                  <button
                    onClick={() => setEditingPlatform(item)}
                    className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md hover:bg-[#1b1718]/20 transition-colors"
                  >
                    Засах
                  </button>
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      {editingPlatform && (
        <EditInfoModal
          data={editingPlatform}
          onClose={() => setEditingPlatform(null)}
        />
      )}
    </div>
  );
};
