import { Icon } from "@iconify/react";

const Login = () => {
  return (
    <div className="w-full h-screen flex bg-white font-sans">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 relative">
        <div className="w-full max-w-100">
          <h1 className="text-[28px] font-bold text-center mb-8 text-[#111827]">
            Системд нэвтрэх
          </h1>

          {/* PHONE / EMAIL */}
          <div className="mb-5">
            <label className="block text-[13px] font-semibold text-gray-700 mb-2">
              Утасны дугаар / Имэйл <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="80444040"
              className="w-full h-[52px] px-4 rounded-xl bg-[#eff4ff] border-none text-[#111827] focus:ring-2 focus:ring-blue-400 outline-none transition-all"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <label className="text-[13px] font-semibold text-gray-700">
                Нууц үг <span className="text-blue-500">*</span>
              </label>
              <button className="text-[12px] text-gray-400 hover:text-blue-600 transition-colors">
                Нууц үгээ мартсан уу?
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                defaultValue="**********"
                className="w-full h-[52px] px-4 rounded-xl bg-[#eff4ff] border-none text-[#111827] focus:ring-2 focus:ring-blue-400 outline-none transition-all"
              />
            </div>
          </div>

          {/* LOGIN BUTTON */}
          <button className="w-full h-13 rounded-xl bg-linear-to-r from-[#3b82f6] to-[#818cf8] text-white font-bold text-base flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-blue-100">
            <Icon icon="lucide:scan-face" width="22" />
            Нэвтрэх
          </button>

          {/* REGISTER */}
          <div className="mt-6 h-12 flex items-center justify-center bg-[#f3f4f6] rounded-xl text-[14px] text-gray-500">
            Шинэ хэрэглэгч үү?{" "}
            <span className="text-blue-600 font-bold ml-2 cursor-pointer hover:underline">
              Бүртгэл үүсгэх
            </span>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center my-8">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="px-4 text-[13px] text-gray-300 font-medium">
              Эсвэл
            </span>
            <div className="flex-1 h-[1px] bg-gray-100" />
          </div>

          {/* OTP LOGIN */}
          <button className="w-full h-[52px] mb-3 rounded-xl bg-[#f3f4f6] text-[#111827] font-bold text-[14px] flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
            <Icon
              icon="lucide:shield-check"
              width="20"
              className="text-gray-700"
            />
            Нэг удаагийн кодоор нэвтрэх
          </button>

          {/* GOOGLE */}
          <button className="w-full h-[52px] rounded-xl bg-[#f3f4f6] text-[#111827] font-bold text-[14px] flex items-center justify-center gap-3 hover:bg-gray-200 transition-colors">
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              className="w-5 h-5"
              alt="google"
            />
            Google ашиглах
          </button>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hidden lg:flex lg:w-1/2 p-4">
        <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="cover.png"
            alt="cover"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
