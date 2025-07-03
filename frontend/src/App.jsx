import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './pages/Products/ProductsPage.jsx';
import AboutPage from './pages/About/AboutPage.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Routes>
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
