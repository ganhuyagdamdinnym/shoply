import { Icon } from "@iconify/react";
import { useState } from "react";

const Admin = () => {
  // Жишээ ажилтнуудын дата
  const [staff, setStaff] = useState([
    {
      id: 1,
      name: "Бат-Эрдэнэ",
      role: "Админ",
      email: "bat@shop.mn",
      status: "Active",
      lastSeen: "5 минутын өмнө",
    },
    {
      id: 2,
      name: "Сүхээ",
      role: "Менежер",
      email: "sukhee@shop.mn",
      status: "Active",
      lastSeen: "Өчигдөр",
    },
    {
      id: 3,
      name: "Туяа",
      role: "Касс",
      email: "tuya@shop.mn",
      status: "Inactive",
      lastSeen: "2 хоногийн өмнө",
    },
  ]);

  return (
    <div className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] min-h-screen md:max-w-8xl mx-auto w-full font-sans">
      {/* Header */}
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl sm:text-3xl">
            Ажилтан удирдах
          </h1>
          <p className="text-sm text-[#71717b]">
            Энэхүү дэлгүүрт хандах эрхтэй ажилчдын жагсаалт болон эрхийг
            тохируулах
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all shadow-sm">
          <Icon icon="lucide:user-plus" width="18" />
          Ажилтан урих
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8">
        {/* Зүүн тал: Ажилтны жагсаалт */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          <div className="bg-white border border-[#e7e3e4] rounded-2xl overflow-hidden shadow-sm">
            <div className="p-4 border-b border-[#f5f4f4] bg-gray-50/50">
              <h3 className="font-semibold text-gray-800">Бүх ажилтнууд</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-gray-500 border-b border-[#f5f4f4]">
                    <th className="p-4 font-medium">Ажилтан</th>
                    <th className="p-4 font-medium">Эрх</th>
                    <th className="p-4 font-medium">Төлөв</th>
                    <th className="p-4 font-medium"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f5f4f4]">
                  {staff.map((person) => (
                    <tr
                      key={person.id}
                      className="hover:bg-gray-50/50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {person.name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">
                              {person.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {person.email}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium text-gray-600">
                          {person.role}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-1.5">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              person.status === "Active"
                                ? "bg-green-500"
                                : "bg-gray-300"
                            }`}
                          />
                          <span className="text-xs text-gray-600">
                            {person.status === "Active"
                              ? "Идэвхтэй"
                              : "Түр зогссон"}
                          </span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <button className="p-2 hover:bg-white border border-transparent hover:border-[#e7e3e4] rounded-lg transition-all text-gray-400 hover:text-black">
                          <Icon icon="lucide:more-horizontal" width="20" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Баруун тал: Тохиргоо ба Мэдээлэл */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Хандах эрхийн тайлбар блок */}
          <div className="p-5 bg-white border border-[#e7e3e4] rounded-2xl shadow-sm">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Icon icon="lucide:shield-check" className="text-blue-500" />
              Эрхийн түвшин
            </h3>
            <div className="space-y-4">
              {[
                {
                  title: "Админ",
                  desc: "Бүх тохиргоог өөрчлөх, ажилтан нэмэх эрхтэй.",
                },
                {
                  title: "Менежер",
                  desc: "Бараа нэмэх, захиалга удирдах эрхтэй.",
                },
                {
                  title: "Касс",
                  desc: "Зөвхөн борлуулалт болон захиалга харах эрхтэй.",
                },
              ].map((role, i) => (
                <div key={i} className="group">
                  <p className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {role.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {role.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Аюулгүй байдлын зөвлөмж */}
          {/* <div className="p-5 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl text-white shadow-lg">
            <div className="flex items-start gap-3">
              <Icon icon="lucide:info" width="24" className="mt-1" />
              <div>
                <p className="font-bold text-sm">Санамж</p>
                <p className="text-xs opacity-90 mt-1 leading-relaxed">
                  Ажилтны хандах эрхийг олгохдоо зөвхөн шаардлагатай эрхүүдийг
                  нь сонгож өгөөрэй. Энэ нь таны дэлгүүрийн мэдээллийн аюулгүй
                  байдалд тустай.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Admin;
