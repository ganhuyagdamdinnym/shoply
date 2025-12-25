const OrderDetails = () => {
  return (
    <main className="px-4 pt-4 pb-[80px] md:mt-0 md:px-6 md:py-6 bg-[#f5f4f4] h-screen md:max-w-8xl mx-auto w-full">
      <div>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-x-2 gap-y-4">
          <div className="flex flex-col">
            <div className="text-2xl sm:text-3xl font-semibold font-gilroy line-clamp-1 break-all flex items-center gap-x-4">
              <div className="text-[#71717b]">#SH25570573</div>
              <div className="inline-flex items-center justify-center font-gilroy font-semibold text-[#b91c1c] text-danger text-sm px-3 py-1 rounded-sm">
                Цуцлагдсан
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
