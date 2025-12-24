// import { Icon } from "@iconify/react";
// const Banner = () => {
//   return (
//     <div className="w-screen h-screen p-4 flex flex-col gap-4 bg-[#f5f4f4]">
//       <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
//         <div className="flex flex-col gap-1">
//           <p className="font-semibold text-2xl sm:text-3xl">Баннер удирдах</p>
//           <p className="text-sm text-[#71717b]">
//             Дэлгүүр дээр харагдах баннерууд удирдах
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
import { Icon } from "@iconify/react";
const Banner = () => {
  return (
    <div className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center ">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-2xl sm:text-3xl">Баннер удирдах</p>
          <p className="text-sm text-[#71717b]">
            Дэлгүүр дээр харагдах баннерууд удирдах
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="max-w-2xl mx-auto flex flex-col gap-8">
          <div className="p-4 flex flex-col bg-white border border-[#e7e3e4] rounded-xl">
            <div className="text-lg font-semibold font-gilroy ">
              Нүүр баннерууд
            </div>

            <div className="flex justify-center py-8">
              <p className="text-sm text-[#71717b] text-center">
                Баннер байхгүй байна. Баннер нэмэх товчийг ашиглан баннер нэмнэ
                үү.
              </p>
            </div>
            <div className="flex items-center justify-end mt-4 gap-2">
              <button className="text-white inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-blue-500 to-indigo-400  h-10 px-4 py-2  ">
                <Icon icon="gravity-ui:copy-picture" width="24" color="white" />
                Баннер нэмэх
              </button>
            </div>
          </div>
          <div className="p-4 flex flex-col bg-white border border-[#e7e3e4] rounded-xl">
            <div className="text-lg font-semibold font-gilroy flex items-center gap-2">
              Толгой баннер текст
            </div>
            <div className="h-[200px] w-full bg-[#f5f4f4] border border-[#f5f4f4] rounded-xl flex flex-col gap-2 items-center justify-center mt-4 px-2">
              <Icon icon="lucide:lock" width="40" color="#71717b" />
              <div className="text-sm font-medium text-[#71717b] text-center">
                Багцаа ахиулаад дэлгүүрийн толгой баннер тохируулах боломжтой
              </div>
              <div className="inline-flex items-center cursor-pointer text-sm justify-center gap-2 whitespace-nowrap cursor-pointer rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent text-accent-foreground h-10 px-4 py-2  ">
                <Icon icon="lucide:crown" width={20} />
                Багцаа ахиулах
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
