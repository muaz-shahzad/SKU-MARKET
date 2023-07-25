import Marquee from "components/common/Marquee";
import Faq from "components/Home/Faq";
import Footer from "components/Home/Footer";
import Header from "components/Home/Header";
import { useState } from "react";
import { Link } from "react-router-dom";
import ComparableTrade from "./ComparableTrade";
import "./home.css";
import companyLogo from "./MapEN.png";
import heroJumpLgo from "../assets/images/logo2.png";
import Work1 from "../assets/images/work-1.png";
import Work2 from "../assets/images/work-2.png";
import Work3 from "../assets/images/work-3.png";
import Pluginimg from "../assets/images/plugin.png"
import ComparebleTable from "components/landingPage/compableTable";
import GifHero from "../assets/images/Web GIF 3_2.gif";
import web01 from "../assets/images/Web-01.png"


const Home = () => {
  const [isStatus, setStatus] = useState(false);
  const handelClick = (e) => {
    setStatus(!isStatus ? true : false);
  };

  const parentCalc = (value) => {
    if (isStatus) {
      const total = value - (value * 20) / 100;
      return total;
    } else {
      return value;
    }
  };

  return (
    <div className="bg-white">
      <Header />

      <div className="hero mt-5" style={{ paddingBottom: '75px' }} id="home">
        <div className="container-fluid ">
          <div className="container">
            <div className="row hero-main">
              <div className="col-md-6 d-flex flex-wrap align-content-center hero-left text">
                <a href="" className="d-flex align-items-center pb-3">
                  {" "}
                  <img
                    src={heroJumpLgo}
                    alt=""
                    width="15px"
                    height="15px"
                    style={{ color: "#0052F" }}
                  />{" "}
                  <span className="text-primary fs-6 p-0 pl-0 mb-0 mx-1">
                    Jump start your portfolio{" "}
                  </span>
                  <i
                    className="fa-solid fa-arrow-right"
                    style={{ color: "#0052ff" }}
                  ></i>
                </a>
                <div>
                  <h1 className="text-black fw-bold">
                    A Complete Insights, Analytics, Statistics & Managemet
                    Platform Built to Supercharge Your Ecommerce
                  </h1>
                  <h6 className="hero-title text-black">
                    Track it, Get Notified, Added it, Manage to Sell it to grow
                    your Ecommerce
                  </h6>

                  <p className="text-black">
                    SKU Markets is the easiest place to scale your Ecommerce
                  </p>

                  <h6 className="text-black">Sign up and get started today</h6>
                </div>
                <button className="py-1 px-4">
                  <a href="pages-register.html" className="fs-5">
                    Sign Up
                  </a>
                </button>
              </div>
              <div className="col-md-6 hero-right text-right">
                <img src={GifHero} alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Marquee className="fs-6 pb-5" />
      <div className="target section-padding " style={{ marginTop: '90px' }} id="target">
        <div className="container-fluid">
          <div className="container">
            <div className="row text-center">
              <div className="com-md-12">
                <div className="row">
                  <div className="col-md-7 d-flex align-items-start flex-column">
                    <h3>
                      Targeted Countries, Marketplaces, <br />
                      and Sellers benefits our services
                    </h3>
                    <p>
                      Maximize the Efficiency of your Ecommerce Business Cross
                      Countries and Categories!
                    </p>
                  </div>
``
                  <div className="col-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Analysis section --> */}
      <div className="analysis pt-5 " id="sku">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex flex-wrap align-content-center sku-left">
                <h3 className="text-black">
                  SKU Markets Insights, Analytics & Statistics
                </h3>
                <p className="text-black fs-6">
                  Top selling and trending SKUs on the KSA, UAE and Egypt online
                  marketplaces and Price List by Market top Ecommerce Platforms
                  such as Amazon and Noon. List of top Live SKU prices of
                  10,000,000 different online SKUs. A complete list with SKU
                  markets rankings, trade volume and value charts as of today.
                </p>
                <Link to="/skumarkets">
                  <button>Try SKU Markets</button>
                </Link>
              </div>
              <div className="col-md-6 hero-right text-right">
                <img src={web01} alt="" width="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComparebleTable />
      {/* <ComparableTrade /> */}

      <div className="work section-padding" id="how">
        <div className="container-fluid">
          <div className="container">
            <div className="row work-top text-center section-heading">
              <h3 className="text-black">
                How SKU Markets Solution works <br /> and help your business?
              </h3>
            </div>
            <div className="row  text-center">
              <div className="col-md-4">
                <div className="work-items d-flex flex-column flex-lg-row align-items-center">
                  <img src={Work1} alt="" width="100px" height="100px" />
                  <p className="text-black pt-2 pt-lg-0">
                    Simply we provide you with the top ranked SKUs cross online
                    marketplaces, countries and Categories even your SKUs to
                    manage and control it cross sales channels and know the
                    opportunities also your competitors stores
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-items d-flex flex-column flex-lg-row align-items-center">
                  <img src={Work2} alt="" width="100px" height="100px" />
                  <p className="text-black pt-2 pt-lg-0">
                    We measure it for you to make it ready to build your
                    decisions on the actual situation of marketplaces. We also
                    preparing your actions to control, analysis and interact to
                    scale your Ecommerce
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-items d-flex flex-column flex-lg-row align-items-center">
                  <img src={Work3} alt="" width="100px" height="100px" />
                  <p className="text-black pt-2 pt-lg-0">
                    Keep it on our bots to notify you by our automated WhatsApp
                    alerts to speed up your actions & save efforts finding good
                    in heath SKUs to expand your Ecommerce and manage it to your
                    sales channels
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- plugins starts here --> */}

      <div className="plugin section-padding">
        <div className="">
          <div className="container">
            <div className="row text-center d-flex flex-column flex-lg-row justify-center align-items-center">
              <div className="col-md-5">
                <h5 style={{ fontSize: "30px"}} className="text-black fw-bold">Plugins</h5>
                <p style={{ fontSize: "13px" }} className="text-black ">
                  Our SKU Markets platform plugs easily into some of the most
                  popular Ecommerce platforms & shopping carts in the world
                </p>
                <p style={{ fontSize: "13px" }} className="text-black ">
                  These plugins help you get started without any programming
                  needed. You can use the plugins for a seamless integration
                  that easily allows you to add on your multi channels to take
                  control of the most major Ecommerce & Shopping Carts
                  platforms. Everything your Ecommerce needs to succeed.
                </p>
              </div>
              <div
                className="col-md-3 d-flex align-items-center justify-content-center"
                style={{ marginTop: "154px", fontSize: "13px" }}
              >
                <div className="find">
                  <div className="find-top d-flex justify-content-between">
                    <i className="fa-solid fa-magnifying-glass"></i>
                    {/* <!-- <span style="color: #B7B7B7;">Find your platform</span> --> */}
                    <input
                      type="text"
                      placeholder="Find your Platform"
                      className="platform-box"
                    />
                  </div>
                  <div className="find-bottom">
                    <span className="text-primary">Learn about integration</span>
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="col-md-4 d-flex align-items-center">
                <img
                  src={Pluginimg}
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* why sku markets setion  */}


      <div className=" section-padding" id="why">
        <div className="container-fluid">
          <div className="container">
            <div className="row solution-top text-center section-heading">
              <h3 className="text-black">Why SKU Markets Solution</h3>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="solution-items">
                  <img src="images/growth-icon.png" />
                  <h4>Increase Sales & Revenue</h4>
                  <p>Save 90% of the time searching for offers in the MarketPlaces to check for new opportunities to expand your selection, preparing your new SKUs 10X of your competitors to achieve high sales</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="solution-items">
                  <img src="images/low-price (1).png" alt="" />
                  <h4>Reduce Operational Costs</h4>
                  <p>The job could be completed at the lower operational cost by showing you which SKUs has the opportunities without wasting your employees time and they can work more efficiently and productivity by just looking to the good sources!</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="solution-items">
                  <img src="images/scale.png" alt="" />
                  <h4>Scale Your Business</h4>
                  <p>The SKU Markets system helps you to scale your business by expanding your selection easily as we already can analyse the top selling and trending SKUs as we also hunting any potential SKUs to grab it to you easily!</p>
                </div>
              </div>
            </div>
            <div className="row solution-bottom">
              <div className="col-md-4">
                <div className="solution-items">
                  <img src="images/security.png" alt="" />
                  <h4>Enhanced security standards</h4>
                  <p>SKU Markets has done all necessary steps to secure users access keys and credentials data by applying enterprise-grade security standards.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="solution-items">
                  <img src="images/fee.png" alt="" />
                  <h4>No Additional Fees</h4>
                  <p>SKU Markets does not charge any additional fees. For more information about our subscription model, please review our Pricing section.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="solution-items">
                  <img src="images/privacy.png" alt="" />
                  <h4>We Respect Your Privacy</h4>
                  <p>SKU Markets Does not share personal user’s data with third parties or data associated with user’s activity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <Faq />

      <div className="" id="price">
        <div className="container">
          <div className="row section-heading">
            <h3 className="text-bold text-black">Pricing Plan</h3>
            <p className="price-p fs-6">
              Start with one of our preselected plans to analyse & monitors Top
              Ranked & Trendning SKUs. <br />
              You can save 20% by choosing Annually subscription
            </p>
          </div>
          <div className="row">
            <div className="d-flex  align-items-center col-md-12 justify-content-center text-center price-button">
              <font style={{ marginRight: "10px" }}>Monthly</font>


              <label className="switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>


              <font style={{ marginLeft: "10px" }}>Annually</font>
            </div>
          </div>
          <div className="row d-flex flex-column flex-lg-row justify-content-center">
            <div className="box-width first-price px-0">
              <div className="pricingTable pt-4">
                <div className="pricingTable-header">
                  <h3 className=" fs-5 text-black">Launch</h3>
                  <p>
                    Perfect for startups and <br />
                    growing businesses
                  </p>

                  <div className="price-value">
                    {parentCalc(150)}/mo
                    <span className="month"></span>
                  </div>
                  <div className="pricingTable-signup">
                    <a href="#">Get Started Now</a>
                  </div>

                  <h6>
                    Up to 25,000 Top Ranked SKUs <br />
                    Cross Countries & Categoriea
                  </h6>
                </div>

                <div className="pricing-content">
                  <ul>
                    <li>Track & Alert SKUs</li>
                    <li>Max, Min Prices & SKUs Rating</li>
                    <li>Expected Trade vloume & SOH</li>
                    <li>Estimated Market Capital</li>
                    <li>Opportunities & Competitors</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-width px-0">
              <div className="pricingTable green pt-4">
                <div className="pricingTable-header">
                  <h3 className="">Grow</h3>

                  <p>Ideal for small to medium-sized organizations</p>

                  <div className="price-value">
                    SAR {parentCalc(250)}/mo
                    <span className="month"> </span>
                  </div>

                  <div className="pricingTable-signup">
                    <a href="/">Get Started Now</a>
                  </div>

                  <h6>
                    Up to 50,000 Top Ranked SKUs <br />
                    Cross Countries & Categoriea
                  </h6>
                </div>

                <div className="pricing-content">
                  <ul>
                    <li>Track & Alert SKUs</li>
                    <li>Max, Min Prices & SKUs Rating</li>
                    <li>Expected Trade vloume & SOH</li>
                    <li>Estimated Market Capital</li>
                    <li>Opportunities & Competitors</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-width px-0">
              <div className="pricingTable blue pt-4">
                <div className="pricingTable-header">

                  <h3 className="">Business</h3>

                  <p>
                    Designed for higher volumes <br />
                    organizations
                  </p>

                  <div className="price-value">
                    SAR {parentCalc(400)}/mo
                    <span className="month">
                      <div className="pricingTable-signup">
                        <a href="/">Get Started Now</a>
                      </div>
                    </span>
                  </div>
                  <h6>
                    Up to 100,000 Top Ranked SKUs <br />
                    Cross Countries & Categoriea
                  </h6>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Grow Plan +</li>
                    <li>Your SKUs Buybox Prices Management</li>
                    <li>Your SKUs Stock Management</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-width px-0 position-relative">
              <div className="pricingTable red pt-4">
                <div className="pricingTable-header ">
                  <span style={{ color: 'white', top: '0', left: '0', position: 'absolute', padding: '3px', background: '#A9A9A9', borderRadius: '5px', background: '#A9A9A9', paddingLeft: '8px', paddingRight: '13px', fontWeight: 'bold' }}>soon!</span>
                  <h3 className="">Enterprise</h3>

                  <p>
                    Customized for specific <br />
                    organisation SKUs
                  </p>

                  <div className="price-value">
                    Contact Us <span className="month"> </span>
                  </div>
                  <div className="pricingTable-signup">
                    <a href="https://api.whatsapp.com/send?phone=966570044545">Whatsapp Us</a>
                  </div>
                  <h6 style={{ paddingTop: "25px" }}>
                    Up to Unlimited SKUs <br />
                    Cross Countries & Categoriea
                  </h6>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Business Plan +</li>
                    <li>Ecommerce Platforms & Shopping Carts Integration</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="box-width px-0 position-relative">
              <div className="pricingTable red pt-4">
                <div className="pricingTable-header ">
                  <span style={{ color: 'white', top: '0', left: '0', position: 'absolute', padding: '3px', background: '#A9A9A9', borderRadius: '5px', background: '#A9A9A9', paddingLeft: '8px', paddingRight: '13px', fontWeight: 'bold' }}>soon!</span>
                  <h3 className="">Enterprise +</h3>

                  <p>
                    Customized for specific <br />
                    organisation SKUs
                  </p>

                  <div className="price-value">
                    Contact Us <span className="month"> </span>
                  </div>
                  <div className="pricingTable-signup">
                    <a href="https://api.whatsapp.com/send?phone=966570044545">Whatsapp Us</a>
                  </div>
                  <h6 style={{ paddingTop: "25px" }}>
                    Up to Unlimited SKUs <br />
                    Cross Countries & Categoriea
                  </h6>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>Enterprise Plan +</li>
                    <li>A Complete Sales Channels Management Platform</li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      <div className="contact pt-5" id="contact">
        <div className="container-fluid mb-5">
          <div className="container">
            <div className="row text-center contact-area section-heading">
              <h3 className="text-black">Contact Us</h3>
            </div>
            <div className="row text-center footer-mobaile">
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    href="mailto:support@skumarket.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-regular fa-envelope c-icon"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center justify-content-center">
                  <a
                    href="https://api.whatsapp.com/send?phone=966570044545"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i
                      className="fa-brands fa-whatsapp c-icon"
                      style={{ marginRight: "10px" }}
                    ></i>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex align-items-center contact-icon justify-content-center social-icon">
                  <a
                    style={{ marginRight: "50px" }}
                    href="https://www.linkedin.com/company/sku-markets"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fas-fa-solid fa-linkedin-in c-icon"></i>
                  </a>
                  <a
                    href="https://twitter.com/SKUmarkets"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-twitter c-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
