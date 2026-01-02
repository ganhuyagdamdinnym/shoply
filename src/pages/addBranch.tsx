import React, { useState, useRef } from "react";
import { CalendarX, X, ChevronDown } from "lucide-react";
import { Icon } from "@iconify/react";

interface ScheduleDay {
  day: string;
  open: string;
  close: string;
  active: boolean;
}

// 24 цагийн жагсаалт үүсгэх функц (00:00 - 23:30)
const TIME_OPTIONS = Array.from({ length: 48 }).map((_, i) => {
  const hour = Math.floor(i / 2);
  const min = i % 2 === 0 ? "00" : "30";
  const ampm = hour >= 12 ? "PM" : "AM";
  const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
  return `${displayHour.toString().padStart(2, "0")}:${min} ${ampm}`;
});

const AddBranch: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleDay[]>([
    { day: "Даваа", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Мягмар", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Лхагва", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Пүрэв", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Баасан", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Бямба", open: "10:00 AM", close: "04:00 PM", active: true },
    { day: "Ням", open: "09:00 AM", close: "06:00 PM", active: false },
  ]);

  const [isActiveBranch, setIsActiveBranch] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleTimeChange = (
    index: number,
    field: "open" | "close",
    value: string
  ) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  const toggleActive = (index: number) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].active = !updatedSchedule[index].active;
    setSchedule(updatedSchedule);
  };

  return (
    <main className="px-4 pt-4 pb-10 md:mt-0 md:max-w-8xl mx-auto w-full font-sans">
      <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-3xl border border-[#e7e3e4] shadow-sm">
        <h1 className="text-center font-bold text-2xl mb-8">
          Шинээр салбар нэмэх
        </h1>

        <div className="w-full flex flex-col gap-6">
          {/* Салбарын нэр */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Салбарын нэр *
            </label>
            <input
              type="text"
              placeholder="Жишээ нь: Төв салбар"
              className="h-11 w-full rounded-xl border border-[#e7e3e4] px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Байршил */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Байршил *
            </label>
            <textarea
              placeholder="ХУД, 15-р хороо, Махатма Гандийн гудамж..."
              className="bg-[#fcfcfc] border border-[#e7e3e4] min-h-24 w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all"
            />
          </div>

          {/* Цагийн хуваарь */}
          <div className="flex flex-col gap-4">
            <label className="text-sm font-semibold text-gray-700">
              Ажиллах цагийн хуваарь
            </label>
            <div className="bg-gray-50/50 p-4 rounded-2xl border border-[#f0eff0] space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center gap-3 ${
                    !item.active ? "opacity-40" : ""
                  }`}
                >
                  <span className="text-xs font-bold text-gray-500 w-14 uppercase tracking-tighter">
                    {item.day}
                  </span>

                  <div className="flex items-center gap-2 flex-1">
                    {/* Нээх цаг */}
                    <div className="relative flex-1">
                      <select
                        value={item.open}
                        onChange={(e) =>
                          handleTimeChange(index, "open", e.target.value)
                        }
                        disabled={!item.active}
                        className="w-full h-9 pl-3 pr-8 bg-white border border-[#e7e3e4] rounded-lg text-[12px] appearance-none focus:outline-none focus:border-blue-400"
                      >
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <span className="text-gray-300">-</span>

                    {/* Хаах цаг */}
                    <div className="relative flex-1">
                      <select
                        value={item.close}
                        onChange={(e) =>
                          handleTimeChange(index, "close", e.target.value)
                        }
                        disabled={!item.active}
                        className="w-full h-9 pl-3 pr-8 bg-white border border-[#e7e3e4] rounded-lg text-[12px] appearance-none focus:outline-none focus:border-blue-400"
                      >
                        {TIME_OPTIONS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleActive(index)}
                      className={`p-2 rounded-lg transition-colors ${
                        item.active
                          ? "text-red-400 hover:bg-red-50"
                          : "text-gray-400"
                      }`}
                    >
                      <CalendarX className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Зураг оруулах */}
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-gray-700">
              Салбарын зураг
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative aspect-video w-full bg-gray-50 border-2 border-dashed border-[#e7e3e4] rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-all overflow-hidden"
            >
              {image ? (
                <>
                  <img
                    src={image}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setImage(null);
                    }}
                    className="absolute top-3 right-3 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="p-3 bg-white rounded-full shadow-sm">
                    <Icon
                      icon="lucide:image-plus"
                      width="24"
                      className="text-gray-400"
                    />
                  </div>
                  <span className="text-xs text-gray-400">
                    Зураг хуулах (JPG, PNG)
                  </span>
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => setImage(reader.result as string);
                  reader.readAsDataURL(file);
                }
              }}
            />
          </div>

          {/* Toggle */}
          <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl border border-[#e7e3e4]">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-gray-800">
                Идэвхтэй салбар
              </span>
              <span className="text-[11px] text-gray-500">
                Хэрэглэгч энэ салбарыг сонгож болох эсэх
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsActiveBranch(!isActiveBranch)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-all ${
                isActiveBranch ? "bg-black" : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isActiveBranch ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <button className="w-full py-3.5 bg-black text-white rounded-2xl font-bold text-sm hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-gray-200">
            <Icon icon="lucide:save" width="20" />
            Салбарыг хадгалах
          </button>
        </div>
      </div>
    </main>
  );
};

export default AddBranch;
