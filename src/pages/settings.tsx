import { BackgroundInfo } from "../components/settingsComponents/backgroundInfo";
import { SocialAccounts } from "../components/settingsComponents/socialAccounts";

const Settings = () => {
  return (
    <div className="px-4 pt-4 pb-[80px] mt-[56px] flex flex-col gap-4 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-full md:max-w-8xl mx-auto w-full">
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
      <SocialAccounts />
    </div>
  );
};

export default Settings;
