import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <h2>Chiara Candles</h2>
        <h2>Seguinos en Instagram!</h2>
        <Link
          to="https://www.instagram.com/chiaracandles/?hl=es"
          target="_blank"
        >
          <img
            src="./media/instagram.png"
            alt="instagram"
            width="40"
            height="40"
            className="social"
          />
        </Link>
        <h3>All Rights Reserved</h3>
      </div>
      <Link
        to="https://api.whatsapp.com/send?phone=0123456789&text=Hola, me envias info!"
        target="_blank"
      >
        <img
          src="./media/whatsapp.png"
          alt="whatsapp"
          width="60"
          height="60"
          className="whats"
        />
      </Link>
    </footer>
  );
}

export default Footer;