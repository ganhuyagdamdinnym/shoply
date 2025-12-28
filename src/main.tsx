import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Icon } from "@iconify/react";

import App from "./App.tsx";
import Order from "./pages/order.tsx";
import Product from "./pages/product.tsx";
import Category from "./pages/category.tsx";
import Brand from "./pages/brand.tsx";
import { SideBar } from "./components/Sidebar.tsx";
import CreateProduct from "./pages/productCreate.tsx";
import CreateOrder from "./pages/createOrder.tsx";
import CreateBrand from "./pages/createBrand.tsx";
import Settings from "./pages/settings.tsx";
import Design from "./pages/design.tsx";
import Banner from "./pages/banner.tsx";
import AboutUs from "./pages/aboutUs.tsx";
import Branch from "./pages/branch.tsx";
import Account from "./pages/account.tsx";
import { MobileSideBar } from "./components/mobileSideBar.tsx";
import Admin from "./pages/admin.tsx";
import OrderDetails from "./pages/orderDetail.tsx";
import ProductDetails from "./pages/productdetails.tsx";
import Login from "./pages/login.tsx";

function AppContent() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Login хуудас дээр Sidebar болон бусад Layout-ыг харуулахгүй байх нөхцөл
  const isLoginPage = location.pathname === "/login";

  if (isLoginPage) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    );
  }

  return (
    <div className="h-screen overflow-hidden bg-[#f5f4f4]">
      <div className="flex h-full">
        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-[270px] flex-shrink-0">
          <SideBar />
        </div>

        {/* MOBILE HEADER */}
        <div className="md:hidden fixed top-0 left-0 w-full h-[56px] z-40 bg-white/50 border-b border-[#e7e3e4] backdrop-blur-lg px-2 flex items-center justify-between">
          <button
            onClick={() => setOpen(true)}
            className="border border-[#e7e3e4] h-10 w-10 rounded-xl flex items-center justify-center"
          >
            <Icon icon="quill:hamburger" width={20} />
          </button>
          <img src="infitechLogo.png" className="w-30" alt="logo" />
          <div className="w-10 h-10 rounded-full bg-green-950"></div>
        </div>

        {/* MOBILE OVERLAY */}
        {open && (
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
          />
        )}

        {/* MOBILE SIDEBAR */}
        <div
          className={`fixed top-0 left-0 h-screen w-60 bg-[#f5f4f4] z-50 transform transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <MobileSideBar setOpen={setOpen} />
        </div>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto pt-[56px] md:pt-0">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/order" element={<Order />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/order/create" element={<CreateOrder />} />
            <Route path="/brand/create" element={<CreateBrand />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/design" element={<Design />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/orderdetails" element={<OrderDetails />} />
            <Route path="/productDetails" element={<ProductDetails />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

function Root() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);
