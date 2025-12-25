import { Icon } from "@iconify/react";
import { useState, useRef, useEffect } from "react";

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

  // Modal & Edit states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeParentId, setActiveParentId] = useState<string | null>(null);
  const [editTarget, setEditTarget] = useState<ICategory | null>(null);

  // Нэмэх эсвэл Засах үйлдлийг нэгтгэсэн функц
  const handleSave = () => {
    if (!inputValue.trim()) return;

    if (editTarget) {
      // --- ЗАСАХ ЛОГИК ---
      const updateName = (list: ICategory[]): ICategory[] =>
        list.map((c) =>
          c.id === editTarget.id
            ? { ...c, name: inputValue }
            : { ...c, children: updateName(c.children) }
        );
      setCategories(updateName(categories));
    } else {
      // --- НЭМЭХ ЛОГИК ---
      const newCat: ICategory = {
        id: Math.random().toString(36).substr(2, 9),
        name: inputValue,
        children: [],
      };
      if (activeParentId === null) {
        setCategories([...categories, newCat]);
      } else {
        const addChild = (list: ICategory[]): ICategory[] =>
          list.map((c) =>
            c.id === activeParentId
              ? { ...c, children: [...c.children, newCat] }
              : { ...c, children: addChild(c.children) }
          );
        setCategories(addChild(categories));
      }
    }
    closeModal();
  };

  // Устгах функц
  const handleDelete = (id: string) => {
    if (confirm("Та энэ ангиллыг устгахдаа итгэлтэй байна уу?")) {
      const removeNode = (list: ICategory[]): ICategory[] =>
        list
          .filter((c) => c.id !== id)
          .map((c) => ({ ...c, children: removeNode(c.children) }));
      setCategories(removeNode(categories));
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setInputValue("");
    setActiveParentId(null);
    setEditTarget(null);
  };

  const openEditModal = (cat: ICategory) => {
    setEditTarget(cat);
    setInputValue(cat.name);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f5f4f4] p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1b1718]">
            Бүтээгдэхүүний ангилал
          </h1>
          <p className="text-gray-500">Нийт бараа бүтээгдэхүүнүүдийн ангилал</p>
        </div>

        <div className="space-y-4">
          {categories.map((cat) => (
            <CategoryItem
              key={cat.id}
              category={cat}
              level={0}
              onAdd={(id: any) => {
                setActiveParentId(id);
                setIsModalOpen(true);
              }}
              onEdit={openEditModal}
              onDelete={handleDelete}
            />
          ))}
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="w-full mt-6 py-4 bg-[#5c7cfa] hover:bg-[#4c6ef5] text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-all shadow-lg"
        >
          <Icon icon="gridicons:add-outline" width={24} /> Ангилал нэмэх
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white p-6 rounded-2xl w-full max-w-sm shadow-2xl">
            <div className="flex justify-between items-center mb-1">
              <h3 className="text-xl font-bold">
                {editTarget ? "Ангилал засах" : "Ангилал нэмэх"}
              </h3>
              <button onClick={closeModal}>
                <Icon icon="iconamoon:close" width={24} />
              </button>
            </div>
            <p className="text-sm text-gray-500 mb-6">
              Ангилалын мэдээллийг {editTarget ? "засах" : "оруулах"}
            </p>

            <label className="text-sm font-semibold mb-2 block">
              Ангилалын нэр <span className="text-blue-500">*</span>
            </label>
            <input
              autoFocus
              className="w-full border-2 border-blue-500 rounded-xl px-4 py-3 outline-none"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSave()}
            />

            <div className="flex justify-end gap-3 mt-8">
              <button
                onClick={closeModal}
                className="px-6 py-2.5 bg-gray-100 rounded-xl font-semibold"
              >
                Цуцлах
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-[#5c7cfa] text-white rounded-xl font-semibold"
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

// --- Item Component with Dropdown ---

const CategoryItem = ({ category, level, onAdd, onEdit, onDelete }: any) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Гадна дарахад цэс хаах
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (menuRef.current && !menuRef.current.contains(e.target))
        setShowMenu(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div style={{ paddingLeft: `${level * 40}px` }}>
      <div className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-xl shadow-sm mb-4 relative">
        <div className="flex items-center gap-4">
          <Icon
            icon="ph:dots-six-vertical-bold"
            className="text-gray-300"
            width={20}
          />
          <span className="font-medium text-gray-800">{category.name}</span>
        </div>

        <div className="flex items-center gap-2">
          {level < 2 && ( // Жишээ нь 3-р түвшнээс цааш нэмэхгүй бол
            <button
              onClick={() => onAdd(category.id)}
              className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full"
            >
              <Icon icon="gridicons:add-outline" width={22} />
            </button>
          )}

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-1.5 text-gray-400 hover:bg-gray-50 rounded-full"
            >
              <Icon icon="bi:three-dots" width={20} />
            </button>

            {/* Зураг дээрх шиг Dropdown цэс */}
            {showMenu && (
              <div className="absolute right-0 top-10 w-32 bg-white rounded-xl shadow-xl border border-gray-100 z-10 py-1 overflow-hidden">
                <button
                  onClick={() => {
                    onEdit(category);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
                >
                  <Icon icon="akar-icons:edit" /> Засах
                </button>
                <button
                  onClick={() => {
                    onDelete(category.id);
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  <Icon icon="mi:delete" /> Устгах
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {category.children.map((child: any) => (
        <CategoryItem
          key={child.id}
          category={child}
          level={level + 1}
          onAdd={onAdd}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
