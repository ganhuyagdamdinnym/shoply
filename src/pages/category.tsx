import { Icon } from "@iconify/react";
import { useState } from "react";

// Өгөгдлийн төрөл
interface ICategory {
  id: string;
  name: string;
  children: ICategory[];
}

const CategoryPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([
    {
      id: "1",
      name: "Гутал",
      children: [
        {
          id: "1-1",
          name: "Пүүз",
          children: [{ id: "1-1-1", name: "test", children: [] }],
        },
      ],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeParentId, setActiveParentId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  // Шинэ ангилал нэмэх функц
  const handleAddCategory = () => {
    if (!inputValue.trim()) return;

    const newCat: ICategory = {
      id: Math.random().toString(36).substr(2, 9),
      name: inputValue,
      children: [],
    };

    if (activeParentId === null) {
      // Үндсэн ангилал нэмэх
      setCategories([...categories, newCat]);
    } else {
      // Дэд ангилал нэмэх (Recursive хайлт)
      const updateTree = (list: ICategory[]): ICategory[] =>
        list.map((c) =>
          c.id === activeParentId
            ? { ...c, children: [...c.children, newCat] }
            : { ...c, children: updateTree(c.children) }
        );
      setCategories(updateTree(categories));
    }

    setInputValue("");
    setIsModalOpen(false);
    setActiveParentId(null);
  };

  return (
    <div className="min-h-screen bg-[#f5f4f4] p-4 md:p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Толгой хэсэг */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1b1718]">
            Бүтээгдэхүүний ангилал
          </h1>
          <p className="text-gray-500 text-sm md:text-base">
            Нийт бараа бүтээгдэхүүнүүдийн ангилал
          </p>
        </div>

        {/* Ангилалын жагсаалт */}
        <div className="space-y-4">
          {categories.map((cat) => (
            <CategoryItem
              key={cat.id}
              category={cat}
              level={0}
              onAdd={(id) => {
                setActiveParentId(id);
                setIsModalOpen(true);
              }}
            />
          ))}
        </div>

        {/* Үндсэн ангилал нэмэх товч */}
        <button
          onClick={() => {
            setActiveParentId(null);
            setIsModalOpen(true);
          }}
          className="w-full mt-6 py-4 bg-[#5c7cfa] hover:bg-[#4c6ef5] text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all shadow-lg shadow-blue-200/50 active:scale-[0.98]"
        >
          <Icon icon="gridicons:add-outline" width={24} />
          Ангилал нэмэх
        </button>
      </div>

      {/* Нэмэх Модал */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <h3 className="text-lg font-bold mb-1 text-gray-800">
              {activeParentId ? "Дэд ангилал нэмэх" : "Үндсэн ангилал нэмэх"}
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Ангилалын нэр оруулна уу
            </p>

            <input
              autoFocus
              className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Жишээ: Өвлийн гутал"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAddCategory()}
            />

            <div className="flex justify-end gap-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-5 py-2.5 text-gray-500 font-medium hover:bg-gray-50 rounded-lg transition-colors"
              >
                Цуцлах
              </button>
              <button
                onClick={handleAddCategory}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md shadow-blue-100"
              >
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Дэд Компонент (Recursive Item) ---

const CategoryItem = ({
  category,
  level,
  onAdd,
}: {
  category: ICategory;
  level: number;
  onAdd: (id: string) => void;
}) => {
  return (
    <div
      className="w-full transition-all duration-300"
      style={{
        paddingLeft: level > 0 ? `${Math.min(level * 32, 100)}px` : "0px",
      }}
    >
      <div className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
        <div className="flex items-center gap-4">
          {/* Чирэх дүрсний оронд жагсаалтын цэг эсвэл зүгээр хоосон зай */}
          <div className="text-gray-300 group-hover:text-gray-400">
            <Icon icon="ph:dots-six-vertical-bold" width={20} />
          </div>
          <span className="text-[16px] font-medium text-gray-800 tracking-tight">
            {category.name}
          </span>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => onAdd(category.id)}
            className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
            title="Дэд ангилал нэмэх"
          >
            <Icon icon="gridicons:add-outline" width={22} />
          </button>
          <button className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-colors">
            <Icon icon="bi:three-dots" width={20} />
          </button>
        </div>
      </div>

      {/* Дэд ангилалууд байвал өөрийгөө дахин дуудна */}
      {category.children.length > 0 && (
        <div className="mt-4 space-y-4">
          {category.children.map((child) => (
            <CategoryItem
              key={child.id}
              category={child}
              level={level + 1}
              onAdd={onAdd}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
