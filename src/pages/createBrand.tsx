import { Icon } from "@iconify/react";

const CreateBrand = () => {
  return (
    <main className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="max-w-md w-full mx-auto py-6 px-8 bg-white rounded-2xl border border-[#e7e3e4]">
        <h1 className="text-center font-gilroy text-xl font-semibold">
          Шинээр брэнд нэмэх
        </h1>
        <div className="w-full flex flex-col gap-4 mt-8">
          <div className="grid w-full items-center gap-1.5 max-w-none!">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Брэндийн нэр
              <span className="-ml-1">*</span>
            </label>
            <input
              type="text"
              placeholder="Брэндийн нэрийг оруулна уу"
              className="flex h-10  w-full rounded-md py-2 px-3 sm:text-sm border border-[#e7e3e4]  focus:outline-none focus:border-blue-500 focus:border-2"
            />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Брэндийн үндсэн зураг
              <span className="-ml-1">*</span>
            </label>
            <div className="aspect-square w-full bg-[#f5f4f4] border border-[#e7e3e4] rounded-xl flex items-center justify-center cursor-pointer">
              <Icon icon="icon-park-outline:picture" width="36" color="gray" />
            </div>
          </div>
          <div className="grid w-full gap-2 max-w-none!">
            <label className="flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50 mb-1">
              Брэндийн тайлбар
            </label>
            <textarea
              placeholder="Брэндийн тайлбарыг оруулна уу"
              className="border-input bg-[#f5f4f4] border-[#e7e3e4]
  placeholder:text-muted-foreground
  focus-visible:border-blue-500
  focus-visible:ring-blue-500/30
  flex field-sizing-content min-h-16 w-full rounded-md border
  px-3 py-2 text-base shadow-xs
  transition-[color,box-shadow]
  outline-none focus-visible:ring-[3px]
  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>
          <div className="flex justify-end gap-2 mt-8">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm
                   bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-44"
            >
              <Icon icon="lucide-lab:save" width="24" />
              <p>Хадгалах</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CreateBrand;
