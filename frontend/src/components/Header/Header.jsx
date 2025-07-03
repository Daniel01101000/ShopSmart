import './Header.css';
import Logo from "../../assets/ShopSmartLogo/Logo.png";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="app-header">
      <div className="container">
        <img src={Logo} alt="Logo" className='Logo'/>
        <nav>
          <ul className="nav-links">
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
