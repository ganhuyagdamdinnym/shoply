import { Icon } from "@iconify/react";
import { useState } from "react";
import { Link } from "react-router-dom";
type Props = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MobileHeader = (props: Props) => {
  const { setOpen } = props;
  const [isClickProfileButton, setIsClickProfileButton] =
    useState<boolean>(false);

  return (
    <div className="md:hidden fixed top-0 left-0 w-full h-14 z-40 bg-white/50 border-b border-[#e7e3e4] backdrop-blur-lg px-2 flex items-center justify-between">
      <button
        onClick={() => setOpen(true)}
        className="border border-[#e7e3e4] h-10 w-10 rounded-xl flex items-center justify-center"
      >
        <Icon icon="quill:hamburger" width={20} />
      </button>
      <img src="infitechLogo.png" className="w-30" alt="logo" />
      <div
        onClick={() => setIsClickProfileButton(true)}
        className="w-10 h-10 rounded-full bg-green-950"
      ></div>
      {isClickProfileButton == true ? (
        <div
          onClick={() => setIsClickProfileButton(false)}
          className="absolute h-screen w-screen inset-0"
        >
          <div
            className="absolute top-12  right-3
          bg-white shadow-2xl border border-gray-300
             rounded-xl flex flex-col px-3 py-2 w-44"
          >
            <Link to="/account">
              <div className="flex  items-center gap-2 w-full hover:bg-gray-100 py-1 rounded-xl px-1">
                <Icon icon="solar:user-linear" width={16} />
                <p className="text-black text-[14px]">Миний бүртгэл</p>
              </div>
            </Link>
            <div className="flex  items-center gap-2 w-full hover:bg-gray-100 py-1 rounded-xl px-1 text-red-500">
              <Icon icon="mingcute:exit-line" width={16} />
              <p className=" text-[14px]">Гарах</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
