import { Icon } from "@iconify/react";

export const ProductAction = () => {
  return (
    <div className="animate-slide-up fixed bottom-16 md:bottom-2 left-0 right-0 w-full p-4 z-50 flex items-center justify-center">
      <div className="bg-muted shadow-lg rounded-2xl px-3 py-2 w-fit flex items-center justify-between xl:gap-2 gap-1">
        <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#1b1718]">
          <Icon icon="garden:x-stroke-12" width={20} color="[#1b1718]" />
          <span className="hidden xl:inline-flex">Болих</span>
        </button>
        <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#71717b]">
          <Icon icon="solar:letter-outline" width={22} color="[#71717b]" />
          <span className="hidden xl:inline-flex">Харсан</span>
        </button>
        <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#b91c1c]">
          <Icon icon="cil:x-circle" width={20} color="[#1b1718]" />
          <span className="hidden xl:inline-flex">Цуцлах</span>
        </button>
        <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#d97706]">
          <Icon icon="majesticons:clock-line" width={22} color="[#1b1718]" />
          <span className="hidden xl:inline-flex">Хүлээгдэж буй</span>
        </button>
        <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#16a34a]">
          <Icon icon="lets-icons:money-light" width={24} color="[#1b1718]" />
          <span className="hidden xl:inline-flex">Төлөгдсөн</span>
        </button>
        <button className="flex gap-1 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#3b82f6]">
          <Icon icon="gg:check-o" width={20} color="[#1b1718]" />
          <span className="hidden xl:inline-flex">Хүргэгдсэн</span>
        </button>
      </div>
    </div>
  );
};
