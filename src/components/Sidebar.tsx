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

  //{ name: "/admin", icon: "tabler:chart-circles", text: "Ажилтан удирдах" },
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
//bg-[#FBFBFB]
export const SideBar = () => {
  return (
    <div className="w-[230px] h-screen bg-white px-4 border rounded-xl border-[#EAE9ED] hidden md:block fixed top-2 left-2 bottom-2">
      <div className="h-14">
        <img src="infitechLogo.png" className="w-40 fixed top-5" />
      </div>
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
                <span className={` text-[14px]`}>{e.text}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
      <div className="w-full h-[1px] mt-2 bg-[#e7e3e4]"></div>
      <button className="text-xs font-medium flex h-8 text-[#0b0809]/70 px-2 mt-4">
        Дэлгүүрийн тохиргоо
      </button>
      <div className="-mt-2">
        {systemHeader.map((e) => (
          <NavLink
            key={e.name}
            to={e.name}
            end={e.name === "/"}
            className={({ isActive }) =>
              `flex items-center gap-2 px-2 py-1 rounded-xl  mt-1
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

      {/* <div className="bg-red-400 w-full bottom-0 h-20"></div> */}
    </div>
  );
};
