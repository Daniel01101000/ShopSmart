import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ProductsPage from "./pages/Products/ProductsPage.jsx";
import AboutPage from "./pages/About/AboutPage.jsx";
import ContactPage from "./pages/Contact/ContactPage.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import SignUpPage from "./pages/SignUp/SignUpPage.jsx";
import UserPage from "./pages/User/UserPage.jsx";
import CartPage from "./pages/Cart/CartPage.jsx";

function App() {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // 🔥 NUEVOS ESTADOS PROFESIONALES
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [wakingUp, setWakingUp] = useState(false);
  const [productsError, setProductsError] = useState(null);

  // Cargar usuario guardado
  useEffect(() => {
    const saved = localStorage.getItem("user");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  // Cargar carrito guardado
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  // Guardar carrito cuando cambie
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // 🔥 Cargar productos con retry automático
  useEffect(() => {
    const fetchProducts = async (retry = false) => {
      try {
        const res = await fetch(
          "https://shopsmart-backend-1.onrender.com/api/products"
        );

        if (!res.ok) {
          throw new Error("Server error");
        }

        const data = await res.json();

        setProducts(data);
        setLoadingProducts(false);
        setWakingUp(false);
        setProductsError(null);
      } catch (err) {
        if (!retry) {
          // Primera falla → probablemente Render dormido
          setWakingUp(true);

          setTimeout(() => {
            fetchProducts(true);
          }, 5000);
        } else {
          setProductsError("Server is currently unavailable.");
          setLoadingProducts(false);
        }
      }
    };

    fetchProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <Router basename="/ShopSmart">
      <div className="app-wrapper">
        <Header user={user} setUser={setUser} />

        {loadingProducts && !wakingUp && (
          <p style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "200px",  
               fontSize: "1.8rem"
            }}>Backend is waking up (free hosting). This may take up to 45 seconds...</p>
        )}

        {wakingUp && (
          <p style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               height: "200px",  
               fontSize: "1.8rem"
            }}>
            Backend is waking up (free hosting). This may take up to 45 seconds...
          </p>
        )}

        {productsError && (
          <p style={{ textAlign: "center", color: "red" }}>
            {productsError}
          </p>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <ProductsPage
                user={user}
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route
            path="/products"
            element={
              <ProductsPage
                user={user}
                products={products}
                addToCart={addToCart}
              />
            }
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignUpPage />} />

          <Route
            path="/user"
            element={<UserPage user={user} setUser={setUser} />}
          />

          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;