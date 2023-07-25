import logo from 'static/images/logo.svg';

const Footer = () => {
    return (
        <div className="footer-main">
        <div className="">
          <div className="footer-padding py-2">
            <div className="row d-flex justify-content-around flex-md-column flex-lg-row align-items-center footer-area footer-mobaile">
              <div className="col-md-12 col-lg-2">
                <div className="footer-items footer-mobile-logo footer-logo text-center">
                  <img
                    src={logo}
                    alt="logo"
                    className="logo-dark amdlogo"
                    height="22"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className="footer-items footer-1 d-flex justify-content-center"
                  style={{ paddingTop: "11px" }}
                >
                  <h6 className="fs-5 fw-normal" >All rights reserved @ 2022 - 2023</h6>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="row foot-menu">
                  <div className="col-md-4 text-center">
                    <a href="#home">Home</a>
                  </div>
                  <div className="col-md-4 text-center">
                    <a href="#price">Pricing Plan</a>
                  </div>
                  <div className="col-md-4 text-center">
                    <a href="#sku">Contact Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;
