import React, { useState } from "react";
import SaabBank from "../../assets/images/SABB_Bank_Logo.png";
import NoonBank from "../../assets/images/noonEasylogo.svg";
import BillingForm from "./billingForm";
import './subscription.css';

const SubscriptionHero = () => {
  const [description, setDescription] = useState(true);
  const [reviews, setReviews] = useState(false);
  const descriptionHandler = () => {
    setDescription(true);
    setReviews(false);
  };
  const reviewsHandler = () => {
    setDescription(false);
    setReviews(true);
  };
  return (
    <>
      <div className="container-width">
        <div className="row">
          <div className="col-md-12 pb-3">
            <span className="text-bold text-black">Subscrptions</span>
          </div>
        </div>
      </div>

      <div className="container-width">
        <div className="row">
          <div className="cardSubscriptions">
            <ul className="nav nav-pills bg-nav-pills nav-justified mb-3">
              <li className="nav-item" onClick={descriptionHandler}  style={{ backgroundColor: reviews ? "#dcdcdc" : "#0070fc" }}>
                <a
  
                  className="rounded-0 m-0"
                 
                >
                  <i className="mdi mdi-account-circle d-md-none d-block" ></i>
                  <span
                    className="d-none d-md-block"
                   
                  >
                    <div  style={{ color: reviews ? "blue" : "white" , paddingTop: '10px', paddingBottom: '10px'}}>
                    Subscription
                    </div>
                  </span>
                </a>
              </li>

              <li className="nav-item" onClick={reviewsHandler}>
                <a
                  style={{
                    backgroundColor: description ? "#dcdcdc" : "#0070fc"
                  }}
                  href="#home1"
                  data-bs-toggle="tab"
                  aria-expanded="false"
                  className="nav-link rounded-0 m-0"
                >
                  <i className="mdi mdi-home-variant d-md-none d-block"></i>
                  <span
                    className="d-none d-md-block"

                  >
                   
                    <div   style={{ color: description ? "blue" : "white" , paddingTop: '10px', paddingBottom: '10px', textTransform: 'initial' }}>
                    Billing Info
                    </div>
                  </span>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane show active" id="profile1">
                <div className="row">
                  <div className="col-md-8">
                    {description && (
                      <div className="subscribe-top text-center">
                        <span className="text-bold" style={{ fontSize: "12px" }}>
                          Subscription
                        </span>
                        <p style={{ fontSize: "10px" }}>
                          Your current subscription:{" "}
                          <span className="text-bold" style={{ fontSize: "10px" }}>
                            Free
                          </span>
                        </p>

                        <span className="text-bold" style={{ fontSize: "12px" }}>
                          Get Discount Code
                        </span>
                        <p style={{ fontSize: "12px" }}>
                          Type your discount code below
                        </p>

                        <input
                          className="subscribe-coupon fs-5 me-1"
                          type="text"
                          placeholder="Coupon Code"
                        />
                        <input
                          className="subscribe-apply fs-5"
                          type="submit"
                          value="Apply"
                        />

                        <div className="row section-heading">
                          <p className="pricingHeading">Pricing Plans</p>
                          <p className="price-p" style={{ fontSize: "12px" }}>
                            Start with one of our preselected plans to analyse &
                            monitors Top Ranked & Trendning SKUs. <br /> You can
                            save 20% by choosing Annually subscription
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-md-12 d-flex align-items-center justify-content-center text-center price-button">
                            <font className="fs-5 fw-bold">Monthly</font>

                            <label className="switch">
                              <input type="checkbox"  />
                              <span className="slider round"></span>
                            </label>

                            <font className="fs-5 fw-bold">Annually</font>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center flex-column flex-lg-row">
                        <div className="subscription-pricing1 col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mx-auto">
                            <div className="pricingTable">
                              <div className="pricingTable-header">
                                <h3 className="heading">Launch</h3>
                                <p>
                                  Perfect for startups and <br /> growing
                                  businesses
                                </p>

                                <div className="price-value-subscription">
                                  {" "}
                                  SAR 250/mo <span className="month"></span>{" "}
                                </div>

                                <p className="offerTextSubscription">
                                  Up to 25,000 Top Ranked SKUs <br /> Cross
                                  Countries & Categoriea
                                </p>
                              </div>

                              <div className="pricing-content">
                                <ul>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Track & Alert SKUs
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Max, Min Prices & SKUs Rating
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Expected Trade vloume & SOH
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Estimated Market Capital
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Opportunities & Competitors
                                  </li>
                                </ul>
                              </div>
                              <div className="pricingTable-subscription">
                                <a href="#">Select</a>
                              </div>
                            </div>
                          </div>

                          <div className="subscription-pricing1 col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mx-auto">
                            <div className="pricingTable green">
                              <div className="pricingTable-header">
                                <h3 className="heading">Grow</h3>

                                <p>
                                  Ideal for small to medium-sized <br />
                                  organizations
                                </p>

                                <div className="price-value-subscription">
                                  {" "}
                                  SAR 400/mo <span className="month"></span>
                                </div>

                                <p className="offerTextSubscription">
                                  Up to 50,000 Top Ranked SKUs <br /> Cross
                                  Countries & Categoriea
                                </p>
                              </div>

                              <div className="pricing-content">
                                <ul>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Track & Alert SKUs
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Max, Min Prices & SKUs Rating
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Expected Trade vloume & SOH
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Estimated Market Capital
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Opportunities & Competitors
                                  </li>
                                </ul>
                              </div>
                              <div className="pricingTable-subscription">
                                <a href="#">Select</a>
                              </div>
                            </div>
                          </div>
                          <div className="subscription-pricing1 col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mx-auto">
                            <div className="pricingTable blue">
                              <div className="pricingTable-header">
                                <h3 className="heading">Business</h3>

                                <p>
                                  Designed for higher volumes <br />{" "}
                                  organizations
                                </p>

                                <div className="price-value-subscription">
                                  {" "}
                                  SAR 600/mo <span className="month"></span>
                                </div>
                                <p className="offerTextSubscription">
                                  Up to 100,000 Top Ranked SKUs <br /> Cross
                                  Countries & Categoriea
                                </p>
                              </div>
                              <div className="pricing-content">
                                <ul>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Track & Alert SKUs
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Max, Min Prices & SKUs Rating
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Expected Trade vloume & SOH
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Estimated Market Capital
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Opportunities & Competitors
                                  </li>
                                </ul>
                              </div>
                              <div className="pricingTable-subscription">
                                <a href="#">Select</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center flex-column flex-lg-row pricing-bottom-row">
                        <div className="subscription-pricing1 col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mx-auto">
                            <div className="pricingTable red">
                              <div className="pricingTable-header">
                                <span className="btn pricing-soon">Soon!</span>
                                <h3 className="heading">Enterprise</h3>

                                <p>
                                  Designed for higher volumes <br />{" "}
                                  organizations
                                </p>

                                <div className="price-value-subscription">
                                  Contact Us <span className="month"></span>
                                </div>
                                <p style={{ paddingTop: "25px" }} className="offerTextSubscription">
                                  Up to Unlimited SKUs <br /> Cross Countries &
                                  Categoriea
                                </p>
                              </div>
                              <div className="pricing-content">
                                <ul>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Business Plan +
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Ecommerce Platforms & Shopping <br />
                                    Carts Integration
                                  </li>
                                  {/* <!-- <li><i style="margin-right: 5px;" className="fa-regular fa-circle-check"></i>Expected Trade vloume & SOH</li>
			                            <li><i style="margin-right: 5px;" className="fa-regular fa-circle-check"></i>Estimated Market Capital</li>
			                            <li><i style="margin-right: 5px;" className="fa-regular fa-circle-check"></i>Opportunities & Competitors</li> --> */}
                                </ul>
                              </div>
                              <div className="pricingTable-subscription">
                                <a href="">Whatsapp Us</a>
                              </div>
                            </div>
                          </div>
                          <div className="subscription-pricing1 col-12 col-sm-12 col-md-6 col-lg-4 mt-3 mx-auto">
                            <div className="pricingTable red">
                              <div className="pricingTable-header">
                                <span className="btn pricing-soon">Soon!</span>
                                <h3 className="heading">Enterprise Plus</h3>

                                <p>
                                  Customized for fully organization SKUs <br />
                                  sales channels Management
                                </p>

                                <div className="price-value-subscription ">
                                  Contact Us <span className="month"></span>
                                </div>

                                <p style={{ paddingTop: "25px" }} className="offerTextSubscription">
                                  Up to Unlimited SKUs <br /> Cross Countries &
                                  Categoriea
                                </p>
                              </div>
                              <div className="pricing-content">
                                <ul>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Enterprise Plan +
                                  </li>
                                  <li>
                                    <i
                                      style={{ marginRight: "5px" }}
                                      className="fa-regular fa-circle-check"
                                    ></i>
                                    Complete Sales Channels <br />
                                    Management Platform
                                  </li>
                                  {/* <!-- <li><i style="margin-right: 5px;" className="fa-regular fa-circle-check"></i>Expected Trade vloume & SOH</li>
			                            <li><i style="margin-right: 5px;" className="fa-regular fa-circle-check"></i>Estimated Market Capital</li>
			                            <li><i style="margin-right: 5px;" className="fa-regular fa-circle-check"></i>Opportunities & Competitors</li> --> */}
                                </ul>
                              </div>
                              <div className="pricingTable-subscription">
                                <a href=" ">Whatsapp Us</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {reviews && <BillingForm />}
                  </div>

                  <div className="col-md-4">
                    <div className="border p-3 mt-4 mt-lg-0 rounded">
                      <h4 className="header-title mb-3 text-black">Order Summary</h4>

                      <div className="table-responsive">
                        <table className="table table-nowrap table-centered mb-0">
                          <tbody>
                            <tr>
                              <td>
                                {/* <!-- <img src="assets-main/images/sku-product.png" alt="contact-img"
                                            title="contact-img" className="rounded me-2" height="48" /> --> */}
                                <p className="m-0 d-inline-block align-middle text-black">
                               
                                    
                                    Amazing Modern Chair
                 
                                 
                                  <br />
                                  <small style={{ fontSize: "10px" }} className="text-black">
                                    5 x $148.66
                                  </small>
                                </p>
                              </td>
                              <td className="text-end text-black" style={{ fontSize: "13px" }} >
                                $743.30
                              </td>
                            </tr>
                            <tr className="text-end text-black" style={{ fontSize: "13px" }}>
                              <td>
                                <h6 className="m-0">Sub Total:</h6>
                              </td>
                              <td className="text-end">$1071.29</td>
                            </tr>
                            <tr className="text-end text-black" style={{ fontSize: "13px" }} >
                              <td>
                                <h6 className="m-0">VAT Tax:</h6>
                              </td>
                              <td className="text-end">FREE</td>
                            </tr>
                            <tr className="text-end text-black" style={{ fontSize: "13px" }} >
                              <td>
                                <h6 className="m-0">Total:</h6>
                              </td>
                              <td className="text-end fw-semibold">$1071.29</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="sub-right-bottom">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="cardSubscriptions payment-info">
                            <div className="row">
                              <div className="col-md-12 text-center">
                                <span className="text-bold">Payment Info</span>
                                <p className="mt-3 fw-bold">
                                  Your card will be billed monthly in advance.
                                  By clicking "Pay" you agree to our terms of
                                  services. You may cancel your renewal any time
                                  in advance of your next billing date from your
                                  account dashboard.
                                </p>
                                <p className="fw-bold">
                                  Our checkout is safe and secure by Noon
                                  Payment Gateway. Your personal and payment
                                  information is securely transmitted via
                                  128-bit encryption. We do not store any
                                  payment card information on our systems.
                                </p>
                              </div>
                            </div>
                            <div className="row text-center payment-icon">
                              <div className="col-md-6">
                                <img
                                  src={NoonBank}
                                  alt=""
                                  height="50px"
                                  width="100px"
                                />
                              </div>
                              <div className="col-md-6">
                                <img
                                  src={SaabBank}
                                  alt=""
                                  height="20px"
                                  width="100px"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <div className="cardSubscriptions noon-card">
                            <button className="noon-payments fs-5">
                              Pay with Noon Payments
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {description && (
                  <div className="row text-center">
                    <div className="col-md-12">
                      <div className="">
                        <button className="topayment fs-5">
                          Continue to Payment
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionHero;
