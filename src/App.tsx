import "./App.css";
import { Icon } from "@iconify/react";
import { RequireSettings } from "./components/requireSettings";
import { LastOrders } from "./components/lastOrders";
function App() {
  return (
    <div className="px-4 border border-[#e7e3e4] pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div>
        <p className="font-semibold text-2xl sm:text-3xl">
          Өдрийн мэнд, Санчир
        </p>
        <p className="text-sm text-[#71717b]">Shoply дэлгүүр</p>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 gap-4 xl:!grid-cols-4">
        <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-3 sm:p-4">
          <p className="font-semibold  text-xs sm:text-xl text-[#71717b]">
            Энэ сарын захиалга
          </p>
          <div className="flex itens-center gap-2 sm:gap:3 py-2">
            <div className="flex items-center justify-center rounded-full bg-gray-200 h-12 w-12">
              <Icon
                icon="material-symbols-light:border-all-outline-rounded"
                width="28"
                color="#16a34a"
              />
            </div>

            <p className="font-gilroy text-3xl sm:text-4xl font-semibold">2</p>
          </div>
          <p className="text-[#71717b] text-xs sm:text-sm">
            Өмнөх сард 0 захиалга
          </p>
        </div>
        <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-3 sm:p-4">
          <p className="font-semibold  text-xs sm:text-xl text-[#71717b]">
            Нийт захиалга
          </p>
          <div className="flex itens-center gap-2 sm:gap:3 py-2">
            <div className="flex items-center justify-center rounded-full bg-gray-200 h-12 w-12">
              <Icon
                icon="fluent-mdl2:product-variant"
                width="28"
                color="#3b82f6"
              />
            </div>

            <p className="font-gilroy text-3xl sm:text-4xl font-semibold">2</p>
          </div>
          <p className="text-[#71717b] text-xs sm:text-sm">Сард дунджаар 1</p>
        </div>
        <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-3 sm:p-4">
          <p className="font-semibold  text-xs sm:text-xl text-[#71717b]">
            Нийт бараа
          </p>
          <div className="flex itens-center gap-2 sm:gap:3 py-2">
            <div className="flex items-center justify-center rounded-full bg-gray-200 h-12 w-12">
              <Icon icon="fluent-mdl2:product" width="28" color="#7c3aed" />
            </div>

            <p className="font-gilroy text-3xl sm:text-4xl font-semibold">2</p>
          </div>
          <p className="text-[#71717b] text-xs sm:text-sm">
            Эндээс 1 нь идэвхтэй
          </p>
        </div>
        <div className="bg-[#fcfcfc] border border-[#f5f4f4] rounded-xl p-3 sm:p-4">
          <p className="font-semibold  text-xs sm:text-sm text-[#71717b]">
            Нийт хэрэглэгч
          </p>
          <div className="flex itens-center gap-2 sm:gap:3 py-2">
            <div className="flex items-center justify-center rounded-full bg-gray-200 h-12 w-12">
              <Icon icon="mynaui:users" width="28" color="#e11d48" />
            </div>

            <p className="font-gilroy text-3xl sm:text-4xl font-semibold">0</p>
          </div>
          <p className="text-[#71717b] text-xs sm:text-sm">Энэ сар шинээр 0</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-4 items-start">
        <RequireSettings />
        <LastOrders />
      </div>
    </div>
  );
}

export default App;
