import { Link } from "react-router-dom";
import "./PageNotFound.css"

function PageNotFound() {
  return (
    <>
      <h1>Ups! La pagina que buscabas, no esta disponible</h1>
      <p className="zoom-area">
        Volvé a intentarlo nuevamente
      </p>
      <section className="error-container">
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
        <span className="zero">
          <span className="screen-reader-text">0</span>
        </span>
        <span className="four">
          <span className="screen-reader-text">4</span>
        </span>
      </section>
      <div className="btn-container">
        <Link
          to="/"
          className="more-link"
        >
          Volve al Inicio
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;