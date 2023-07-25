import { Button } from "@mui/material";
import { logout } from "features/auth/authSlice";
import useAuth from "hooks/useAuth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import SLogo from "../../assets/images/noon-saudi.svg";
import "../../pages/home.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const Header = () => {
  const user = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <nav className="navbar shadow-none navbar-expand-lg pb-lg-3 pt-0 navbar-dark background header-top d-flex flex-column">
        <div className="container-fluid d-none d-md-block">
          <div className="row">
            <div className="col-md-12 d-flex header-top-line">
              <div className="marquee-items d-flex align-items-center">
                <div className="marquee-4 pe-2">
                  <p>Markets Live SKUs:</p>
                </div>
                <div className="marquee-2">
                  <p>380,000</p>
                </div>
              </div>

              <div className="marquee-items d-flex align-items-center">
                <div className="marquee-4 pe-2">
                  <p>Fulfilled by Stores:</p>
                </div>
                <div className="marquee-2">
                  <p>280,000</p>
                </div>
              </div>

              <div className="marquee-items d-flex align-items-center">
                <div className="marquee-4 pe-2">
                  <p>Fulfilled by MP:</p>
                </div>
                <div className="marquee-2">
                  <p>100,000</p>
                </div>
              </div>

              <div className="marquee-items d-flex ">
                <div className="marquee-4 pe-2">
                  <p>Top Dominance Market:</p>
                </div>
                <div className="marquee-2">
                  <img src={SLogo} style={{ width: "40px" }} />
                </div>
              </div>
            </div>
          </div>
     
        </div>
        <div className="container pt-3">
            <a href="/" className="navbar-brand me-lg-5">
              <img
                src="images/SKU-Market-Logo.svg"
                alt="logo"
                className="logo-dark amdlogo"
                height="22"
              />
            </a>

            <button
              className="navbar-toggler"
              style={{ borderColor: "#1562FF" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu" style={{ color: "#1562FF" }}></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarNavDropdown"
              style={{ paddingLeft: "8%" }}
            >
              <ul className="navbar-nav me-auto align-items-center amd-menu">
                <li className="nav-item mx-lg-1">
                  <a className="nav-link active" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="#sku">
                    SKU Markets
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="#how">
                    How it works!
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="#price">
                    Pricing Plans
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav ms-auto align-items-center">
                <li>
                  <div className="">
                    <button
                      className="dropbtn bg-white"
                      dir="rtl"
                      lang="ar"
                      style={{ color: "black" }}
                    >
                      العربية
                    </button>
                  </div>
                </li>
                <li className="nav-item me-0 ">
                  <a
                    href="pages-login.html"
                    target="_blank"
                    className="login-icon p-2 login btn btn-sm btn-light rounded-pill d-none d-lg-inline-flex"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </nav>
    </div>
  );
};

export default Header;
