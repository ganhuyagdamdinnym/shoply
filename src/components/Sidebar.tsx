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
  {
    name: "/settings",
    icon: "ri:settings-line",
    text: "Дэлгүүрийн тохиргоо",
  },
  { name: "/design", icon: "lucide:paintbrush", text: "Дизайн тохиргоо" },
  {
    name: "/banner",
    icon: "ph:flag-banner-fold-light",
    text: "Баннер удирдах",
  },
  { name: "/admin", icon: "tabler:chart-circles", text: "Ажилтан удирдах" },
  { name: "/branch", icon: "tabler:chart-circles", text: "Салбар удирдах" },
  { name: "/aboutus", icon: "tabler:chart-circles", text: "Бидний тухай" },
  //{ name: "/admin", icon: "tabler:chart-circles", text: "Ажилтан удирдах" },
];
//bg-[#FBFBFB]
export const SideBar = () => {
  return (
    <div className="w-56 h-screen bg-white px-4 border rounded-xl border-[#EAE9ED] hidden md:block fixed top-2 left-2">
      {primeDashboard.map((e) => (
        <NavLink
          key={e.name}
          to={e.name}
          end={e.name === "/"}
          className={({ isActive }) =>
            `flex items-center gap-2 px-2 py-1 rounded-xl mt-2
            hover:bg-gray-100
            ${isActive ? "bg-gray-100 font-medium" : ""}`
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
