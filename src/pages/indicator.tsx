import { Attribute } from "../components/attribute";
const Indicator = () => {
  return (
    <div className="px-4 pt-4 pb-20 md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] min-h-screen md:max-w-8xl mx-auto w-full">
      {/* Header */}
      <div className="w-full flex flex-col gap-1 mb-6">
        <h1 className="font-semibold text-2xl sm:text-3xl text-gray-900">
          Үзүүлэлтүүд удирдах
        </h1>
        <p className="text-sm text-[#71717b]">
          Бүтээгдэхүүнүүдийн үзүүлэлтүүд засварлах болон шинээр нэмэх
        </p>
      </div>

      <Attribute />
    </div>
  );
};

export default Indicator;
