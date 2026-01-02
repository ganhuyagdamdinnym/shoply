import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
export const FastAction = () => {
  return (
    <div className="p-3 sm:p-4 bg-white border border-[#e7e3e4] rounded-xl">
      <div className="mb-4">
        <h1 className="font-gilroy font-semibold text-lg">Түргэн үйлдлүүд</h1>
        <p className="text-xs font-medium text-[#71717b] -mt-0.5">
          Түгээмэл хэрэглэгддэг үйлдлүүд
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
        <Link to="/product/create">
          <div className="bg-[#16a34a]/10 cursor-pointer border-[#16a34a]/20 border rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <Icon
              icon="ic:round-plus"
              width={28}
              color="#16a34a"
              className="-ml-1"
            />

            <div>
              <div className="font-semibold text-sm">Бараа нэмэх</div>
              <div className="text-xs font-medium text-[#71717b] -mt-0.5">
                Шинэ бараа нэмэх
              </div>
            </div>
          </div>
        </Link>
        <Link to="/order">
          <div className="bg-[#3b82f6]/10 cursor-pointer border-[#3b82f6]/20 border rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <Icon
              icon="simple-line-icons:basket"
              width={28}
              color="#3b82f6"
              className="-ml-1"
            />

            <div>
              <div className="font-semibold text-sm">Захиалгууд</div>
              <div className="text-xs font-medium text-[#71717b] -mt-0.5">
                Захиалга удирдах
              </div>
            </div>
          </div>
        </Link>
        <Link to="/product">
          <div className="bg-[#7c3aed]/10 cursor-pointer border-[#7c3aed]/20 border rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <Icon
              icon="fluent:box-32-regular"
              width={28}
              color="#7c3aed"
              className="-ml-1"
            />

            <div>
              <div className="font-semibold text-sm">Бараанууд</div>
              <div className="text-xs font-medium text-[#71717b] -mt-0.5">
                Барааны жагсаалт
              </div>
            </div>
          </div>
        </Link>
        <Link to="/users">
          <div className="bg-[#e11d48]/10 cursor-pointer border-[#e11d48]/20 border rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <Icon
              icon="tabler:users"
              width={28}
              color="#e11d48"
              className="-ml-1"
            />

            <div>
              <div className="font-semibold text-sm">Хэрэглэгчид</div>
              <div className="text-xs font-medium text-[#71717b] -mt-0.5">
                Хэрэглэгчийн мэдээлэл
              </div>
            </div>
          </div>
        </Link>
        <Link to="/brand">
          <div className="bg-[#d97706]/10 cursor-pointer border-[#d97706]/20 border rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <Icon
              icon="ic:round-plus"
              width={28}
              color="#d97706"
              className="-ml-1"
            />

            <div>
              <div className="font-semibold text-sm">Брэнд</div>
              <div className="text-xs font-medium text-[#71717b] -mt-0.5">
                Брэндүүдийн жагсаалт
              </div>
            </div>
          </div>
        </Link>
        <Link to="settings">
          <div className="bg-[#f5f4f4]/50 cursor-pointer border-[#e7e3e4] border rounded-xl p-3 sm:p-4 flex flex-col gap-2 hover:scale-[1.02] transition-transform">
            <Icon
              icon="ic:round-plus"
              width={28}
              color="#16a34a"
              className="-ml-1"
            />

            <div>
              <div className="font-semibold text-sm">Тохиргоо</div>
              <div className="text-xs font-medium text-[#71717b] -mt-0.5">
                Дэлгүүрийн тохиргоо
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
