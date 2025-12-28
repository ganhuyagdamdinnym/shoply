import { Icon } from "@iconify/react";

const ProductDetails = () => {
  return (
    <main className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all">
              TEST PRODUCT
            </h1>
            <p className="text-[#71717b] text-sm line-clamp-1 break-all">
              Бараа бүтээгдэхүүний мэдээллийг шинэчлэх
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex flex items-center cursor-pointer justify-center gap-2 hover:bg-gray-200 rounded-xl bg-white px-4 py-2 text-sm font-medium h-10 border border-[#e7e3e4]">
              <Icon icon="mage:box-3d-cross" width="20" />
              Дууссан болгох
            </button>
            <button className="inline-flex flex items-center cursor-pointer justify-center gap-2 hover:opacity-80 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-400 px-4 py-2 text-white text-sm font-medium h-10">
              <Icon icon="uil:save" width="20" />
              Бараа Хадгалах
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-12 gap-4 max-w-[1400px] mx-auto">
            <div className="col-span-full xl:col-span-8 flex flex-col gap-4">
              <div className="bg-white border border-[#e7e3e4] rounded-xl p-4">
                <div className="grid w-full items-center gap-1.5 max-w-none!">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Барааны гарчиг
                    <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                      *
                    </span>
                  </label>
                  <input
                    placeholder="Барааны гарчгийг оруулна уу"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
             disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="mt-4">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Барааны тайлбар
                    <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                      *
                    </span>
                  </label>
                  <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-4 mt-3 pr-2 pb-2">
                    <input
                      placeholder="Энд тайлбараа бичнэ үү..."
                      className="flex h-10 w-full focus:ring-2 rounded-md border border-[#e7e3e4]  bg-[#ffffff] px-3 py-2 sm:text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
