import { Icon } from "@iconify/react";

const CreateOrder = () => {
  return (
    <div className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">
            Шинээр захиалга үүсгэх
          </p>
          <p className="text-sm text-[#71717b]">
            Бүх захиалгын дэлгэрэнгүй мэдээлэл
          </p>
        </div>
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm
                       bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-44"
        >
          <Icon
            icon="material-symbols-light:border-all-outline-rounded"
            width="24"
          />
          <p>Захиалга үүсгэх</p>
        </button>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6"></div>
      </div>
    </div>
  );
};

export default CreateOrder;
