import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img
            src="./media/logo.png"
            alt="logo"
            width="140"
            height="113"
            className="logo"
          />
        </Link>
        <h1>Chiara Candles Online Shop</h1>
      </div>
    </header>
  );
}

export default Header;