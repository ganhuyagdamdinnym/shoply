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
      <td className="px-4 py-3 flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <span className="font-medium text-gray-900">{name}</span>
      </td>
      <td className="px-4 py-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            status === "идэвхтэй"
              ? "bg-green-100 text-green-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="px-4 py-3 font-medium">{price.toLocaleString()}₮</td>
      <td className="px-4 py-3 text-gray-500">{uldegdel}ш үлдсэн</td>
      <td className="px-4 py-3 text-gray-500">{category}</td>

      {/* Menu хэсэг */}
      <td className="px-4 py-3 text-right relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="p-1 hover:bg-gray-100 rounded-full transition-colors inline-block"
        >
          <Icon icon="tabler:dots" width="24" className="text-gray-500" />
        </button>

        {showMenu && (
          <div
            ref={menuRef}
            className="absolute right-4 top-12 w-44 bg-white rounded-lg shadow-2xl border border-gray-100 z-50 py-1"
          >
            <MenuButton
              icon="lucide:copy"
              text="Хуулбарлах"
              onClick={() => setShowMenu(false)}
            />
            <MenuButton
              icon="lucide:play"
              text="Идэвхтэй болгох"
              onClick={() => setShowMenu(false)}
            />
            <MenuButton
              icon="lucide:archive"
              text="Архивлах"
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

// Туслах жижиг компонент (Кодоо цэвэрхэн болгох үүднээс)
const MenuButton = ({ icon, text, onClick, variant = "default" }: any) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition-colors ${
      variant === "danger"
        ? "text-red-600 hover:bg-red-50"
        : "text-gray-700 hover:bg-gray-50"
    }`}
  >
    <Icon icon={icon} width="18" />
    {text}
  </button>
);
