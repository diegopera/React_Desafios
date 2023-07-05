import './Header.css'

function Header() {
  return (
    <header>
      <div className="logo-container">
        <a href="./index.html">
          <img
            src="./media/logo.png"
            alt="logo"
            width="140"
            height="113"
            className="logo"
          />
        </a>
        <h1>Chiara Candles Online Shop</h1>
      </div>
    </header>
  );
}

export default Header;