import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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
import Users from "./pages/users.tsx";
import BrandEdit from "./pages/branEdit.tsx";
import OrderEdit from "./pages/orderEdit.tsx";
import AddBranch from "./pages/addBranch.tsx";
import { MobileHeader } from "./components/mobileHeader.tsx";
import Indicator from "./pages/indicator.tsx";
import Value from "./pages/value.tsx";

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
    <div className="h-screen overflow-hidden bg-[#f5f4f4] pb-4">
      <div className="flex h-full">
        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-67.5 shrink-0">
          <SideBar />
        </div>

        {/* MOBILE HEADER */}
        <MobileHeader setOpen={setOpen} />

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
        <main className="flex-1 overflow-y-auto pt-14 md:pt-0">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/order" element={<Order />} />
            <Route path="/product" element={<Product />} />
            <Route path="/category" element={<Category />} />
            <Route path="/brand" element={<Brand />} />
            <Route path="/product/create" element={<CreateProduct />} />
            <Route path="/order/create" element={<CreateOrder />} />
            <Route path="/brand/create" element={<CreateBrand />} />
            <Route path="/attribute" element={<Indicator />} />
            <Route path="/attribute/:id" element={<Value />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/design" element={<Design />} />
            <Route path="/banner" element={<Banner />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/branch" element={<Branch />} />
            <Route path="/account" element={<Account />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/order/:id" element={<OrderDetails />} />
            <Route path="/order/:id/edit" element={<OrderEdit />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/user" element={<Users />} />
            <Route path="/branch/create" element={<AddBranch />} />
            <Route path="/brand/:id" element={<BrandEdit />} />
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
