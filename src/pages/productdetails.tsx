import { Icon } from "@iconify/react";
import { useState } from "react";
import { DetailedInfo } from "../components/detailedInfoProduct";
const images = ["jordan.png"];
const ProductDetails = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <main className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
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
            <button className="inline-flex items-center cursor-pointer justify-center gap-2 hover:bg-gray-200 rounded-xl bg-white px-4 py-2 text-sm font-medium h-10 border border-[#e7e3e4]">
              <Icon icon="mage:box-3d-cross" width="20" />
              Дууссан болгох
            </button>
            <button className="inline-flex items-center cursor-pointer justify-center gap-2 hover:opacity-80 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-400 px-4 py-2 text-white text-sm font-medium h-10">
              <Icon icon="uil:save" width="20" />
              Бараа Хадгалах
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div className="grid grid-cols-12 gap-4 max-w-350 mx-auto">
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
              <div className="bg-white border border-[#e7e3e4] rounded-xl p-4">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Барааны мэдээлэл
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <div className="">
                  <div className="flex flex-col gap-8"></div>
                  <div className="flex justify-end mt-4 gap-2">
                    <div className="border border-[#e7e3e4] rounded-xl p-4 bg-white w-full">
                      <div>
                        <div className="flex flex-col sm:flex-row justify-between gap-1 sm:items-center">
                          <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                            Барааны төрлийн зураг
                          </label>
                        </div>
                        <div>
                          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-10 gap-4 mt-4">
                            {/* Сонгогдсон зургуудыг харуулах хэсэг */}
                            {images.map((img, index) => (
                              <div
                                key={index}
                                className="relative col-span-2 aspect-square group overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
                              >
                                {/* Зураг */}
                                <img
                                  src={img}
                                  alt="branch"
                                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                  <button
                                    //onClick={() => removeImage(index)}
                                    className="bg-white/90 hover:bg-red-50 text-red-500 p-2 rounded-xl shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                                  >
                                    <Icon icon="lucide:trash-2" width="20" />
                                  </button>
                                </div>
                              </div>
                            ))}

                            {/* Зураг нэмэх товч */}
                            <label className="relative col-span-2 aspect-square cursor-pointer group">
                              <input
                                type="file"
                                multiple
                                accept="image/*"
                                className="hidden"
                                // onChange={handleFileChange}
                              />
                              <div className="w-full h-full border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-2 bg-gray-50/50 transition-all duration-300 group-hover:border-blue-400 group-hover:bg-blue-50/30 group-hover:shadow-md">
                                <div className="p-3 rounded-full bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                  <Icon
                                    icon="lucide:plus"
                                    width="24"
                                    className="text-blue-500"
                                  />
                                </div>
                                <span className="text-[12px] font-semibold text-gray-500 group-hover:text-blue-600">
                                  Зураг нэмэх
                                </span>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-12 gap-y-6 gap-x-4 mt-6">
                        <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full md:col-span-6">
                          <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                            Үлдэгдэл
                            <span className="text-blue-500 -ml-1">*</span>
                          </label>
                          <div
                            className="relative flex h-10 w-full items-center rounded-xl border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 
             disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <input
                              placeholder="0"
                              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            />

                            <div className="ml-2 cursor-text select-none text-sm text-[#71717b]">
                              ш
                            </div>
                          </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full md:col-span-6">
                          <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                            Үндсэн үнэ
                            <span className="text-blue-500 -ml-1">*</span>
                          </label>
                          <div
                            className="relative flex h-10 w-full items-center rounded-xl border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 
             disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <div className=" cursor-text select-none text-sm text-[#71717b]">
                              ₮
                            </div>
                            <input
                              placeholder="0"
                              className="flex-1 px-2 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full md:col-span-6">
                          <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                            Хямдралын үнэ
                            <span className="text-blue-500 -ml-1">*</span>
                          </label>
                          <div
                            className="relative flex h-10 w-full items-center rounded-xl border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 
             disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <div className=" cursor-text select-none text-sm text-[#71717b]">
                              ₮
                            </div>
                            <input
                              placeholder="0"
                              className="flex-1 bg-transparent text-sm px-2 outline-none placeholder:text-muted-foreground"
                            />
                          </div>
                        </div>
                        <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full md:col-span-6">
                          <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                            Хямдралын хувь
                            <span className="text-blue-500 -ml-1">*</span>
                          </label>
                          <div
                            className="relative flex h-10 w-full items-center rounded-xl border border-[#e7e3e4] bg-white px-3
             focus-within:border-blue-500 
             disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <div className=" cursor-text select-none text-sm text-[#71717b]">
                              %
                            </div>
                            <input
                              placeholder="0"
                              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground px-2"
                            />
                          </div>
                        </div>
                        <div className="col-span-full">
                          <div className="flex items-center space-x-3 py-2">
                            <button
                              type="button"
                              onClick={() => setIsActive(!isActive)}
                              className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors focus:outline-none ${
                                isActive ? "bg-black" : "bg-gray-200"
                              }`}
                            >
                              <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                  isActive ? "translate-x-6" : "translate-x-0"
                                }`}
                              />
                            </button>
                            <label
                              className="text-sm font-medium cursor-pointer"
                              onClick={() => setIsActive(!isActive)}
                            >
                              Дэлгэрэнгүй мэдээлэл
                            </label>
                          </div>

                          {/* ЭНД DetailedInfo-г дуудаж байна */}
                          {isActive && <DetailedInfo />}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-full xl:col-span-4 flex flex-col gap-4">
              <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Барааны төлөв
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <div className="flex flex-col w-full gap-1.5 max-w-none! mt-3">
                  <button
                    // onClick={() => handleToggle(type)}
                    className="flex justify-between bg-white items-center gap-1 border border-[#e7e3e4] py-1 px-3 rounded-lg w-full "
                  >
                    <span className="text-[14px]">Идэвхтэй</span>
                    <Icon
                      icon="oui:arrow-down"
                      width="14"
                      color="#888485"
                      className="mt-1"
                    />
                  </button>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Барааны ангилал
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <div className="flex flex-col w-full gap-1.5 max-w-none! mt-3">
                  <button
                    // onClick={() => handleToggle(type)}
                    className="flex justify-between bg-white items-center gap-1 border border-[#e7e3e4] py-1 px-3 rounded-lg w-full "
                  >
                    <span className="text-[14px]">Идэвхтэй</span>
                    <Icon
                      icon="oui:arrow-down"
                      width="14"
                      color="#888485"
                      className="mt-1"
                    />
                  </button>
                </div>
              </div>{" "}
              <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Брэнд
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <div className="flex flex-col w-full gap-1.5 max-w-none! mt-3">
                  <button
                    // onClick={() => handleToggle(type)}
                    className="flex justify-between bg-white items-center gap-1 border border-[#e7e3e4] py-1 px-3 rounded-lg w-full "
                  >
                    <span className="text-[14px]">Идэвхтэй</span>
                    <Icon
                      icon="oui:arrow-down"
                      width="14"
                      color="#888485"
                      className="mt-1"
                    />
                  </button>
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
