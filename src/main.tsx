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
createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <SideBar />
  //   <App />
  // </StrictMode>
  <Router>
    <div className="flex">
      <div className="w-56 h-screen hidden md:block">
        <SideBar />
      </div>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
        <Route path="/category" element={<Category />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/product/create" element={<CreateProduct />} />
        <Route path="/order/create" element={<CreateOrder />} />
      </Routes>
    </div>
  </Router>
);
