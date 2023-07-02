import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css"

function NavBar() {
  return (
    <div class="container-fluid sticky-top main-navbar">
      <div class="row">
        <div class="col-9">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="./index.html">
                    Inicio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="./index.html">
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