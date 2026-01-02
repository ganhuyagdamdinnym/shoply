import { Icon } from "@iconify/react";
import "../App.css";

function Users() {
  // Жишээ дата: Хэрэглэгчийн мэдээлэлд тохируулж өөрчлөв
  const users: any = [
    {
      userId: "U001",
      name: "Daimaa",
      email: "daimaa@example.com",
      phoneNumber: "86321240",
      status: "идэвхтэй",
      totalOrders: 12,
      totalSpent: 120000,
      joinedDate: "2024.11.15",
    },
    {
      userId: "U002",
      name: "Boldoo",
      email: "boldoo@example.com",
      phoneNumber: "99112233",
      status: "түдгэлзүүлсэн",
      totalOrders: 2,
      totalSpent: 25000,
      joinedDate: "2025.01.10",
    },
  ];

  return (
    <div className="pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] min-h-screen md:max-w-8xl mx-auto w-full font-sans">
      {/* Header */}
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-col gap-1">
          <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900">
            Хэрэглэгчид
          </h1>
          <p className="text-sm text-[#71717b]">
            Бүх хэрэглэгчдийн дэлгэрэнгүй мэдээлэл болон бүртгэл
          </p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-800 transition-all">
          <Icon icon="lucide:user-plus" width="18" />
          Хэрэглэгч нэмэх
        </button>
      </div>

      {/* Search & Filter */}
      <div className="w-full flex items-center justify-between mt-6">
        <div className="relative w-full max-w-90">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Icon icon="lucide:search" width="18" />
          </div>
          <input
            type="text"
            placeholder="Нэр, имэйл, утсаар хайх..."
            className="h-10 pl-10 pr-4 w-full rounded-xl bg-white text-sm border border-[#e7e3e4] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all shadow-sm"
          />
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-white border border-[#e7e3e4] px-3 py-2 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50">
            <Icon icon="lucide:filter" width="16" />
            Шүүлтүүр
          </button>
        </div>
      </div>

      {/* Table Section */}
      {!users || users.length === 0 ? (
        <div className="w-full mt-6 rounded-2xl border border-[#e7e3e4] bg-white">
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-50 p-4 rounded-full mb-4">
              <Icon icon="lucide:users" width="40" className="text-gray-300" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Хэрэглэгч олдсонгүй
            </h3>
            <p className="text-[#71717b] text-sm mt-1">
              Одоогоор бүртгэлтэй хэрэглэгч байхгүй байна.
            </p>
          </div>
        </div>
      ) : (
        <div className="w-full mt-6 rounded-2xl border border-[#e7e3e4] overflow-hidden bg-white shadow-sm">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50/50 border-b border-[#e7e3e4]">
                  <th className="p-4 w-12">
                    <input
                      type="checkbox"
                      className="rounded-md border-gray-300 accent-black"
                    />
                  </th>
                  <th className="py-4 px-3 text-left font-semibold text-gray-600">
                    Хэрэглэгч
                  </th>
                  <th className="py-4 px-3 text-left font-semibold text-gray-600">
                    Төлөв
                  </th>
                  <th className="py-4 px-3 text-left font-semibold text-gray-600">
                    <div className="flex items-center gap-1">
                      Захиалга{" "}
                      <Icon icon="lucide:chevrons-up-down" width="14" />
                    </div>
                  </th>
                  <th className="py-4 px-3 text-left font-semibold text-gray-600">
                    Нийт зарцуулалт
                  </th>
                  <th className="py-4 px-3 text-left font-semibold text-gray-600">
                    Бүртгүүлсэн
                  </th>
                  <th className="py-4 px-3 w-16"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e7e3e4]">
                {users.map((user: any, index: number) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50/50 transition-colors group"
                  >
                    <td className="p-4">
                      <input
                        type="checkbox"
                        className="rounded-md border-gray-300 accent-black"
                      />
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
                          {user.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-gray-900">
                            {user.name}
                          </span>
                          <span className="text-gray-500 text-xs">
                            {user.email}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-lg font-medium text-[14px] ${
                          user.status === "идэвхтэй"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-3 py-4 font-medium text-gray-700">
                      {user.totalOrders} удаа
                    </td>
                    <td className="px-3 py-4 font-bold text-gray-900 text-base">
                      {user.totalSpent.toLocaleString()}₮
                    </td>
                    <td className="px-3 py-4 text-gray-500 font-medium">
                      {user.joinedDate}
                    </td>
                    <td className="px-3 py-4 text-right">
                      <div className="flex items-center gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-[#e7e3e4] shadow-sm transition-all text-gray-500 hover:text-black">
                          <Icon icon="lucide:edit-3" width="18" />
                        </button>
                        <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-[#e7e3e4] shadow-sm transition-all text-gray-500 hover:text-red-600">
                          <Icon icon="lucide:trash-2" width="18" />
                        </button>
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
  );
}

export default Users;
