import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div class="footer-container">
        <h2>Chiara Candles</h2>
        <h2>Seguinos en Instagram!</h2>
        <a
          href="https://www.instagram.com/chiaracandles/?hl=es"
          target="_blank"
        >
          <img
            src="./media/instagram.png"
            alt="instagram"
            width="40"
            height="40"
            class="social"
          />
        </a>
        <h3>All Rights Reserved</h3>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=0123456789&text=Hola, me envias info!"
        target="_blank"
      >
        <img
          src="./media/whatsapp.png"
          alt="whatsapp"
          width="60"
          height="60"
          class="whats"
        />
      </a>
    </footer>
  );
}

export default Footer;