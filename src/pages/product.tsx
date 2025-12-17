import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
function Product() {
  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">
            Бараа бүтээгдэхүүн
          </p>
          <p className="text-sm text-[#71717b]">
            Бараа бүтээгдэхүүний нийт жагсаалт
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
      <div className="w-full items-center justify-between ">
        <div className="relative w-[320px] h-[40px]">
          <div className="text-[#71717b] absolute left-[1px] top-[1px] p-2.5">
            <Icon icon="material-symbols-light:search-rounded" width="20" />
          </div>
          <input
            type="text"
            placeholder="Бараа нэрээр хайх..."
            className="flex h-10 pl-9 w-full rounded-md py-2 sm:text-sm border border-[#e7e3e4]"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
