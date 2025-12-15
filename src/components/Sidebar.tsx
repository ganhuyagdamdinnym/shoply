import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
const primeDashboard = [
  { name: "/", icon: "proicons:home", text: "Самбар" },
  {
    name: "order",
    icon: "material-symbols-light:border-all-outline-rounded",
    text: "Захиалга",
  },
  { name: "product", icon: "fluent-mdl2:product", text: "Бүтээгдэхүүн" },
  { name: "category", icon: "quill:sort", text: "Ангилал" },
  { name: "brand", icon: "tabler:chart-circles", text: "Брэнд" },
];
export const SideBar = () => {
  const [currentStatus, setCurrentStatus] = useState<string>("dashboard");
  const handleDashborad = (name: string) => {
    setCurrentStatus(name);
  };

  return (
    <div className="w-56 h-screen bg-[#FBFBFB] px-4 border-r-1 border-[#EAE9ED] hidden md:block">
      {primeDashboard.map((e) => (
        <Link to={`${e.name}`}>
          <div
            onClick={() => handleDashborad(e.name)}
            className={`flex items-center gap-1 px-2 py-1 hover:bg-gray-200 rounded-xl mt-1 ${
              e.name == currentStatus ? "bg-gray-200" : null
            }`}
          >
            <Icon icon={`${e.icon}`} width="16" />
            <button className="w-full flex bg-sidebar  text-[14px]">
              {e.text}
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};
