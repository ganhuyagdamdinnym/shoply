import { Icon } from "@iconify/react";

export const LastOrders = () => {
  return (
    <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-3 flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-y-3 gap-x-1">
        <div>
          <h1 className="font-gilroy font-semibold text-lg">
            Сүүлийн захиалгууд
          </h1>
          <h1 className="text-xs font-medium text-[#71717b] -mt-0.5">
            Хамгийн сүүлийн 6-н захиалга
          </h1>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center gap-2 p-4">
          <Icon
            icon="carbon:ibm-data-product-exchange"
            width="40"
            className="opacity-50"
          />
          <h1 className="opacity-50 text-sm font-medium text-center">
            Хүлээгдэж буй захиалга байхгүй байна
          </h1>
        </div>
        <div className="inline-flex items-center  text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium  transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-200  hover:bg-secondary/80 h-10 px-4 py-2 w-full! mt-4">
          <Icon icon="fluent-mdl2:product" width="24" />
          Бүх захиалгууд
        </div>
      </div>
    </div>
  );
};
