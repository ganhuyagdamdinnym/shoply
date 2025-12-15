export const RequireSettings = () => {
  return (
    <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-3 flex flex-col gap-3">
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
      <div className="flex flex-col gap-2">
        <div className="bg-[#d97706]/10 border border-[#d97706]/20  rounded-lg pl-3 pr-4 py-3 flex justify-between items-center gap-2">
          <div className="flex items-center gap-2.5"></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
