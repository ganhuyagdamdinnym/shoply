import React, { useState } from "react";
import { Clock, CalendarX } from "lucide-react";

// Хуваарийн өгөгдлийн бүтцийг тодорхойлно
interface ScheduleDay {
  day: string;
  open: string;
  close: string;
  active: boolean;
}

const AddBranch: React.FC = () => {
  // TypeScript-д state-ийн төрлийг зааж өгнө
  const [schedule, setSchedule] = useState<ScheduleDay[]>([
    { day: "Даваа", open: "09:20 AM", close: "06:00 PM", active: true },
    { day: "Мягмар", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Лхагва", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Пүрэв", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Баасан", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Бямба", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Ням", open: "09:00 AM", close: "06:00 PM", active: true },
  ]);

  // Цаг өөрчлөх функц
  const handleTimeChange = (
    index: number,
    field: "open" | "close",
    value: string
  ) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  // Өдрийг идэвхжүүлэх/идэвхгүй болгох функц
  const toggleActive = (index: number) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].active = !updatedSchedule[index].active;
    setSchedule(updatedSchedule);
  };

  return (
    <main className="px-4 pt-4 md:mt-0 md:max-w-8xl mx-auto w-full transition-all duration-300">
      <div className="mb-4 max-w-md w-full mx-auto p-6 mt-2 sm:mt-0 rounded-xl border bg-white border-[#e7e3e4]">
        <h1 className="text-center font-gilroy text-xl font-semibold mb-8">
          Шинээр салбар нэмэх
        </h1>

        <div className="w-full flex flex-col gap-4">
          {/* Салбарын нэр */}
          <div className="grid w-full items-center gap-1.5">
            <label className="text-sm font-medium">
              Салбарын нэр <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Салбарын нэрийг оруулна уу"
              className="flex h-10 w-full rounded-md border border-[#e7e3e4] px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Салбарын байршил */}
          <div className="grid w-full gap-2">
            <label className="text-sm font-medium">
              Салбарын байршил <span className="text-blue-500">*</span>
            </label>
            <textarea
              placeholder="Жишээ нь: ХУД, 15-р хороо, 7-р байр гэх мэт"
              className="bg-[#f5f4f4] border border-[#e7e3e4] min-h-20 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Ажиллах цагийн хуваарийн хэсэг */}
          <div className="flex flex-col gap-4 mt-2">
            <label className="text-sm font-medium">
              Ажиллах цагийн хуваарь
            </label>

            <div className="space-y-3">
              {schedule.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex items-center gap-3 ${
                    !item.active ? "opacity-40 grayscale" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-gray-500 w-16">
                    {item.day}
                  </span>

                  <div className="flex items-center gap-2 flex-1">
                    {/* Нээх цаг */}
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={item.open}
                        onChange={(e) =>
                          handleTimeChange(index, "open", e.target.value)
                        }
                        className="w-full h-10 border border-[#e7e3e4] rounded-xl px-3 pr-8 text-[13px] focus:outline-none"
                        disabled={!item.active}
                      />
                      <Clock className="absolute right-2.5 top-3 w-4 h-4 text-gray-400" />
                    </div>

                    <span className="text-gray-400">-</span>

                    {/* Хаах цаг */}
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={item.close}
                        onChange={(e) =>
                          handleTimeChange(index, "close", e.target.value)
                        }
                        className="w-full h-10 border border-[#e7e3e4] rounded-xl px-3 pr-8 text-[13px] focus:outline-none"
                        disabled={!item.active}
                      />
                      <Clock className="absolute right-2.5 top-3 w-4 h-4 text-gray-400" />
                    </div>

                    {/* Устгах/Идэвхгүй болгох товч */}
                    <button
                      type="button"
                      onClick={() => toggleActive(index)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <CalendarX
                        className={`w-5 h-5 ${
                          item.active ? "text-green-600" : "text-gray-400"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <label className="text-sm font-medium">Салбарын үндсэн зураг</label>
            <div className="aspect-[16/9] w-full bg-[#f5f4f4] border border-[#f5f4f4] rounded-xl flex mt-2 items-center justify-center cursor-pointer"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBranch;
