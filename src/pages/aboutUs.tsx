import { Icon } from "@iconify/react";

const AboutUs = () => {
  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 h-screen bg-[#f5f4f4] mx-auto w-full">
      <div className="flex flex-col items-center justify-center p-4">
        {/* Title */}
        <div className="flex flex-col gap-1 items-center text-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Бидний тухай хуудас
          </h1>
          <p className="text-[#71717b] text-sm">
            Дэлгүүр дээр харагдах бидний тухай хуудас
          </p>
        </div>

        {/* Editor Card */}
        <div className="max-w-2xl mx-auto mt-6 w-full">
          <div className="p-4 rounded-xl border border-[#e7e3e4] bg-white">
            {/* Toolbar */}
            <div className="flex items-center gap-3 p-2 ">
              <Icon
                icon="mdi:format-bold"
                className="cursor-pointer"
                width={20}
              />
              <Icon
                icon="mdi:format-italic"
                className="cursor-pointer"
                width={20}
              />
              <Icon
                icon="mdi:format-underline"
                className="cursor-pointer"
                width={20}
              />
              <Icon
                icon="mdi:link-variant"
                className="cursor-pointer"
                width={20}
              />
              <Icon
                icon="mdi:link-variant-off"
                className="cursor-pointer"
                width={20}
              />
              <Icon
                icon="mdi:format-list-bulleted"
                className="cursor-pointer"
                width={20}
              />
              <Icon icon="mdi:ruler" className="cursor-pointer" width={20} />
              <Icon icon="mdi:undo" className="cursor-pointer" width={20} />
              <Icon icon="mdi:redo" className="cursor-pointer" width={20} />
            </div>

            {/* Textarea */}
            <textarea
              placeholder="Энд хуудас дээрх контентоо бичнэ үү..."
              className="w-full min-h-40 mt-3 resize-none bg-[#f5f4f4] rounded-lg p-3 text-sm outline-none placeholder:text-[#a1a1aa]"
            />

            {/* Save Button */}
            <div className="flex justify-end mt-4">
              <button className="inline-flex items-center gap-2 rounded-md bg-linear-to-r from-blue-500 to-indigo-400 px-4 py-2 text-white text-sm font-medium">
                <Icon icon="uil:save" width="20" />
                Хадгалах
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
