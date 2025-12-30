import { Icon } from "@iconify/react";

const OrderEdit = () => {
  return (
    <main className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
        <div className="flex flex-col">
          <div className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all flex items-center gap-x-4">
            <div className="">#SH25570573</div>
          </div>
          <p className="text-[#71717b] text-sm line-clamp-1 break-all font-medium mt-1">
            2025 оны 12-р сарын 12-нд 13:48 захиалсан
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="flex items-center gap-2 px-4 rounded-md font-medium text-sm justify-center
                   bg-linear-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-9"
          >
            <Icon icon="system-uicons:box-add" width="24" />
            <p>Хадгалах</p>
          </button>
        </div>
      </div>
      <div className="mt-4  grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="col-span-1 mb-4 xl:col-span-8 flex flex-col gap-6">
          <div className="p-3 border border-[#e7e3e4] bg-white rounded-xl">
            <h1 className="font-gilroy font-semibold text-lg px-2">
              Захиалагчийн мэдээлэл
            </h1>
            <div className="rounded-xl bg-[#f5f4f4] border border-[#f5f4f4] p-4 flex flex-col gap-2 mt-2">
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="grid w-full items-center gap-1.5 max-w-none!">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Овог
                    <span className="text-blue-500 -ml-1">*</span>
                  </label>
                  <input
                    placeholder="Захиалагчийн овог"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 max-w-none!">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Нэр
                    <span className="text-blue-500 -ml-1">*</span>
                  </label>
                  <input
                    placeholder="Захиалагчийн нэр"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Нэр
                    <span className="text-blue-500 -ml-1">*</span>
                  </label>
                  <input
                    placeholder="Захиалагчийн имэйл хаяг"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 max-w-none!">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Нэр
                    <span className="text-blue-500 -ml-1">*</span>
                  </label>
                  <input
                    placeholder="Захиалагчийн утасны дугаар"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 max-w-none!">
                  <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                    Нэр
                    <span className="text-blue-500 -ml-1">*</span>
                  </label>
                  <input
                    placeholder="Захиалагчийн нэмэлт утасны дугаар"
                    className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
            </div>
            <h1 className="font-gilroy font-semibold text-lg px-2">
              Хүргэлтийн мэдээлэл
            </h1>
            <div className="rounded-xl bg-[#f5f4f4] border border-[#f5f4f4] p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 mt-2">
              <div className="cursor-pointer border rounded-lg flex flex-col p-4 col-span-full  border-blue-500 bg-blue-50 ">
                <div className="flex justify-between items-center">
                  <div className="flex flex-1 justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <div className="flex gap-2 font-medium items-center text-sm">
                        Хүргэлтээр авах
                      </div>
                      <div className="text-xs text-[#71717b] font-medium">
                        Аль нэг хаяг руу хүргүүлнэ
                      </div>
                    </div>
                    <p className="text-blue-500">
                      <Icon icon="gg:check-o" width={20} color="blue-500" />
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-full w-full">
                <h1 className="text-lg font-semibold leading-none mt-2 col-span-full font-gilroy">
                  Хүргэлтийн хаяг
                </h1>
                <div className="w-full flex flex-col gap-4 mt-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Хаягийн төрөл
                    </label>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
                      <div className="cursor-pointer border rounded-lg p-3 text-center border-blue-500 bg-blue-50">
                        <div className="flex items-center justify-center relative">
                          <div className="text-sm font-medium text-primary">
                            Орон сууц
                          </div>
                          <p className="text-blue-500 absolute right-0">
                            <Icon
                              icon="gg:check-o"
                              width={16}
                              color="blue-500"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="cursor-pointer border rounded-lg p-3 text-center border-[#e7e3e4] ">
                        <div className="flex items-center justify-center relative">
                          <div className="text-sm font-medium text-primary">
                            Хашаа байшин
                          </div>
                          <p className="text-blue-500 absolute right-0">
                            <Icon
                              icon="gg:check-o"
                              width={16}
                              color="blue-500"
                            />
                          </p>
                        </div>
                      </div>
                      <div className="cursor-pointer border rounded-lg p-3 text-center border-[#e7e3e4] ">
                        <div className="flex items-center justify-center relative">
                          <div className="text-sm font-medium text-primary">
                            Оффис
                          </div>
                          <p className="text-blue-500 absolute right-0">
                            <Icon
                              icon="gg:check-o"
                              width={16}
                              color="blue-500"
                            />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full">
                      <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                        Хот / Аймаг
                        <span className="text-blue-500 -ml-1">*</span>
                      </label>
                      <input
                        placeholder="Хот эсвэл Аймаг"
                        className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5 max-w-none!">
                      <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                        Дүүрэг / Сум
                        <span className="text-blue-500 -ml-1">*</span>
                      </label>
                      <input
                        placeholder="Дүүрэг эсвэл Сум"
                        className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5 max-w-none!">
                      <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                        Хороо / Баг
                        <span className="text-blue-500 -ml-1">*</span>
                      </label>
                      <input
                        placeholder="Хороо эсвэл Баг"
                        className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="grid w-full items-center gap-1.5 max-w-none!">
                      <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                        Байр
                        <span className="text-blue-500 -ml-1">*</span>
                      </label>
                      <input
                        placeholder="Байр"
                        className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                    <div className="grid w-full items-center gap-1.5 max-w-none!">
                      <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                        Тоот
                        <span className="text-blue-500 -ml-1">*</span>
                      </label>
                      <input
                        placeholder="Тоот"
                        className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                      />
                    </div>
                  </div>
                  <div className="grid w-full items-center gap-1.5 max-w-none!">
                    <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                      Нэмэлт мэдээлэл
                    </label>
                    <input
                      placeholder=" Нэмэлт мэдээлэл"
                      className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <p className="text-xs opacity-50 font-medium">
                      Орц, орцны код гэх мэт
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="font-gilroy font-semibold text-lg px-2 mt-4">
              Төлбөрийн сонголт
            </h1>
            <div className="cursor-pointer border rounded-lg mt-2 flex flex-col p-4 col-span-full  border-blue-500 bg-blue-50 ">
              <div className="flex justify-between items-center">
                <p className="font-medium items-center text-sm">
                  Дансаар шилжүүлэх
                </p>
                <p className="text-blue-500">
                  <Icon icon="gg:check-o" width={20} color="blue-500" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-4 flex flex-col gap-6">
          <div className="rounded-xl border border-[#e7e3e4] bg-white p-2 flex flex-col py-3 gap-1">
            <h1 className="font-gilroy font-semibold text-lg px-2">
              Захиалгын төлөв
            </h1>
            <div className="col-span-full rounded-xl bg-[#f5f4f4]/60 border border-[#f5f4f4] p-3 flex flex-col gap-2">
              <div className="flex flex-col w-full gap-1.5 undefined">
                <button></button>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white border-[#e7e3e4] p-2 flex flex-col py-3 gap-1">
            <h1 className="font-gilroy font-semibold text-lg px-2">
              Захиалгын үнийн мэдээлэл
            </h1>
            <div className="col-span-full rounded-xl bg-[#f5f4f4]/60 border border-[#f5f4f4] p-3 flex flex-col gap-2">
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="font-medium">Үнийн дүн</dt>
                  <dd className="text-[#71717b] font-medium">289,000₮</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Хямдрал</dt>
                  <dd className="text-[#71717b] font-medium">0₮</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-medium">Хүргэлт</dt>
                  <dd className="text-[#71717b] font-medium">5000₮</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-base font-gilroy">
                    Нийт төлөх үнэ
                  </dt>
                  <dd className="font-semibold text-xl">289,000₮</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="gap-2 items-center justify-end flex xl:hidden">
            <button
              className="flex items-center gap-2 px-4 rounded-lg font-medium text-sm
              bg-linear-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10"
            >
              <Icon icon="lucide-lab:save" width="22" />
              <p>Хадгалах</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderEdit;
{
  /* <div className="col-span-1 xl:col-span-4 flex flex-col gap-6">ss</div>
          <div className="gap-2 items-center justify-end hidden xl:flex">
            <button
              className="flex items-center gap-2 px-4 rounded-lg font-medium text-sm
              bg-linear-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10"
            >
              <Icon icon="lucide-lab:save" width="22" />
              <p>Хадгалах</p>
            </button>
          </div> */
}
