import { useState } from "react";

const Indicator = () => {
  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">
            Үзүүлэлтүүд удирдах
          </p>
          <p className="text-sm text-[#71717b]">
            Бүтээгдэхүүнүүдийн үзүүлэлтүүд засварлах
          </p>
        </div>
      </div>
    </div>
  );
};

export default Indicator;
