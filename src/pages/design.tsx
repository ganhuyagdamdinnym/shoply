import { Icon } from "@iconify/react";
const Design = () => {
  return (
    <div className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">Дизайн тохиргоо</p>
          <p className="text-sm text-[#71717b]">
            Дэлгүүрийн харагдах байдлыг удирдах боломжтой
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="p-4 flex flex-col bg-white border border-[#e7e3e4] rounded-xl">
            <div className="text-lg font-semibold font-gilroy flex items-center gap-2">
              Дэлгүүрийн лого
            </div>
            <p className="text-xs text-[#71717b] font-medium">
              Өөрийн дэлгүүрийн лого-г оруулж өгсөнөөр таны цахим дэлгүүрийн
              дээд хэсэгт харагдана.
            </p>
            <input type="file" className="hidden" accept="image/" id="logo" />
            <div className="mt-4">
              <div className="h-[150px] w-full bg-[#f5f4f4] border border-[#f5f4f4] rounded-xl flex items-center justify-center cursor-pointer">
                <Icon icon="ic:outline-photo" width="40" color="#3B3838" />
              </div>
            </div>
            <div className="flex items-center justify-end mt-4 gap-2">
              <button className="bg-[#f5f4f4] text-[#1b1718] inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2  ">
                <Icon icon="ic:outline-photo" width="24" color="#3B3838" /> Лого
                сонгох
              </button>
              <button className="text-white inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
                <Icon icon="uil:save" width="24" color="white" />
                Лого хадгалах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
