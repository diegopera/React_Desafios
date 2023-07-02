import './Header.css'

function Header() {
  return (
    <header>
      <div class="logo-container">
        <a href="./index.html">
          <img
            src="./media/logo.png"
            alt="logo"
            width="140"
            height="113"
            class="logo"
          />
        </a>
        <h1>Chiara Candles Online Shop</h1>
      </div>
    </header>
  );
}

export default Header;