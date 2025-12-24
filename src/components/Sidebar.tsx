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
  { name: "/user", icon: "tabler:users", text: "Хэрэглэгч" },
];

const systemHeader = [
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
  { name: "/admin", icon: "mingcute:user-add-line", text: "Ажилтан удирдах" },
  { name: "/branch", icon: "hugeicons:ice-cubes", text: "Салбар удирдах" },
  { name: "/aboutus", icon: "ri:error-warning-line", text: "Бидний тухай" },
];

export const SideBar = () => {
  return (
    <div
      className="w-[250px] h-[calc(100vh-16px)] bg-white px-4
      border rounded-xl border-[#EAE9ED]
      fixed top-2 left-2 hidden md:block relative"
    >
      {/* LOGO */}
      <div className="h-14 flex items-center">
        <img src="infitechLogo.png" className="w-40" />
      </div>

      {/* SCROLL ХИЙГДЭХ ХЭСЭГ */}
      <div className="overflow-y-auto h-[calc(100%-140px)] pb-6">
        {/* MAIN MENU */}
        <div className="flex flex-col">
          {primeDashboard.map((e) => (
            <NavLink
              key={e.name}
              to={e.name}
              end={e.name === "/"}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded-xl mt-1
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
                  <span className="text-[14px]">{e.text}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] mt-3 bg-[#e7e3e4]" />

        {/* SYSTEM HEADER */}
        <button className="text-xs font-medium flex h-8 text-[#0b0809]/70 px-2 mt-3">
          Дэлгүүрийн тохиргоо
        </button>

        <div className="-mt-2">
          {systemHeader.map((e) => (
            <NavLink
              key={e.name}
              to={e.name}
              className={({ isActive }) =>
                `flex items-center gap-2 px-2 py-1 rounded-xl mt-1
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
                  <span className="text-[14px]">{e.text}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>

      {/* 🔒 ХӨДӨЛГӨӨНГҮЙ ДОOД ХЭСЭГ */}
      <div
        className="absolute bottom-3 left-3 right-3 h-16
        bg-gray-100 rounded-xl flex items-center gap-3 px-3"
      >
        <div className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-xs">
          GD
        </div>
        <span className="text-sm font-medium">G.Damdinnym</span>
      </div>
    </div>
  );
};
