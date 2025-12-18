import { Icon } from "@iconify/react";

export const CreatingProductInfo = () => {
  return (
    <div className="mt-3">
      <div className="flex flex-col gap-8">
        <div className="border border-[#e7e3e4] rounded-xl p-4 bg-[#ffffff]">
          <div className="flex flex-col sm:flex-row justify-between gap-1 sm:items-center">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Барааны төрлийн зураг
            </label>
          </div>
          <div className="bg-[#fcfcfc] border border-[#f5f4f4] border-dashed rounded-xl py-6 pb-6 mt-3 flex flex-col justify-center items-center">
            <div className="text-sm font-medium text-[#71717b] text-center px-6">
              Зөвхөн PNG, JPG, WEBP ба ихдээ 1 MB оруулах боломжтой
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
              <button className="inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f5f4f4] text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2  ">
                <Icon icon="ic:outline-photo" width="24" />
                Зураг оруулах
              </button>
            </div>
            <div className="text-sm text-[#71717b] mt-3 mb-1">эсвэл</div>
            <div className="inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-[#f5f4f4] text-[#1b1718] h-10 px-4 py-2  ">
              Зураг холбоосоор оруулах
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-4 mt-6">
          <div className="grid w-full items-center gap-1.5 !max-w-none col-span-full md:col-span-6">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Үлдэгдэл
              <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                *
              </span>
            </label>
            <div
              className="relative flex h-10 w-full items-center rounded-md border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200
             disabled:cursor-not-allowed disabled:opacity-50"
            >
              <input
                placeholder="0"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />

              <div className="ml-2 cursor-text select-none text-sm text-[#71717b]">
                ш
              </div>
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5 !max-w-none col-span-full md:col-span-6">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Үндсэн үнэ
              <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                *
              </span>
            </label>
            <div
              className="relative flex h-10 w-full items-center rounded-md border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200
             disabled:cursor-not-allowed disabled:opacity-50"
            >
              <input
                placeholder="10,000 ₮"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5 !max-w-none col-span-full md:col-span-6">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Хямдарсан үнэ
              <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                *
              </span>
            </label>
            <div
              className="relative flex h-10 w-full items-center rounded-md border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200
             disabled:cursor-not-allowed disabled:opacity-50"
            >
              <input
                placeholder="5,000 ₮"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
          <div className="grid w-full items-center gap-1.5 !max-w-none col-span-full md:col-span-6">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Хямдралын хувь
              <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                *
              </span>
            </label>
            <div
              className="relative flex h-10 w-full items-center rounded-md border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-200
             disabled:cursor-not-allowed disabled:opacity-50"
            >
              <input
                placeholder="50%"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};
