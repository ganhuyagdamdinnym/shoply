import { Icon } from "@iconify/react";

const OrderDetails = () => {
  return (
    <main className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all flex items-center gap-x-4">
              <div className="text-[#71717b]">#SH25570573</div>
              <div className="inline-flex items-center justify-center font-gilroy font-semibold text-[#b91c1c] bg-[#fee2e2] text-danger text-sm px-3 py-1 rounded-sm">
                Цуцлагдсан
              </div>
            </div>
            <p className="text-[#71717b] text-sm line-clamp-1 break-all font-medium mt-1">
              2025 оны 12-р сарын 12-нд 13:48 захиалсан
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div className="bg-white h-10 px-4 py-2 border border-[#e7e3e4] inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium">
              <Icon icon="ri:settings-line" />
              Засах
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="col-span-1 xl:col-span-8 flex flex-col gap-6">
            <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
              <h1 className="font-gilroy font-semibold text-lg px-2">
                Захиалсан бараанууд
              </h1>
              <div className="rounded-xl bg-[#f5f4f4] border border-[#f5f4f4] p-3 flex flex-col gap-3 mt-2 divide-y divide-muted sm:divide-y-0">
                <div className="flex flex-col gap-y-2 last:border-b-0 pb-4 sm:pb-3">
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-0 sm:items-center sm:justify-between">
                    <div className="flex gap-3 items-center h-full">
                      <img
                        className="w-16 h-16 object-cover rounded-lg"
                        src="jordan.png"
                      />
                      <div className="flex flex-col justify-between h-full gap-1">
                        <h1 className="font-medium line-clamp-1 break-all">
                          TEST PRODUCT
                        </h1>
                        <div className="bg-[#f5f4f4] text-xs line-clamp-1 break-all w-fit px-2 py-0.5 rounded-lg font-medium mt-0.5">
                          Үндсэн төрөл
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold font-gilroy">1 shiheg</p>
                      </div>
                      <div className="flex gap-1 items-center text-sm text-[#71717b] font-medium">
                        289,000₮ x 1 = 289,000₮
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium disabled:opacity-50 bg-[#f5f5f5] text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2  ">
                  Бараа буцаах
                </button>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white"></div>
            <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
