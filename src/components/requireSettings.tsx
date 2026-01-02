import { Icon } from "@iconify/react";

export const RequireSettings = () => {
  return (
    <div className="bg-white border border-[#e7e3e4] rounded-xl p-3 flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-3 gap-x-1">
        <div>
          <h1 className="font-gilroy font-semibold text-lg">
            Шаардлагатай тохиргоонууд
          </h1>
          <p className="text-xs font-medium text-[#71717b] -mt-0.5">
            Дараах тохиргоог хийснээр таны дэлгүүр бүрэн ажиллах болно
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="bg-[#d97706]/10 border border-[#d97706]/20 cursor-pointer rounded-lg pl-3 pr-4 py-3 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <Icon icon="si:warning-line" width="24" color="#d97706" />
            <div className="flex flex-col gap-0.5">
              <div className="text-sm font-semibold">
                Салбарын мэдээлэл хоосон
              </div>
              <p className="text-xs font-medium text-[#71717b]">
                Салбараас авахаар захиалах боломжгүй байна
              </p>
            </div>
          </div>
          <Icon
            icon="material-symbols:keyboard-arrow-right"
            width="24"
            color="#d97706"
          />
        </div>
      </div>
    </div>
  );
};
