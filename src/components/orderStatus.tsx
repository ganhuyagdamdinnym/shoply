import { Icon } from "@iconify/react";

export const OrderStatus = () => {
  return (
    <div className="p-3 sm:p-4 bg-white border border-[#e7e3e4] rounded-xl">
      <div className="mb-4">
        <h1 className="font-gilroy font-semibold text-lg">Захиалгын төлөв</h1>
        <p className="text-xs font-medium text-[#71717b] -mt-0.5">
          Нийт 1 захиалга
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        <div className="bg-[#d97706]/10 border border-[#0000] hover:border-gray-400 rounded-lg p-3 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="famicons:time-outline" color="#d97706" />
            <label className="text-xs font-semibold text-[#71717b]">
              Хүлээгдэж буй
            </label>
          </div>
          <div className="flex items-end justify-between">
            <h1 className="font-gilroy text-2xl font-bold">0</h1>
            <p className="text-xs text-[#71717b]">0%</p>
          </div>
        </div>
        <div className="bg-[#d97706]/10 border border-[#0000] hover:border-gray-400 rounded-lg p-3 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="famicons:time-outline" color="#d97706" />
            <label className="text-xs font-semibold text-[#71717b]">
              Хүлээгдэж буй
            </label>
          </div>
          <div className="flex items-end justify-between">
            <h1 className="font-gilroy text-2xl font-bold">0</h1>
            <p className="text-xs text-[#71717b]">0%</p>
          </div>
        </div>
        <div className="bg-[#d97706]/10 border border-[#0000] hover:border-gray-400 rounded-lg p-3 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="famicons:time-outline" color="#d97706" />
            <label className="text-xs font-semibold text-[#71717b]">
              Хүлээгдэж буй
            </label>
          </div>
          <div className="flex items-end justify-between">
            <h1 className="font-gilroy text-2xl font-bold">0</h1>
            <p className="text-xs text-[#71717b]">0%</p>
          </div>
        </div>
        <div className="bg-[#d97706]/10 border border-[#0000] hover:border-gray-400 rounded-lg p-3 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="famicons:time-outline" color="#d97706" />
            <label className="text-xs font-semibold text-[#71717b]">
              Хүлээгдэж буй
            </label>
          </div>
          <div className="flex items-end justify-between">
            <h1 className="font-gilroy text-2xl font-bold">0</h1>
            <p className="text-xs text-[#71717b]">0%</p>
          </div>
        </div>
        <div className="bg-[#d97706]/10 border border-[#0000] hover:border-gray-400 rounded-lg p-3 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="famicons:time-outline" color="#d97706" />
            <label className="text-xs font-semibold text-[#71717b]">
              Хүлээгдэж буй
            </label>
          </div>
          <div className="flex items-end justify-between">
            <h1 className="font-gilroy text-2xl font-bold">0</h1>
            <p className="text-xs text-[#71717b]">0%</p>
          </div>
        </div>
        <div className="bg-[#d97706]/10 border border-[#0000] hover:border-gray-400 rounded-lg p-3 transition-all">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="famicons:time-outline" color="#d97706" />
            <label className="text-xs font-semibold text-[#71717b]">
              Хүлээгдэж буй
            </label>
          </div>
          <div className="flex items-end justify-between">
            <h1 className="font-gilroy text-2xl font-bold">0</h1>
            <p className="text-xs text-[#71717b]">0%</p>
          </div>
        </div>
      </div>
    </div>
  );
};
