import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Branch = () => {
  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all">
              Салбарууд
            </h1>
            <p className="text-[#71717b] text-sm line-clamp-1 break-all">
              Дэлгүүрийн нийт ажиллаж буй салбаруудын жагсаалт
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Link to="create">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm justify-center
                   bg-linear-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-40"
              >
                <Icon icon="gridicons:add-outline" width={20} />
                <p>Салбар нэмэх</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-4">
          <div>
            <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6  rounded-lg border-dashed p-6 text-center text-balance md:p-12">
              <div className="flex max-w-sm flex-col items-center gap-2 text-center">
                <Icon icon="hugeicons:ice-cubes" width={32} />
                <h1 className="text-lg font-medium tracking-tight">
                  Салбар хоосон байна
                </h1>
                <p className="text-[#71717b] [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4">
                  Одоогоор ямар ч салбар нэмээгүй байна. Шинээр үүсгэж оруулна
                  уу.
                </p>
                <Link to="create">
                  <button
                    className="mt-2 flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm justify-center
                   bg-linear-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-40"
                  >
                    <Icon icon="gridicons:add-outline" width={20} />
                    <p>Салбар нэмэх</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
