import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
const Brand = () => {
  return (
    <div className="w-screen h-screen bg-[#f5f4f4] p-4  flex flex-col gap-4">
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
            <Icon
              icon="material-symbols-light:border-all-outline-rounded"
              width="24"
            />
            <p>Брэнд нэмэх</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
