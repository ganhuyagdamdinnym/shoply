import { Icon } from "@iconify/react";
import { useState, useRef } from "react";
const categorList = [{}];
const Category = () => {
  const [addCategoryStatus, setAddCategoryStatus] = useState<boolean>(false);
  return (
    <div className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      {addCategoryStatus && (
        <>
          {/* Overlay — ЗӨВХӨН ЭНД дархад хаагдана */}
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setAddCategoryStatus(false)}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div
              onClick={(e) => e.stopPropagation()}
              className="
          pointer-events-auto
          bg-white hidden md:block
          w-full max-w-[calc(100%-2rem)] md:max-w-130
          rounded-lg border border-[#f5f4f4] p-6 shadow-lg
        "
            >
              <h2 className="text-lg font-semibold">Ангилал нэмэх</h2>
              <p className="text-sm text-[#71717b]">
                Ангилалын нэрийг оруулна уу
              </p>
              <div className="flex flex-col gap-2 p-1 mt-2">
                <div className="grid w-full items-center gap-1.5">
                  <label className="flex items-center gap-2 text-sm font-medium mb-1">
                    Ангилалын нэр <span className="text-blue-500">*</span>{" "}
                  </label>
                  <input
                    placeholder="Ангилалын нэр"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-white px-3 py-2 sm:text-sm focus:outline-none focus:border-blue-500 focus:border-2"
                  />
                </div>
              </div>
              <div className="col-span-full flex justify-end mt-4 gap-4">
                <button
                  onClick={() => setAddCategoryStatus(false)}
                  className="bg-[#f5f4f4] text-[#1b1718] inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-8 px-4 py-1  "
                >
                  Цуцлах
                </button>
                <button className="text-white inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-400  h-8 px-4 py-1  ">
                  хадгалах
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all">
              Бүтээгдэхүүний ангилал
            </h1>
            <p className="text-[#71717b] text-sm line-clamp-1 break-all">
              Нийт бараа бүтээгдэхүүнүүдийн ангилал
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setAddCategoryStatus(true)}
              className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm justify-center
                   bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-40"
            >
              <Icon icon="gridicons:add-outline" width={20} />
              <p>Ангилал нэмэх</p>
            </button>
          </div>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Category;
