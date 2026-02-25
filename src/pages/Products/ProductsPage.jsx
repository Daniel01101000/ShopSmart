import "./ProductsPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function ProductsPage({ user, products, addToCart }) {
  const getRandomSquareSpan = () => {
    const options = [1, 2];
    return options[Math.floor(Math.random() * options.length)];
  };

  return (
    <>
      <div className="product-grid">
        {products.map((product) => {
          const span = getRandomSquareSpan();
          return (
            <div
              key={product.id}
              className="card"
              style={{
                gridColumn: `span ${span}`,
                gridRow: `span ${span}`,
              }}
            >
              {user && (
                <FontAwesomeIcon
                  icon={faCartShopping}
                  className="cart-icon"
                  onClick={() => addToCart(product)}
                />
              )}

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
