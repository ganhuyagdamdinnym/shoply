export const BackgroundInfo = () => {
  return (
    <div className="p-4 pb-0 bg-white rounded-2xl border border-[#e7e3e4]">
      <h1 className="font-gilroy text-xl font-semibold">Ерөнхий мэдээлэл</h1>
      <p className="text-sm text-[#71717b] mt-1">Дэлгүүрийн ерөнхий мэдээлэл</p>
      <div className="mt-4 border-t border-[#f5f4f4]">
        <dl className="divide-y divide-[#f5f4f4]">
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              Дэлгүүрийн нэр
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>Shoply</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              Дэлгүүрийн нэр
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>Shoply</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              Дэлгүүрийн нэр
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>Shoply</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              Дэлгүүрийн нэр
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>Shoply</span>
              <span>
                <button className=" bg-gradient-to-r from-blue-500 to-indigo-400 text-white h-10 px-4 py-2 inline-flex items-center font-medium cursor-pointer text-sm justify-center rounded-md">
                  Баталгаажуулах
                </button>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
