import { BackgroundInfo } from "../components/settingsComponents/backgroundInfo";

const Settings = () => {
  return (
    <div className="w-screen h-screen p-4 flex flex-col gap-4 bg-[#f5f4f4]">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">
            Дэлгүүрийн тохиргоо
          </p>
          <p className="text-sm text-[#71717b]">
            Дэлгүүрийн ерөнхий мэдээллийн тохиргоо
          </p>
        </div>
      </div>
      <BackgroundInfo />
    </div>
  );
};

export default Settings;
