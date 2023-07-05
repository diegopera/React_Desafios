import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function NavBar() {
  return (
    <div className="container-fluid sticky-top main-navbar">
      <div className="row">
        <div className="col-9">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="./index.html">
                    Inicio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./index.html">
                    Nosotros
                  </a>
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