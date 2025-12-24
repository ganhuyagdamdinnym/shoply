import { Icon } from "@iconify/react";
const Account = () => {
  return (
    <div className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">
            Бүртгэлийн тохиргоо
          </p>
          <p className="text-sm text-[#71717b]">
            Өөрийн бүртгэлийн хувийн мэдээллээ шинэчлэх боломжтой
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-xl mx-auto flex flex-col gap-8">
          <div className="rounded-xl border border-[#e7e3e4] bg-white p-4 pt-3">
            <h1 className="font-semibold font-gilroy text-lg">
              Ерөнхий мэдээлэл
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="grid w-full items-center gap-1.5 undefined">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Овог
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <input
                  placeholder="Таны овог"
                  className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500  focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 undefined">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Нэр
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <input
                  placeholder="Таны нэр"
                  className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500 focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="col-span-full w-full">
                <label className="block text-sm font-medium mb-1">
                  Имэйл <span className="text-blue-500">*</span>
                </label>

                <input
                  disabled
                  value={"damdinnymg@gmail.com"}
                  className="h-10 w-full rounded-md border text-gray-500 border-[#e7e3e4] bg-pure px-3 py-2
                cursor-not-allowed sm:text-sm "
                />
              </div>
              <div className="col-span-full w-full">
                <label className="block text-sm font-medium mb-1">
                  Утасны дугаар <span className="text-blue-500">*</span>
                </label>

                <input
                  placeholder="  Утасны дугаар"
                  className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500 focus:border-2
           "
                />
              </div>
              <div className="col-span-full flex justify-end">
                <button className="text-white inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
                  <Icon icon="uil:save" width="24" color="white" />
                  хадгалах
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-[#e7e3e4] bg-white p-4 pt-3">
            <h1 className="font-semibold font-gilroy text-lg">
              Профайл зураг солих
            </h1>
            <div className="flex justify-center items-center py-8">
              <div
                className="w-35 h-35 rounded-full bg-cover bg-center"
                style={{ backgroundImage: "url('/images.png')" }}
              ></div>
            </div>
            <div className="col-span-full flex justify-end">
              <button className="bg-[#f5f4f4] text-[#1b1718] inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2  ">
                <Icon icon="ic:outline-photo" width="24" color="#3B3838" />
                Зураг сонгох
              </button>
              <button className="text-white inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
                <Icon icon="uil:save" width="24" color="white" />
                хадгалах
              </button>
            </div>
          </div>
          <div className="rounded-xl border border-[#e7e3e4] bg-white p-4 pt-3 mb-3">
            <h1 className="font-semibold font-gilroy text-lg">Нууц үг солих</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Хуучин нууц үг
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <input
                  placeholder="Одоо ашиглаж буй хуучин нууц үг"
                  className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500 focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Шинэ нууц үг
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <input
                  placeholder="Шинээр нууц үг зохионо уу"
                  className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500 focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 max-w-none! col-span-full">
                <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
                  Шинэ нууц үг давтах
                  <span className="text-blue-500 -ml-1">*</span>
                </label>
                <input
                  placeholder="Дахин шинэ нууц үгээ оруулна уу"
                  className="flex h-10 w-full rounded-md border border-[#e7e3e4] bg-[#ffffff] px-3 py-2 sm:text-sm 
             placeholder:text-muted-foreground
             focus:outline-none focus:border-blue-500 focus:border-2
             disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <div className="col-span-full flex justify-end">
                <button className="text-white inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
                  <Icon icon="lucide:key" width="24" color="white" />
                  хадгалах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
