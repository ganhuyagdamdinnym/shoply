import React, { useState, useRef } from "react";
import { Clock, CalendarX, X } from "lucide-react";
import { Icon } from "@iconify/react";

interface ScheduleDay {
  day: string;
  open: string;
  close: string;
  active: boolean;
}

const AddBranch: React.FC = () => {
  const [schedule, setSchedule] = useState<ScheduleDay[]>([
    { day: "Даваа", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Мягмар", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Лхагва", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Пүрэв", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Баасан", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Бямба", open: "09:00 AM", close: "06:00 PM", active: true },
    { day: "Ням", open: "09:00 AM", close: "06:00 PM", active: false },
  ]);

  const [isActiveBranch, setIsActiveBranch] = useState(true);
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Зураг сонгох функц
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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

          {/* Байршил */}
          <div className="grid w-full gap-2">
            <label className="text-sm font-medium">
              Салбарын байршил <span className="text-blue-500">*</span>
            </label>
            <textarea
              placeholder="Жишээ нь: ХУД, 15-р хороо, 7-р байр гэх мэт"
              className="bg-[#f5f4f4] border border-[#e7e3e4] min-h-20 w-full rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Цагийн хуваарь */}
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

          {/* Зураг оруулах хэсэг */}
          <div className="mt-2">
            <label className="text-sm font-medium">Салбарын үндсэн зураг</label>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleImageChange}
            />
            <div
              onClick={() => fileInputRef.current?.click()}
              className="relative aspect-video w-full bg-[#f5f4f4] border-2 border-dashed border-[#e7e3e4] rounded-xl flex mt-2 items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors overflow-hidden"
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
                    className="absolute top-2 right-2 p-1 bg-white/80 rounded-full hover:bg-white shadow-sm"
                  >
                    <X className="w-4 h-4 text-gray-600" />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                  <Icon icon="ic:outline-photo" width="40" color="#3B3838" />
                  <span className="text-xs text-gray-400 mt-1">
                    Зураг сонгох
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Идэвхтэй эсэх toggle */}
          <div className="flex justify-between items-center gap-4 bg-white border border-[#e7e3e4] px-4 py-3 rounded-lg">
            <div className="flex flex-col pr-4">
              <h4 className="font-gilroy font-medium leading-4.5">
                Идэвхтэй салбар эсэх
              </h4>
              <p className="text-xs text-[#71717b] font-medium leading-4 mt-0.5">
                Захиалга хийгдэх үед хэрэглэгч сонгон очиж авах боломжтой эсэх.
              </p>
            </div>

            {/* Toggle Switch */}
            <button
              type="button"
              onClick={() => setIsActiveBranch(!isActiveBranch)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${
                isActiveBranch ? "bg-black" : "bg-gray-200"
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isActiveBranch ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          <div className="flex justify-end">
            <button className="text-white inline-flex items-center text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-xl font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-linear-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
              <Icon icon="uil:save" width="24" color="white" />
              Xадгалах
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddBranch;
