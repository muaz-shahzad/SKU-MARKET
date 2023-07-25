import React from "react";
import "./brand.css";
import tommyPic from "../../assets/images/tommy-hilfiger-logo.png";
import CartMap from "../../assets/images/product-map1.png";
import SahudiaLogo from "../../assets/images/noon-saudi.svg";

const BrandHero = () => {
  return (
    <>
      <div className="container-width">
        <div className="portfolio-body cardBrand shadowLight">
          <div className="portfolio-first card-body">
            <div className="row section-padding-tb d-flex flex-column flex-lg-row">
              <div className="col-md-4 col-lg-4 col-sm-2 col-11 mx-auto">
                <div className="first-1">
                  <div className="d-flex align-items-center flex-column flex-md-row">
                  <img src={tommyPic} width="80px" height="40px" />
                  <span style={{ fontSize: "15px" }} className="pt-1 pt-lg-0">Tommy Hilfiger</span>{" "}
                  </div>
                  <br />
                  <div className="pt-1 pt-lg-3 text-center text-lg-start">
                    <span className=""
                    >
                      Strong Team led by Changpeng Zhao, has experience in both
                      wall-street and crypto finance.{" "}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="col-md-2 col-lg-2 col-sm-2 col-11 mx-auto pt-5 pt-lg-0">
                <div className="first-2 text-center text-lg-end">
                  <p className="d-none d-lg-block">Volume</p>
                  <span style={{ fontSize: "14px" }}>
                    SAR 18,87M <font className="rate-green">2.04%</font>
                  </span>
                  <br />
                  <span style={{ fontSize: "14px" }}>
                    SAR 1,87M <font className="rate-red">-4.04%</font>
                  </span>
                  <br />
                  <div className="pt-3">
                    <span
                      style={{
                        marginTop: "25px !important",
                        display: "inlineBlock",
                      }}
                    >
                      Updated about 1 hour ago
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-2 col-11 pt-5 pt-lg-0 mx-auto">
                <div className="first-3">
                  <div className="three-top d-flex justify-content-between">
                  <p className="d-block d-lg-none">Volume</p>
                    <a href="//">24 H</a>
                  </div>
                  <div className="three-bottom">
                    <img src={CartMap} alt="" width="250px" height="70px;" />
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 col-sm-2 col-11 pt-5 pt-lg-0 mx-auto">
                <div className="first-4 text-center">
                  <div className="row text-center">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Marketplace</span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <a href="">
                        <img
                          className="w-100"
                          src={SahudiaLogo}
                          width="10px"
                          height="10px"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Brands</span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>22000</span>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>SKUs</span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>120</span>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Type</span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>120</span>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Sub-Types</span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>1127</span>
                    </div>
                  </div>
                  <div className="row text-center">
                    <div className="col-lg-7 col-md-7 col-sm-7 col-7 text-bold">
                      <span>Type</span>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-5">
                      <span>120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-width">
        <div
          className="portfolio-body cardBrand"
          style={{ padding: "20px 12px !important", marginTop: "-25px" }}
        >
          <div className="portfolio-second card-body py-3 px-2 py-3">
          <div className=" text-center text-md-start ">
            <span className="text-bold " style={{ fontSize: "14px" }}>
             
              About
            </span>
            </div>
            <div className="row pt-3 pt-md-0">
              <div className="col-md-12 d-flex justify-content-lg-between justify-content-around flex-column flex-md-row">
              <div className="second-item d-flex  justify-content-between mx-5 mx-md-0  align-items-center">
                  <div className="second-item-left">
                    <i className="fa-brands fa-hubspot"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>Categories</span> <br />
                    <span>24</span>
                  </div>
                </div>
                <div className="second-item d-flex justify-content-between px-5 px-md-0  align-items-center">
                  <div className="second-item-left">
                    <i className="fa-solid fa-users"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>Stores</span> <br />
                    <span>3900</span>
                  </div>
                </div>
                <div className="second-item d-flex justify-content-between px-5 px-md-0  align-items-center">
                  <div className="second-item-left">
                    <i className="fa-solid fa-arrow-up-right-dots"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>Live SKUs</span> <br />
                    <span>1500</span>
                  </div>
                </div>
                <div className="second-item d-flex justify-content-between px-5 px-md-0  align-items-center">
                  <div className="second-item-left">
                    <i className="fa-solid fa-arrow-trend-down"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>Not Live SKUs</span> <br />
                    <span>1500</span>
                  </div>
                </div>
                <div className="second-item d-flex justify-content-between px-5 px-md-0  align-items-center">
                  <div className="second-item-left">
                    <i className="fa-solid fa-cart-plus"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>Fulfilled by stores</span> <br />
                    <span>15000</span>
                  </div>
                </div>
                <div className="second-item d-flex justify-content-between px-5 px-md-0  align-items-center">
                  <div className="second-item-left">
                    <i className="fa-solid fa-house-chimney-crack"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>Fulfilled by stores</span> <br />
                    <span>35000</span>
                  </div>
                </div>
                <div className="second-item d-flex justify-content-between align-items-center px-5 px-md-0">
                  <div className="second-item-left">
                    <i className="fa-solid fa-cubes"></i>
                  </div>
                  <div className="second-item-marketplcae ms-2">
                    <span>SOH</span> <br />
                    <span className="rate-green">6500000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row table-footer">
          <span style={{ marginTop: "-12px !important", color: "#6c757d" }}>
            Designed for users to instantly see the changes that occur on the
            Category and predicts what will come next.
          </span>
        </div>
      </div>
    </>
  );
};

export default BrandHero;
