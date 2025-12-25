import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
import { ProductTable } from "../components/productTable";

function Product() {
  const products = [
    {
      productName: "Daimaagiin arisam gutal",
      productImage: "jordan.png",
      status: "идэвхтэй",
      price: 10000,
      uldegdel: 40,
      category: "gutal",
    },
    {
      productName: "daimaagiin oroolt",
      productImage: "jordan.png",
      status: "архив",
      price: 10000,
      uldegdel: 30,
      category: "архив",
    },
  ];
  return (
    <div className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
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
      <div className="w-full items-center justify-between mt-4">
        <div className="relative w-[320px] h-10">
          <div className="text-[#71717b] absolute left-[1px] top-[1px] p-2.5">
            <Icon icon="material-symbols-light:search-rounded" width="20" />
          </div>
          <input
            type="text"
            placeholder="Бараа нэрээр хайх..."
            className="flex h-10 pl-9 bg-white w-full rounded-md py-2 sm:text-sm border border-[#e7e3e4] focus:outline-none focus:border-blue-500 focus:border-2"
          />
        </div>
        <div className="w-full mt-4 rounded-xl border border-[#e7e3e4] min-w-250">
          <div className="relative w-full overflow-visible">
            <table className="w-full caption-bottom text-sm bg-white rounded-xl">
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
              <tbody className="">
                {products.map((product, index) => (
                  <ProductTable
                    key={index}
                    name={product.productName}
                    image={product.productImage}
                    status={product.status}
                    price={product.price}
                    category={product.category}
                    uldegdel={product.uldegdel}
                  />
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
