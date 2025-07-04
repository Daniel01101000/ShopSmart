import React, { useEffect, useState } from 'react';
import './ProductsPage.css'; // opcional: si quieres estilos separados

function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  const getRandomSquareSpan = () => {
    const options = [1, 2];
    return options[Math.floor(Math.random() * options.length)];
  };

  return (
    <>
      <div className="product-grid">
        {products.map(product => {
          const span = getRandomSquareSpan();
          return (
            <div
              key={product.id}
              className="card"
              style={{
                gridColumn: `span ${span}`,
                gridRow: `span ${span}`
              }}
            >
              <img src={product.image_url} alt={product.name} />
              <div className="card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>${product.price}</strong>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductsPage;