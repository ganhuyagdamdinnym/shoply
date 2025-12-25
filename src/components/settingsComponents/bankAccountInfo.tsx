export const BankAccountInfo = () => {
  return (
    <div className="p-4 pb-0 bg-white rounded-2xl border border-[#e7e3e4]">
      <h1 className="font-gilroy text-xl font-semibold">Дансны мэдээлэл</h1>
      <p className="text-sm text-[#71717b] mt-1">
        Төлбөр хүлээн авах дансаа тохируулах
      </p>
      <div className="mt-4 border-t border-[#f5f4f4]">
        <dl className="divide-y divide-[#f5f4f4]">
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">Банк</dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>Голомт банк</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              Дансны дугаар
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>5002320181</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              IBAN дугаар
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>MN970032005002320181</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 px-0">
            <dt className="text-sm/6 font-medium flex items-center">
              Данс эзэмшигчийн нэр
            </dt>
            <dd className="mt-1 flex text-sm/6 sm:col-span-2 sm:mt-0 items-center justify-between">
              <span>Санчир Ганболд</span>
              <span>
                <button className="bg-[#1b1718]/10 h-10 px-4 py-2 inline-flex items-center cursor-pointer text-sm justify-center rounded-md">
                  Засах
                </button>
              </span>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
