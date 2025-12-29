import { Icon } from "@iconify/react";
import "../App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

type OptionType = "хэлбэр" | "төрөл" | "салбар" | "төлөв";
function Order() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const options: Record<OptionType, string[]> = {
    хэлбэр: ["Бүх хэлбэр", "Онлайн", "Оффлайн"],
    төрөл: ["Бүх төрөл", "Сургалт", "Ажлын байр", "Туршлага"],
    салбар: ["Бүх салбар", "IT", "Боловсрол", "Эрүүл мэнд"],
    төлөв: ["Бүх төлөв", "Идэвхтэй", "Хаагдсан"],
  };
  const handleAction = (type: string) => {
    if (type === "success") {
      toast.success("Захиалга амжилттай хүргэгдлээ", {
        description: "Хэрэглэгчид мэдэгдэл очсон.",
      });
    } else {
      toast.error("Алдал гарлаа", {
        description: "Дахин оролдоно уу.",
      });
    }
  };
  const handleToggle = (type: string) => {
    setOpenDropdown(openDropdown === type ? null : type);
  };
  const handleCheck = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const allIds = orders.map((o: any) => o.orderId);
      setSelectedIds(allIds);
    } else {
      setSelectedIds([]);
    }
  };
  const orders: any = [
    {
      orderId: "12345",
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
      orderId: "1234567",
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
    <div className="pt-4 pb-20 md:mt-0 md:px-2 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <Toaster position="top-right" richColors />
          <p className="font-semibold text-2xl sm:text-3xl">Захиалга</p>
          <p className="text-sm text-[#71717b]">
            Бүх захиалгын дэлгэрэнгүй мэдээлэл
          </p>
        </div>
        <Link to="/order/create">
          <button
            className="flex items-center gap-2 px-4 py-2 rounded-md font-medium text-sm
                   bg-linear-to-r from-blue-500 to-indigo-400 text-white cursor-pointer h-10 w-44"
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
          <div className="relative w-[320px] h-10">
            <div className="text-[#71717b] absolute left-px top-px p-2.5">
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
                        onChange={handleSelectAll}
                        checked={
                          selectedIds.length === orders.length &&
                          orders.length > 0
                        }
                        onClick={(e) => e.stopPropagation()}
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
                      onClick={() => navigate(`/order/${order.orderId}`)}
                      key={index}
                      className="border-b border-[#e7e3e4] hover:bg-white transition-colors group cursor-pointer"
                    >
                      <td onClick={(e) => e.stopPropagation()} className="p-4">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          onClick={(e) => e.stopPropagation()}
                          onChange={() => handleCheck(order.orderId)}
                          checked={selectedIds.includes(order.orderId)}
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
                          <span className="px-3 py-0.5 rounded-full bg-[#dbeafe] text-[#3b82f6] font-semibold text-[11px] w-fit">
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
                          <div onClick={(e) => e.stopPropagation()}>
                            <Icon
                              onClick={() => handleAction("success")}
                              icon="tabler:dots"
                              className="w-6 h-6 cursor-pointer hover:text-gray-900"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {selectedIds.length > 0 ? (
          <div className="animate-slide-up fixed bottom-16 md:bottom-2 left-0 right-0 w-full p-4 z-50 flex items-center justify-center">
            <div className="bg-muted shadow-lg rounded-2xl px-3 py-2 w-fit flex items-center justify-between xl:gap-2 gap-1">
              <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#1b1718]">
                <Icon icon="garden:x-stroke-12" width={20} color="[#1b1718]" />
                <span className="hidden xl:inline-flex">Болих</span>
              </button>
              <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#71717b]">
                <Icon
                  icon="solar:letter-outline"
                  width={22}
                  color="[#71717b]"
                />
                <span className="hidden xl:inline-flex">Харсан</span>
              </button>
              <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#b91c1c]">
                <Icon icon="cil:x-circle" width={20} color="[#1b1718]" />
                <span className="hidden xl:inline-flex">Цуцлах</span>
              </button>
              <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#d97706]">
                <Icon
                  icon="majesticons:clock-line"
                  width={22}
                  color="[#1b1718]"
                />
                <span className="hidden xl:inline-flex">Хүлээгдэж буй</span>
              </button>
              <button className="flex gap-2 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#16a34a]">
                <Icon
                  icon="lets-icons:money-light"
                  width={24}
                  color="[#1b1718]"
                />
                <span className="hidden xl:inline-flex">Төлөгдсөн</span>
              </button>
              <button className="flex gap-1 items-center justify-center cursor-pointer text-sm rounded-lg font-medium h-9 px-3 text-[#3b82f6]">
                <Icon icon="gg:check-o" width={20} color="[#1b1718]" />
                <span className="hidden xl:inline-flex">Хүргэгдсэн</span>
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Order;
