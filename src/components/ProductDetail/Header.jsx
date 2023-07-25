
import { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import useAuth from "hooks/useAuth";
import * as React from "react";
import { Link } from "react-router-dom";
import avatar from "static/images/avatar.jpg";
import logo from "static/images/logo.svg";
import { Stack } from "../../../node_modules/@mui/material/index";
import { useNavigate } from "../../../node_modules/react-router-dom/dist/index";
import "./index.css";
import TopBarLogo from "../../assets/images/noon-saudi.svg";
import SunLight from "../../assets/images/moooon.svg";
import Fullscreen from "../../assets/images/fullScreen.png";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';

const pages = ["SKU Markets", "Alerts", "Watch List", "Profile"];

function ResponsiveAppBar() {
  const [showNavExternal3, setShowNavExternal3] = useState(false);
  const user = useAuth();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div className="row d-none d-lg-block">
        <div className="col-md-12 d-flex header-top-line px-3">
          <div className="marquee-items d-flex align-items-center">
            <div className="marquee-4" style={{ paddingRight: "8px" }}>
              <p>Markets Live SKUs:</p>
            </div>
            <div className="marquee-2">
              <p>380,000</p>
            </div>
          </div>

          <div className="marquee-items d-flex align-items-center">
            <div className="marquee-4" style={{ paddingRight: "8px" }}>
              <p>Fulfilled by Stores:</p>
            </div>
            <div className="marquee-2">
              <p>280,000</p>
            </div>
          </div>

          <div className="marquee-items d-flex align-items-center">
            <div className="marquee-4" style={{ paddingRight: "8px" }}>
              <p>Fulfilled by MP:</p>
            </div>
            <div className="marquee-2">
              <p>100,000</p>
            </div>
          </div>

          <div className="marquee-items d-flex ">
            <div className="marquee-4" style={{ paddingRight: "8px" }}>
              <p>Top Dominance Market:</p>
            </div>
            <div className="marquee-2">
              <img src={TopBarLogo} alt="" width="50px" height="20px" />
            </div>
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none">
      <MDBNavbar >
        <MDBContainer fluid>
        <Link to="/" className="navbar-brand me-lg-5">
              <img
                src={logo}
                alt="logo"
                className="logo-dark amdlogo "
                height="22"
                style={{width: "120px"}}
              />
            </Link>
          <MDBNavbarToggler
            className='ms-auto'
            type='button'
            data-target='#navbarToggleExternalContent'
            aria-controls='navbarToggleExternalContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavExternal3(!showNavExternal3)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </MDBContainer>
      </MDBNavbar>

      <MDBCollapse show={showNavExternal3}>
        <div className='bg-light shadow-3 p-4'>
          <MDBBtn block className='border-bottom m-0' color='link'>
          SKU Markets
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          Alerts
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          Watchlist
          </MDBBtn>
          <MDBBtn block className='border-bottom m-0' color='link'>
          Portfolio
          </MDBBtn>
          
          <MDBBtn block className='border-bottom m-0' color='link'>
          Seller board
          </MDBBtn>
          
          
        </div>
      </MDBCollapse>
      </div>
      <AppBar
        sx={{ boxShadow: "none", borderBottom: "1px solid #f1f1f1" }}
        color="transparent"
        position="static"
        className="d-none d-lg-block">
        <nav className=" navbar shadow-none navbar-expand-lg pt-lg-4 pb-0 navbar-dark px-2">
          <div className="col-md-12 d-flex justify-content-between w-100">
            <Link to="/" className="navbar-brand me-md-2 me-xl-5">
              <img
                src={logo}
                alt="logo"
                className="logo-dark amdlogo"
                height="22"
              />
            </Link>

            <button
              className="navbar-toggler"
              style={{ borderColor: "#1562ff" }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="mdi mdi-menu" style={{ color: "#1562ff" }}></i>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarNavDropdown ps-2 ps-xl-3"
              // style={{ paddingLeft: "3%" }}
            >
              <ul
                className="navbar-nav me-auto align-items-center col-7 justify-content-center pe-0 amd-menu "
                style={{ paddingRight: "8px" }}
              >
                <li className="nav-item mx-lg-1">
                  <a className="nav-link " href="#sku">
                    SKU Markets
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link " href="#how">
                    Alerts
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link " href="#faq">
                    Watchlist
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link " href="#price">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item mx-lg-1">
                  <a className="nav-link " href="#price">
                    Sellerboard
                  </a>
                </li>
              </ul>

              <div className="col-md-5">
                <ul className="list-unstyled topbar-menu float-end mb-0 d-flex align-items-center">
                  <li className="dropdown notification-list topbar-dropdown">
                    <a
                      className="nav-link arrow-none"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <span className="align-middle d-none d-lg-inline-block">
                        العربية
                      </span>
                    </a>
                  </li>

                  <li className="notification-list d-none d-sm-inline-block">
                    <a>
                      <img className="sunLight" src={SunLight} alt="moonpic" />
                    </a>
                  </li>

                  <li className="notification-list d-none d-md-inline-block">
                    <a>
                      <img
                        className="fullscreen-icon"
                        src={Fullscreen}
                        alt="moonpic"
                      />
                    </a>
                  </li>

                  <li className=" notification-list topbar-dropdown ">
                    <a
                      className="nav-link arrow-none"
                      data-bs-toggle="dropdown"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <span className="align-middle d-none d-lg-inline-block">
                        Subscription
                      </span>
                    </a>
                  </li>

                  <li className="dropdown notification-list users-style ps-3">
                  <a
                      className="nav-link dropdown-toggle nav-user1 arrow-none me-0"
                      data-bs-toggle="dropdown"
                      href="#"
                      role="button"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      <Box sx={{ flexGrow: 0 }}>
                        <Tooltip style={{ cursor: "pointer" }}>
                          <Stack
                            onClick={handleOpenUserMenu}
                            direction="row"
                            spacing={1}
                            alignItems="center"
                          >
                            {/* <Avatar alt={user?.name} src={avatar} /> */}
                            <Typography sx={{ ms: 3 }}>
                              {" "}
                              <span>
                                <span className="account-user-name">AS SHANTO</span>
                              </span>
                            </Typography>
                          </Stack>
                        </Tooltip>
                        <Menu
                          sx={{ mt: "45px" }}
                          id="menu-appbar"
                          anchorEl={anchorElUser}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(anchorElUser)}
                          onClose={handleCloseUserMenu}
                        >
                          <MenuItem>
                          <div className=" dropdown-header noti-title">
                                    <h6 className="text-overflow my-2 fs-5 text-secondary">Welcome !</h6>
                                </div>

                          </MenuItem>
                          <MenuItem>
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="mdi mdi-account-circle me-1 fs-4"></i>
                                    <p className='fs-4 '>My Account</p>
                                </a>
                          </MenuItem>
                          <MenuItem>
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="mdi mdi-lifebuoy me-1 fs-4"></i>
                                    <p className='fs-4 '>Change Password</p>
                                </a>
                          </MenuItem>
                          <MenuItem>
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="mdi mdi-lock-outline me-1 fs-4"></i>
                                    <p className='fs-4 '>Lock Screen</p>
                                </a>
                          </MenuItem>
                          <MenuItem>
                          <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <i className="mdi mdi-logout me-1 fs-4"></i>
                                    <p className='fs-4'>Logout</p>
                                </a>
                          </MenuItem>
                        </Menu>
                      </Box>
                    </a>

                    <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown">
                      <div className=" dropdown-header noti-title">
                        <h6 className="text-overflow m-0">Welcome !</h6>
                      </div>

                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="mdi mdi-account-circle me-1 text-primary"></i>
                        <span>My Account</span>
                      </a>

                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="mdi mdi-lifebuoy me-1 text-primary"></i>
                        <span>Change Password</span>
                      </a>

                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="mdi mdi-lock-outline me-1 text-primary"></i>
                        <span>Lock Screen</span>
                      </a>

                      <a
                        href="javascript:void(0);"
                        className="dropdown-item notify-item"
                      >
                        <i className="mdi mdi-logout me-1 text-primary"></i>
                        <span>Logout</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </AppBar>
      
    </div>
  );
}
export default ResponsiveAppBar;
