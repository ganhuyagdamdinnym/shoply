import { useState } from "react";
//import { EditSocialModal } from "./EditSocialModal"; // Тусдаа файл эсвэл доорх кодыг ашиглана
import { EditSocialModal } from "./EditSocialModal";
export const SocialAccounts = () => {
  const [socialPlatforms, setSocialPlatforms] = useState([
    { id: "fb", name: "Facebook", link: "---" },
    { id: "ig", name: "Instagram", link: "---" },
    { id: "tw", name: "Twitter (X)", link: "---" },
    { id: "yt", name: "Youtube", link: "---" },
  ]);

  // Засаж буй платформыг хадгалах state
  const [editingPlatform, setEditingPlatform] = useState<
    null | (typeof socialPlatforms)[0]
  >(null);

  return (
    <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white mb-4">
      <h1 className="font-gilroy text-xl font-semibold">Сошиал хаягууд</h1>
      <p className="text-sm text-[#71717b] mt-1">
        Дэлгүүрийн сошиал хаягууд тохируулах
      </p>

      <div className="mt-4 border-t border-[#f5f4f4]">
        <dl className="divide-y divide-[#f5f4f4]">
          {socialPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0"
            >
              <dt className="text-sm font-medium flex items-center">
                {platform.name}
              </dt>
              <dd className="mt-1 flex text-sm sm:col-span-2 sm:mt-0 items-center justify-between">
                <span className="text-[#71717b] truncate mr-4">
                  {platform.link}
                </span>
                <button
                  onClick={() => setEditingPlatform(platform)}
                  className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md hover:bg-[#1b1718]/20 transition-colors"
                >
                  Засах
                </button>
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Засах модал */}
      {editingPlatform && (
        <EditSocialModal
          platform={editingPlatform}
          onClose={() => setEditingPlatform(null)}
        />
      )}
    </div>
  );
};
