import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
import Category from "./category";
function Product() {
  const products = [
    {
      productName: "Daimaagiin arisam gutal",
      productImage: "hjadsj",
      status: "идэвхтэй",
      price: 10000,
      uldegdel: 40,
      category: "gutal",
    },
    {
      productName: "daimaagiin oroolt",
      productImage: "hjadsj",
      status: "архив",
      price: 10000,
      uldegdel: 30,
      category: "архив",
    },
  ];
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
        <div className="w-full mt-4 rounded-md border border-[#e7e3e4]">
          <div className="relative w-full overflow-x-auto">
            <table className="w-full caption-bottom text-sm">
              <thead>
                <tr className="bg-muted border-b border-[#e7e3e4]">
                  <th className="h-10 px-2 text-left font-medium">
                    {/* <input type="checkbox" /> */}
                  </th>
                  <th className="h-10 px-2 text-left font-medium">
                    Бараа бүтээгдэхүүн
                  </th>
                  <th className="h-10 px-2 text-left font-medium">Төлөв</th>
                  <th className="h-10 px-2 text-left font-medium">Үнийн дүн</th>
                  <th className="h-10 px-2 text-left font-medium">Үлдэгдэл</th>
                  <th className="h-10 px-2 text-left font-medium">Ангилал</th>
                  <th className="h-10 px-2"></th>
                </tr>
              </thead>
              <tbody className="bg-[#f5f4f4]">
                {products.map((product, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#e7e3e4] transition-colors"
                  >
                    <td className="px-2 py-2">
                      <input type="checkbox" />
                    </td>
                    <td className="px-2 py-2 flex items-center gap-2">
                      <img src="jordan.png" width="52" />
                      {product.productName}
                    </td>
                    <td
                      className={`px-2 py-2 font-semibold ${
                        product.status == "идэвхтэй"
                          ? "text-[green]"
                          : product.status == "архив"
                          ? "text-amber-500"
                          : ""
                      }`}
                    >
                      {product.status}{" "}
                    </td>
                    <td className="px-2 py-2 text-[16px] font-medium ">
                      {product.price}₮
                    </td>
                    <td className="px-2 py-2">{product.uldegdel}ш үлдсэн</td>
                    <td className="px-2 py-2">{product.category}</td>
                    <td className="px-2 py-2 text-right">
                      <Icon icon="tabler:dots" width="24" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
