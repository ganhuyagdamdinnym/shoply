import { Icon } from "@iconify/react";
import { useParams, useNavigate } from "react-router-dom";

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
const OrderDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <main className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all flex items-center gap-x-4">
              <div className="text-[#71717b]">#SH25570573</div>
              <div className="inline-flex items-center justify-center font-gilroy font-semibold text-[#b91c1c] bg-[#fee2e2] text-danger text-sm px-3 py-1 rounded-sm">
                Цуцлагдсан
              </div>
            </div>
            <p className="text-[#71717b] text-sm line-clamp-1 break-all font-medium mt-1">
              2025 оны 12-р сарын 12-нд 13:48 захиалсан
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <div
              onClick={() => navigate(`/order/${id}/edit`)}
              className="bg-white h-10 px-4 py-2 border border-[#e7e3e4] inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium"
            >
              <Icon icon="ri:settings-line" />
              Засах
            </div>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="col-span-1 xl:col-span-8 flex flex-col gap-6">
            <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
              <h1 className="font-gilroy font-semibold text-lg px-2">
                Захиалсан бараанууд
              </h1>
              <div className="rounded-xl bg-[#f5f4f4] border border-[#f5f4f4] p-3 flex flex-col gap-3 mt-2 divide-y divide-muted sm:divide-y-0">
                <div className="flex flex-col gap-y-2 last:border-b-0 pb-4 sm:pb-3">
                  <div className="flex flex-col sm:flex-row gap-x-4 gap-y-0 sm:items-center sm:justify-between">
                    <div className="flex gap-3 items-center h-full">
                      <img
                        className="w-16 h-16 object-cover rounded-lg"
                        src="jordan.png"
                      />
                      <div className="flex flex-col justify-between h-full gap-1">
                        <h1 className="font-medium line-clamp-1 break-all">
                          TEST PRODUCT
                        </h1>
                        <div className="bg-[#f5f4f4] text-xs line-clamp-1 break-all w-fit px-2 py-0.5 rounded-lg font-medium mt-0.5">
                          Үндсэн төрөл
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 items-end">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold font-gilroy">1 shiheg</p>
                      </div>
                      <div className="flex gap-1 items-center text-sm text-[#71717b] font-medium">
                        289,000₮ x 1 = 289,000₮
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <button className="inline-flex items-center text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium disabled:opacity-50 bg-[#f5f5f5] text-secondary-foreground hover:bg-secondary/80 h-10 px-4 py-2  ">
                  <Icon icon="mage:box-3d-minus" width={20} />
                  Бараа буцаах
                </button>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
              <h1 className="font-gilroy font-semibold text-lg px-2">
                Төлбөрийн мэдээлэл
              </h1>
              <div className="rounded-xl bg-[#f5f4f4] border border-[#f5f4f4] px-3 py-4 flex flex-col gap-2 mt-2">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pb-4 text-sm px-2">
                  <div>
                    <dt className="font-medium">Төлбөрийн хэлбэр</dt>
                    <dd className="text-[#71717b] mt-2">
                      <div className="inline-flex items-center justify-center font-gilroy font-semibold bg-muted text-[#0b0809] text-base px-4 py-1.5 rounded-lg">
                        Дансаар шилжүүлэх
                      </div>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-medium">Зааварчилгаа</dt>
                    <dd className="mt-2 text-[#71717b] font-medium flex gap-2">
                      <div>
                        Дансаа шалгахдаа
                        <strong>SH25570573</strong>
                        утгатай гүйлгээ
                        <strong>294,000₮</strong>
                        үнийн дүнгээр шилжүүлсэн байвал доорх
                        <strong>Төлсөн болгох</strong>
                        товч дээр дарна уу
                      </div>
                    </dd>
                  </div>
                </dl>
                <dl className="space-y-3 border-t border-[#e7e3e4] pt-4 text-sm">
                  <div className="flex justify-between px-2">
                    <dt className="flex font-medium">Үнийн дүн</dt>
                    <dt className="font-medium text-[#71717b] ">289,000₮</dt>
                  </div>
                  <div className="flex justify-between px-2">
                    <dt className="flex font-medium">Хямдрал</dt>
                    <dt className="font-medium text-[#71717b]">289,000₮</dt>
                  </div>{" "}
                  <div className="flex justify-between px-2">
                    <dt className="flex font-medium">Хүргэлт</dt>
                    <dt className="font-medium text-[#71717b] ">289,000₮</dt>
                  </div>{" "}
                  <div className="flex justify-between px-2">
                    <dt className="font-semibold text-base font-gilroy">
                      Нийт төлөх үнэ
                    </dt>
                    <dt className="font-semibold text-base">289,000₮</dt>
                  </div>
                </dl>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
              <h1 className="font-gilroy font-semibold text-lg px-2">
                Тэмдэглэл үлдээх
              </h1>
              <p className="text-sm px-2 text-[#71717b] py-1">
                Бусад ажилтнуудад энэ захиалгын тухай тэмдэглэл үлдээх боломжтой
              </p>
              <div className="max-w-2xl mx-auto mt-6 w-full">
                <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
                  {/* Toolbar */}
                  <div className="flex items-center gap-3 p-2 ">
                    <Icon
                      icon="mdi:format-bold"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:format-italic"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:format-underline"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:link-variant"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:link-variant-off"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:format-list-bulleted"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:ruler"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:undo"
                      className="cursor-pointer"
                      width={20}
                    />
                    <Icon
                      icon="mdi:redo"
                      className="cursor-pointer"
                      width={20}
                    />
                  </div>

                  {/* Textarea */}
                  <textarea
                    placeholder="Энд тэмдэглэлээ бичнэ үү..."
                    className="w-full min-h-40 mt-3 resize-none bg-[#f5f4f4] rounded-lg p-3 text-sm outline-none placeholder:text-[#a1a1aa]"
                  />

                  {/* Save Button */}
                  <div className="flex justify-end mt-4">
                    <button className="inline-flex items-center gap-2 rounded-md bg-linear-to-r from-blue-500 to-indigo-400 px-4 py-2 text-white text-sm font-medium">
                      <Icon icon="uil:save" width="20" />
                      Хадгалах
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-2">
                <div className="flex flex-col gap-2 rounded-xl bg-[#f5f4f4] border border-[#f5f4f4] p-4 relative">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-green-500 rounded-full"></div>
                    <div className="flex flex-col">
                      <div className="font-semibold font-gilroy sm:text-lg line-clamp-1">
                        Ганболд Санчир
                      </div>
                      <div className="text-xs font-medium text-[#71717b] -mt-0.5 line-clamp-1">
                        info@infitech.mn
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-[#71717b]">
                    2025 оны 12-р сарын 15 16:17
                  </div>
                  <p>yaraltai yvah</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 xl:col-span-4 flex flex-col gap-6">
            <div className="rounded-xl border  border-[#e7e3e4] bg-white p-2 flex flex-col gap-4 py-4">
              <div>
                <h1 className="font-gilroy font-semibold text-lg px-2 mb-1">
                  Хэрэглэгчийн мэдээлэл
                </h1>
                <div className="flex gap-2 items-center justify-between px-2 py-1.5 hover:bg-[#f5f4f4] rounded-lg">
                  <div className="font-medium text-sm">Username</div>
                  <Icon
                    icon="lucide:copy"
                    width={16}
                    className="lucide lucide-copy cursor-pointer text-[#71717b] hover:text-black transition-all duration-200"
                  />
                </div>
                <div className="flex gap-2 items-center justify-between px-2 py-1.5 hover:bg-[#f5f4f4] rounded-lg">
                  <div className="font-medium text-sm">gmail</div>
                  <Icon
                    icon="lucide:copy"
                    width={16}
                    className="lucide lucide-copy cursor-pointer text-[#71717b] hover:text-black transition-all duration-200"
                  />
                </div>
                <div className="flex gap-2 items-center justify-between px-2 py-1.5 hover:bg-[#f5f4f4] rounded-lg">
                  <div className="font-medium text-sm">dugaar</div>
                  <Icon
                    icon="lucide:copy"
                    width={16}
                    className="lucide lucide-copy cursor-pointer text-[#71717b] hover:text-black transition-all duration-200"
                  />
                </div>
              </div>
            </div>
            <div className="rounded-xl border  border-[#e7e3e4] bg-white p-2 flex flex-col gap-4 py-4">
              <div className="px-2 flex flex-col gap-2 text-sm">
                <h1 className="font-gilroy font-semibold text-lg">
                  Хүргэлтийн төрөл
                </h1>
                <div className="inline-flex items-center justify-center font-gilroy font-semibold bg-[#dbeafe] text-[#3b82f6] text-base px-4 py-1.5 rounded-lg">
                  Хүргэлтээр
                </div>
              </div>
              <div className="px-2 flex flex-col gap-2 text-sm">
                <h1 className="font-gilroy font-semibold text-lg">
                  Хүргүүлэх хаягийн мэдээлэл
                </h1>
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Хаягийн төрөл:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Хот/аймаг:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>{" "}
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Дүүрэг/сум:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>{" "}
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Хороо/баг:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>{" "}
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Байр:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Тоот:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>
                <div className="flex gap-1 items-center">
                  <p className="font-medium text-[#71717b]">Нэмэлт мэдээлэл:</p>
                  <p className="font-medium">Орон сууц </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl border  border-[#e7e3e4] bg-white p-2 flex flex-col gap-4 py-4 mb-4">
              <div>
                <h1 className="font-gilroy font-semibold text-lg">
                  Захиалгын үйл явц
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
