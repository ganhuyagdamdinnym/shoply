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
      orderType: "delivery",
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
    <div className="px-4 pt-4 pb-[80px] mt-[56px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
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
        <div className="w-full flex items-center justify-between ">
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
                      className="flex justify-center bg-white items-center gap-1 border border-[#e7e3e4] py-1 px-3 rounded-lg"
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
          <div className="w-full mt-4 rounded-xl border border-[#e7e3e4]">
            <div className=" w-full overflow-x-auto rounded-xl">
              <table className="w-full caption-bottom text-sm">
                <thead className="bg-white">
                  <tr className="bg-muted border-b border-[#e7e3e4]">
                    <th className="h-10 px-2 text-left font-medium">
                      Захиалгын #
                    </th>
                    <th className="h-10 px-2 text-left font-medium">Төлөв</th>
                    <th className="h-10 px-2 text-left font-medium">
                      Үнийн дүн
                    </th>
                    <th className="h-10 px-2 text-left font-medium">
                      Хэрэглэгч
                    </th>
                    <th className="h-10 px-2 text-left font-medium">
                      Захиалгын төрөл
                    </th>
                    <th className="h-10 px-2 text-left font-medium">
                      Төлөх хэлбэр
                    </th>
                    <th className="h-10 px-2 text-left font-medium">
                      Захиалсан огноо
                    </th>
                    <th className="h-10 px-2"></th>
                  </tr>
                </thead>
                <tbody className="bg-[#f5f4f4]">
                  {orders?.map((order: any, index: any) => (
                    <tr
                      key={index}
                      className="border-b border-[#e7e3e4] transition-colors"
                    >
                      <td className="px-2 py-2">{order.orderNumber}</td>
                      <td
                      // className={`px-2 py-2 font-semibold ${
                      //   order.status == "цуцлагдсан"
                      //     ? "text-[#b91c1c] bg-[]"
                      //     : order.status == "амжилттай"
                      //     ? "text-[green]"
                      //     : ""
                      // }`}
                      >
                        <p
                          className={`px-2 py-2 font-semibold ${
                            order.status == "цуцлагдсан"
                              ? "text-[#b91c1c] bg-[fee2e2]"
                              : order.status == "амжилттай"
                              ? "text-[green]"
                              : ""
                          }`}
                        >
                          {order.status}
                        </p>
                      </td>
                      <td className="px-2 py-2 text-[16px] font-medium">
                        {order.price}₮
                      </td>
                      <td className="px-2 py-2 flex flex-col">
                        <p className="font-medium"> {order.user}</p>
                        <p>{order.userPhoneNumber}</p>
                      </td>
                      <td className="px-2 py-2 ">{order.orderType}</td>
                      <td className="px-2 py-2 font-semibold">{order.type}</td>
                      <td className="px-2 py-2">{order.orderDate}</td>
                      <td className="px-2 py-2 text-right">
                        <Icon icon="tabler:dots" width="24" />
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
