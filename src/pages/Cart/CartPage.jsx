import "./CartPage.css";

function CartPage({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + Number(item.price), 0);

  return (
    <div className="cart-wrapper">
      <div className="content-cart">
        <h1>Your cart</h1>

        {cart.length === 0 ? (
          <p>You do not have items in your cart.</p>
        ) : (
          <>
            {cart.map((p) => (
              <div key={p.id} className="cart-item">
                <img src={p.image_url} alt={p.name} />

                <div style={{ flexGrow: 1 }}>
                  <h3>{p.name}</h3>
                  <p>${p.price}</p>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(p.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </button>
              </div>
            ))}

            <div className="cart-total-box">Total: ${total}</div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
