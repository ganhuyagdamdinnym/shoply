import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <SideBar />
  //   <App />
  // </StrictMode>
  <Router>
    <div className="md:flex">
      <div className="w-76 bg-[#f5f4f4] h-screen px-4 pt-2 hidden md:block ">
        <SideBar />
      </div>
      <div className="md:hidden fixed top-0 left-0 w-full h-[56px] z-40 bg-back/50 border-b border-[#e7e3e4] backdrop-blur-lg px-2 flex items-center justify-between">
        hi
      </div>
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
      </Routes>
    </div>
  </Router>
);
