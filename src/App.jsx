import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./Components/Footer";
import { useAppContext } from "./Context/AppContext";
import Login from "./Components/Login";
import AllProducts from "./Pages/AllProducts";
import ProductCat from "./Pages/ProductCat";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import AddAdress from "./Pages/AddAdress";
import MyOrders from "./Pages/MyOrders";
import SellerLogin from "./Components/Seller/SellerLogin";

import { useEffect } from "react";
import SellerLayoute from "./Pages/seller/SellerLayoute";
import AddProduct from "./Components/Seller/AddProduct";
import ProductList from "./Components/Seller/ProductList";
import Orders from "./Components/Seller/Orders";

function App() {
  const location = useLocation();
  const isSellerPath = location.pathname.includes("seller");
  const { showUserLogin, isSeller } = useAppContext();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Conditional rendering of NavBar */}
      {!isSellerPath && <NavBar />}

      {/* Login Modal */}
      {showUserLogin && <Login />}

      {/* Toast notifications */}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "0.875rem",
            maxWidth: "500px",
            padding: "0.75rem 1rem",
          },
        }}
      />

      {/* Main Content */}
      <main
        className={`flex-1 ${
          isSellerPath ? "" : "px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<AllProducts />} />
          <Route path="/products/:category" element={<ProductCat />} />
          <Route path="/products/:category/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add-address" element={<AddAdress />} />
          <Route path="/my-orders" element={<MyOrders />} />

          {/* Seller Routes */}
          <Route
            path="/seller"
            element={isSeller ? <SellerLayoute /> : <SellerLogin />}
          >
            <Route index element={<AddProduct />} />
            <Route path="product-list" element={<ProductList />}/>
            <Route path="orders" element={<Orders />} />
          </Route>
        </Routes>
      </main>

      {/* Conditional rendering of Footer */}
      {!isSellerPath && <Footer />}
    </div>
  );
}

export default App;
