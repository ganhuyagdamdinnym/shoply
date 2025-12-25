import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

type BrandType = {
  image: string;
  name: string;
  description: string;
};
const data: BrandType[] = [
  {
    name: "test",
    image: "jordan.png",
    description: "mmewegtghggsdafgyu",
  },
  {
    name: "test2",
    image: "jordan.png",
    description: "mmewegtghggsdafgyu",
  },
];
const Brand = () => {
  const [brands, setBrands] = useState<BrandType[] | null>(null);

  useEffect(() => {
    setBrands(data);
  }, []);
  return (
    <div className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">Брэнд</p>
          <p className="text-sm text-[#71717b]">
            Дэлгүүрийн нийт брэндүүдийн жагсаалт
          </p>
        </div>
        <Link to="/brand/create">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm
                   bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-44"
          >
            <Icon icon="gridicons:add-outline" width={24} />
            <p>Брэнд нэмэх</p>
          </button>
        </Link>
      </div>
      {brands == null ? (
        <div className="mt-4">
          <div>
            <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6  rounded-lg border-dashed p-6 text-center text-balance md:p-12">
              <div className="flex max-w-sm flex-col items-center gap-2 text-center">
                <Icon icon="tabler:chart-circles" width={32} />
                <h1 className="text-lg font-medium tracking-tight">
                  Салбар хоосон байна
                </h1>
                <p className="text-[#71717b] [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4">
                  Одоогоор ямар ч брэнд нэмээгүй байна. Шинээр үүсгэж оруулна
                  уу.
                </p>
                <Link to="/brand/create">
                  <button
                    className="mt-2 flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm justify-center
                   bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-40"
                  >
                    <Icon icon="gridicons:add-outline" width={20} />
                    <p>Брэнд нэмэх</p>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {brands.map((brand, index) => (
            <div
              className="p-4 rounded-xl border border-[#e7e3e4] bg-white"
              key={index}
            >
              <div className="flex flex-col items-center justify-center">
                <img
                  src={`${brand.image}`}
                  className="w-35 h-35 rounded-full aspect-1 object-cover mb-4"
                />
                <h2 className="text-lg font-semibold text-center">
                  {brand.name}
                </h2>
                <p className="text-xs font-medium text-[#71717b] mt-2 text-center">
                  {brand.description}
                </p>
                <button className="bg-[#1b1718]/10 h-8 mt-4 px-4 py-1 inline-flex gap-2 items-center cursor-pointer text-sm justify-center rounded-md">
                  <Icon icon="ri:settings-line" />
                  Засварлах
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Brand;
