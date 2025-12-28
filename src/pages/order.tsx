import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
type OptionType = "хэлбэр" | "төрөл" | "салбар" | "төлөв";
function Order() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const options: Record<OptionType, string[]> = {
    хэлбэр: ["Бүх хэлбэр", "Онлайн", "Оффлайн"],
    төрөл: ["Бүх төрөл", "Сургалт", "Ажлын байр", "Туршлага"],
    салбар: ["Бүх салбар", "IT", "Боловсрол", "Эрүүл мэнд"],
    төлөв: ["Бүх төлөв", "Идэвхтэй", "Хаагдсан"],
  };

  const handleToggle = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };
  const orders: any = [
    {
      orderNumber: "SH0423",
      status: "цуцлагдсан",
      price: 10000,
      user: "Daimaa",
      userPhoneNumber: "86321240",
      orderType: "хүргэлтээр",
      type: "transfort",
      orderDate: "2025.12.12",
    },
    {
      orderNumber: "SH2007",
      status: "амжилттай",
      price: 10000,
      user: "Daimaa",
      orderType: "delivery",
      type: "transfort",
      orderDate: "2025.12.12",
    },
  ];
  return (
    <div className="pt-4 pb-[80px] md:mt-0 md:px-2 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">Захиалга</p>
          <p className="text-sm text-[#71717b]">
            Бүх захиалгын дэлгэрэнгүй мэдээлэл
          </p>
        </div>
        <Link to="/order/create">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm
                   bg-gradient-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-44"
          >
            <Icon
              icon="material-symbols-light:border-all-outline-rounded"
              width="24"
            />
            <p>Захиалга үүсгэх</p>
          </button>
        </Link>
      </div>
      <div>
        <div className="w-full flex items-center justify-between mt-4 min-w-200">
          <div className="relative w-[320px] h-[40px]">
            <div className="text-[#71717b] absolute left-[1px] top-[1px] p-2.5">
              <Icon icon="material-symbols-light:search-rounded" width="20" />
            </div>

            <input
              type="text"
              placeholder="Захиа. #, нэр, имэйл, утасаар хайх..."
              className="flex h-10 pl-9 w-full rounded-md py-2 bg-white sm:text-sm border border-[#e7e3e4]  focus:outline-none focus:border-blue-500 focus:border-2"
            />
          </div>
          <div className="items-center gap-2 hidden lg:flex">
            <div className="flex w-full gap-1.5">
              {(["хэлбэр", "төрөл", "салбар", "төлөв"] as OptionType[]).map(
                (type) => (
                  <div key={type} className="relative">
                    <button
                      onClick={() => handleToggle(type)}
                      className="flex justify-center bg-white items-center gap-1 border border-[#e7e3e4] py-1 px-3 rounded-lg w-30"
                    >
                      <span className="text-[14px]">{options[type][0]}</span>
                      <Icon
                        icon="oui:arrow-down"
                        width="16"
                        color="#888485"
                        className="mt-1"
                      />
                    </button>

                    {openDropdown === type && (
                      <ul className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        {options[type].map((option) => (
                          <li
                            key={option}
                            onClick={() => {
                              console.log(type, option);
                              setOpenDropdown(null);
                            }}
                            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[14px]"
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        {orders == "" ? (
          <div className="w-full mt-4 rounded-md border border-[#e7e3e4]">
            <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12">
              <div className="flex max-w-sm flex-col items-center gap-2 text-center">
                <Icon
                  icon="material-symbols-light:border-all-outline-rounded"
                  width="32"
                />
                <div className="text-lg font-medium tracking-tight">
                  Захиалга хоосон байна
                </div>
                <div className="text-[#71717b] [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4">
                  Одоогоор захиалга бүртгэгдээгүй байна
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full mt-4 rounded-xl border border-[#e7e3e4] overflow-hidden min-w-250">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-white border-b border-[#e7e3e4]">
                    <th className="p-4 w-10">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                      />
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      Захиалгын #
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      Төлөв
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      <div className="flex items-center gap-1">
                        Үнийн дүн{" "}
                        <Icon icon="lucide:arrow-up-down" className="w-4 h-4" />
                      </div>
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      Хэрэглэгч
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      Захиалгын төрөл
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      Төлөх хэлбэр
                    </th>
                    <th className="py-4 px-2 text-left font-semibold text-gray-900">
                      <div className="flex items-center gap-1">
                        Захиалсан огноо{" "}
                        <Icon icon="lucide:arrow-up-down" className="w-4 h-4" />
                      </div>
                    </th>
                    <th className="py-4 px-2 w-20"></th>
                  </tr>
                </thead>
                <tbody className="bg-[#f9f9f9]">
                  {orders?.map((order: any, index: any) => (
                    <tr
                      key={index}
                      className="border-b border-[#e7e3e4] hover:bg-white transition-colors group"
                    >
                      <td className="p-4">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                      </td>
                      <td className="px-2 py-4 font-medium text-gray-500">
                        {order.orderNumber.slice(0, 4)}
                        <span className="text-gray-900 font-bold">
                          {order.orderNumber.slice(4)}
                        </span>
                      </td>
                      <td className="px-2 py-4">
                        {order.status === "цуцлагдсан" ? (
                          <span className="px-3 py-1.5 rounded-lg bg-[#fee2e2] text-[#b91c1c] font-bold text-xs">
                            Цуцлагдсан
                          </span>
                        ) : (
                          <span className="px-3 py-1.5 rounded-lg bg-green-100 text-green-700 font-bold text-xs">
                            {order.status}
                          </span>
                        )}
                      </td>
                      <td className="px-2 py-4 font-bold text-base">
                        {order.price?.toLocaleString()}₮
                      </td>
                      <td className="px-2 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900 tracking-tight">
                            <span className="text-gray-400 font-medium">
                              A.{" "}
                            </span>
                            {order.user}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {order.userPhoneNumber}
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-4">
                        <div className="flex flex-col">
                          <span className="px-3 py-0.5 rounded-full bg-[#e0eaff] text-[#4338ca] font-semibold text-[11px] w-fit">
                            Хүргэлтээр
                          </span>
                          <span className="text-[11px] text-gray-400 mt-0.5 ml-1">
                            Улаанбаатар
                          </span>
                        </div>
                      </td>
                      <td className="px-2 py-4 font-bold text-gray-900">
                        {order.type}
                      </td>
                      <td className="px-2 py-4 text-gray-600 font-medium">
                        {order.orderDate}
                      </td>
                      <td className="px-2 py-4">
                        <div className="flex items-center gap-3 justify-end text-gray-400">
                          <Icon
                            icon="lucide:eye"
                            className="w-5 h-5 cursor-pointer hover:text-gray-900"
                          />
                          <Icon
                            icon="tabler:dots"
                            className="w-6 h-6 cursor-pointer hover:text-gray-900"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Order;
