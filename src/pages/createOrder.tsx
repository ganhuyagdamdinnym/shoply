import { Icon } from "@iconify/react";

const CreateOrder = () => {
  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4 bg-[#f5f4f4]">
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
      <div>
        <div className="w-full items-center justify-between ">
          <div className="relative w-[320px] h-[40px]">
            <div className="text-[#71717b] absolute left-[1px] top-[1px] p-2.5">
              <Icon icon="material-symbols-light:search-rounded" width="20" />
            </div>
            <input
              type="text"
              placeholder="Захиа. #, нэр, имэйл, утасаар хайх..."
              className="flex h-10 pl-9 w-full rounded-md py-2 sm:text-sm border border-[#e7e3e4]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
