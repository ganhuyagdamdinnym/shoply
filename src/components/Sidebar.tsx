import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const primeDashboard = [
  { name: "/", icon: "proicons:home", text: "Самбар" },
  {
    name: "/order",
    icon: "material-symbols-light:border-all-outline-rounded",
    text: "Захиалга",
  },
  { name: "/product", icon: "fluent-mdl2:product", text: "Бүтээгдэхүүн" },
  { name: "/category", icon: "quill:sort", text: "Ангилал" },
  { name: "/brand", icon: "tabler:chart-circles", text: "Брэнд" },
];

export const SideBar = () => {
  return (
    <div className="w-48 h-screen bg-[#FBFBFB] px-4 border-r border-[#EAE9ED] hidden md:block fixed top-0 left-0">
      {primeDashboard.map((e) => (
        <NavLink
          key={e.name}
          to={e.name}
          end={e.name === "/"}
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-2 rounded-xl mt-1
            hover:bg-gray-200
            ${isActive ? "bg-gray-200 font-medium" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <Icon
                icon={e.icon}
                width="16"
                className={isActive ? "text-blue-500" : "text-gray-600"}
              />
              <span className={` text-[14px]`}>{e.text}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};
