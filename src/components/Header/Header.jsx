import './Header.css';
import Logo from "../../assets/ShopSmartLogo/Logo.png";
import { Link } from 'react-router-dom';

function Header({ user }) {
  return (
    <header className="app-header">
      <div className="container">

        <img src={Logo} alt="Logo" className="Logo" />

        <nav>
          <ul className="nav-links">

            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>

            {/* Si NO está logueado → mostrar Login */}
            {!user ? (
              <li><Link to="/login">Login</Link></li>
            ) : (
              <>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/user">User</Link></li>
              </>
            )}

            <li><Link to="/contact">Contact</Link></li>

          </ul>
        </nav>

      </div>
    </header>
  );
}

export default Header;