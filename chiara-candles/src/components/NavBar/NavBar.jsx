import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className="container-fluid sticky-top main-navbar">
      <div className="row">
        <div className="col-9">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/velas">
                    Velas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/category/accesorios">
                    Accesorios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;