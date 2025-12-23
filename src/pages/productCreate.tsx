import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
import { CreatingProductInfo } from "../components/creatingProductInfo";
function CreateProduct() {
  return (
    <div className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">Бараа нэмэх</p>
          <p className="text-sm text-[#71717b]">
            Бараа бүтээгдэхүүний мэдээллийг оруулан шинээр нэмэх
          </p>
        </div>
        <Link to="/product/create">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm justify-center
                   bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-40"
          >
            <Icon icon="system-uicons:box-add" width="24" />
            <p>Бараа нэмэх</p>
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4">
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
          <div className="bg-[#fcfcfc] border border-[#e7e3e4] rounded-xl p-4 pb-6">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Барааны мэдээлэл
              <span className="text-gradient-to-r from-blue-500 to-indigo-400 -ml-1">
                *
              </span>
            </label>
            <CreatingProductInfo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
