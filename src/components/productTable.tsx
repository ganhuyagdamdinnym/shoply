import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

type Props = {
  name: string;
  image: string;
  price: number;
  status: string;
  uldegdel: number;
  category: string;
};

export const ProductTable = (props: Props) => {
  const { name, price, status, uldegdel, category, image } = props;
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Цэснээс гадна дарахад хаах функц
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMenu]);

  return (
    <tr className="border-b border-[#e7e3e4] hover:bg-gray-50 transition-colors">
      <td className="px-4 py-3">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-medium text-gray-900">{name}</span>
        </div>
      </td>
      <td className="px-4 py-3">
        <span
          className={`px-3 py-1 rounded-md text-xs font-medium ${
            status === "идэвхтэй"
              ? "bg-[#eefdf5] text-[#22c55e]"
              : "bg-[#fff7ed] text-[#f59e0b]"
          }`}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </span>
      </td>
      <td className="px-4 py-3 font-medium text-gray-700">
        {price.toLocaleString()}₮
      </td>
      <td className="px-4 py-3 text-gray-600">{uldegdel}ш үлдсэн</td>
      <td className="px-4 py-3 text-gray-600">
        <div className="flex flex-col">
          <span>{category}</span>
          <span className="text-[10px] text-gray-400">+1 өөр ангилал</span>
        </div>
      </td>

      {/* Menu хэсэг */}
      <td className="px-4 py-3 text-right relative">
        <div className="flex justify-end items-center gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
            <Icon icon="lucide:eye" width="18" className="text-gray-500" />
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-1 hover:bg-gray-100 rounded-md transition-colors"
          >
            <Icon icon="tabler:dots" width="22" className="text-gray-600" />
          </button>
        </div>

        {showMenu && (
          <div
            ref={menuRef}
            className="absolute right-4 top-12 w-48 bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)] border border-gray-100 z-50 py-1.5"
          >
            <MenuButton
              icon="lucide:copy"
              text="Хуулбарлах"
              onClick={() => setShowMenu(false)}
            />
            <MenuButton
              icon="lucide:check-circle"
              text="Идэвхтэй болгох"
              onClick={() => setShowMenu(false)}
            />
            <MenuButton
              icon="lucide:archive"
              text="Архивлах"
              onClick={() => setShowMenu(false)}
            />
            <MenuButton
              icon="famicons:trash-bin-outline"
              text="Ноороглох"
              onClick={() => setShowMenu(false)}
            />
            <div className="h-[1px] bg-gray-100 my-1" />
            <MenuButton
              icon="mi:delete"
              text="Устгах"
              onClick={() => setShowMenu(false)}
              variant="danger"
            />
          </div>
        )}
      </td>
    </tr>
  );
};

// MenuButton компонент
const MenuButton = ({ icon, text, onClick, variant = "default" }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-2 text-[14px] transition-colors ${
      variant === "danger"
        ? "text-[#ef4444] hover:bg-red-50"
        : "text-gray-700 hover:bg-gray-50"
    }`}
  >
    <Icon
      icon={icon}
      width="18"
      className={variant === "danger" ? "text-red-500" : "text-gray-500"}
    />
    <span className="font-medium">{text}</span>
  </button>
);
