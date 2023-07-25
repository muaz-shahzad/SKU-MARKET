import React, { useState } from "react";
import Marquee from "components/common/Marquee";
import BuyBoxPriceStatus from "components/ProductDetail/BuyBoxPriceStatus";
import Footer from "components/ProductDetail/Footer";
import Header from "components/ProductDetail/Header";
import ProductCart from "components/ProductDetail/ProductCart";
import { useGetProductDetailQuery } from "features/product/productAPI";
import { useParams } from "react-router-dom";
import SkuProduct from "../../src/assets/images/sku-product.png";
import Button from '@mui/material/Button';
import SFlagRing from "../../src/assets/images/noon-saudi.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ChartDtlPage from "components/ProductDetail/ChartDtlPage";
import NoonPng from "../../src/assets/images/ring.png";
import MarketplaceCompetitors from "components/ProductDetail/MarketplaceCompetitors";
import ComparableTradeVolume from "components/ProductDetail/ComparableTradeVolume";
import "../components/ProductDetail/index.css";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from 'react-bootstrap/Modal';
import AddIcon from '@mui/icons-material/Add';

const ProductDetail = (props) => {


  const { productId } = useParams();
  const { data, isSuccess } = useGetProductDetailQuery(productId);



  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "white",
      border: "1px solid #dadde9",
      color: "black",
    },
  }));


  return (
    <div className="bg-white">
      <Header />
      <div className="mt-3" />
      <Marquee />

      <div className="container-width product">
        <div className="row product-card d-flex flex-column flex-xl-row">
          <div className="col-md-12 col-xl-7">
            <div className="product-card-left section-padding">
              <div className="row">
                <div className="col-md-4">
                  <div className="product-left">
                    <div className="row">
                      <div className="col-md-4 col-4">
                        <img src={SkuProduct} width="80px" height="70px" />
                      </div>
                      <div className="col-md-8 col-8 d-flex product-logo-row">
                        <div className="row product-id ">
                          <a
                            className="fs-6"
                            href="https://www.noon.com/N35997789A/p/"
                            target="_blank"
                          >
                            N35997789A
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-9 col-9">
                        <span className="text-bold">Rank</span>{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </div>

                      <div className="col-md-3 col-3 justify-content-between d-flex">
                        <span>1</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-9 col-9">
                        <span className="text-bold">Rate</span>{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </div>
                      <div className="col-md-3 col-3 d-flex product-logo-row">
                        <span>4.7</span>
                      </div>
                    </div>

                    <div className="row d-flex align-items-center">
                      <div className="col-md-9 col-9">
                        <span className="text-bold">SKU Marketplace</span>{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </div>
                      <div
                        className="col-md-3 col-3 d-flex product-logo-row"
                        style={{ height: "10px" }}
                      >
                        <a href="//">
                          <img
                            src={SFlagRing}
                            width="60px"
                            height="40px"
                            className="marketplace-logo-product "
                          />
                        </a>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-9 col-9">
                        <span className="text-bold">No. Of Sellers</span>{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </div>
                      <div className="col-md-3 col-3 d-flex product-logo-row">
                        <span>34</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-4 col-4">
                        <span className="text-bold">Tags</span>
                      </div>
                      <div className="col-md-8 col-8">
                        <span>Trending SKU</span>
                        <br />
                        <span>Cat Top 100</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <div className="product-middle">
                    <div className="row alert-icon">
                      <div
                        className="col-md-6 col-6 watch-modal text-center text-lg-right"
                        onclick="myFunction()"
                        style={{ textAlign: "right" }}
                      >
                        <i
                          className="fa-regular fa-star watch-modal-down relative" style={{position: 'relative'}}
                          id="myDIV"
                        ></i>
                        
                        <i
                          onClick={handleShow}
                          className="fa-regular fa-star"
                          onclick="standard-watch(myDIV)"
                        ></i>
                        {/* <!-- Trigger/Open The Modal --> */}
                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="absolute productDoubleModelWidth top-0 d-flex align-items-center jsutify-content-center" show={show} onHide={handleClose}>

                          <Modal.Header closeButton >
                            <Modal.Title className="">Select Watchlist</Modal.Title>
                          </Modal.Header>
                          <div className="modal-body">
                            <AddIcon style={{ color: "blue" }}
                            onClick={handleShow1}
                            />
                            <span className="ms-1">Add New Watchlist</span>
                          </div>
                          <Modal.Footer>
                          </Modal.Footer>
                        </Modal>
                        {/* ////////////////// */}
                        <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="absolute top-0 bottom-0 m-auto d-flex align-items-center jsutify-content-center" show={show1} onHide={handleClose1}>
                          <Modal.Header closeButton>
                            <Modal.Title className="modeltitle">New watchlist</Modal.Title>
                          </Modal.Header>
                          <div className="modal-body">
                            <div className="new-watch-modal">
                              <input type="text" placeholder="Enter Watchlist Title" />
                            </div>
                          </div>
                          <Modal.Footer>
                            <Button variant="contained" className="btn1" onClick={handleClose1}>Create</Button>
                            <Button className="btn2" variant="contained" onClick={handleClose1}>Close</Button>

                          </Modal.Footer>
                        </Modal>
                      </div>
                      <div
                        id="standard-watch"
                        className="modal fade"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="standard-modalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title" id="standard-modalLabel">
                                New watchlist
                              </h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="new-watch-modal">
                                <input
                                  type="text"
                                  placeholder="Enter Watchlist Title"
                                />
                              </div>
                            </div>
                            <div className="modal-footer">
                              <button type="button" className="btn btn-primary">
                                Create
                              </button>
                              <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-6 alert-bell">
                        <i
                          className="fa-regular fa-bell export"
                          data-bs-toggle="modal"
                          data-bs-target="#standard-modal"
                          style={{ cursor: "pointer" }}
                        ></i>
                      </div>

                      <div
                        id="standard-modal"
                        className="modal fade"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="standard-modalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h4 className="modal-title" id="standard-modalLabel">
                                Add New Alert
                              </h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="row d-flex justify-content-between">
                                <div className="col-md-6 modal-0">
                                  <label htmlFor="">Platform</label>
                                  <br />
                                  <select
                                    className="common-modal "
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">Noon</option>
                                    <option value="">Amazon</option>
                                  </select>
                                </div>
                                <div className="col-md-6 modal-0">
                                  <label htmlFor="">Platform Country</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="0">Select Country</option>
                                    <option value="AF">Afghanistan</option>
                                    <option value="AL">Albania</option>
                                    <option value="DZ">Algeria</option>
                                    <option value="AS">American Samoa</option>
                                    <option value="AD">Andorra</option>
                                    <option value="AO">Angola</option>
                                    <option value="AI">Anguilla</option>
                                    <option value="AQ">Antarctica</option>
                                    <option value="AR">Argentina</option>
                                    <option value="AM">Armenia</option>
                                    <option value="AW">Aruba</option>
                                    <option value="AU">Australia</option>
                                    <option value="AT">Austria</option>
                                    <option value="AZ">Azerbaijan</option>
                                    <option value="BS">Bahamas</option>
                                    <option value="BH">Bahrain</option>
                                    <option value="BD">Bangladesh</option>
                                    <option value="BB">Barbados</option>
                                    <option value="BY">Belarus</option>
                                    <option value="BE">Belgium</option>
                                    <option value="BZ">Belize</option>
                                    <option value="BJ">Benin</option>
                                    <option value="BM">Bermuda</option>
                                    <option value="BT">Bhutan</option>
                                    <option value="BO">Bolivia</option>
                                    <option value="BW">Botswana</option>
                                    <option value="BV">Bouvet Island</option>
                                    <option value="BR">Brazil</option>
                                    <option value="BN">
                                      Brunei Darussalam
                                    </option>
                                    <option value="BG">Bulgaria</option>
                                    <option value="BF">Burkina Faso</option>
                                    <option value="BI">Burundi</option>
                                    <option value="KH">Cambodia</option>
                                    <option value="CM">Cameroon</option>
                                    <option value="CA">Canada</option>
                                    <option value="CV">Cape Verde</option>
                                    <option value="KY">Cayman Islands</option>
                                    <option value="CF">
                                      Central African Republic
                                    </option>
                                    <option value="TD">Chad</option>
                                    <option value="CL">Chile</option>
                                    <option value="CN">China</option>
                                    <option value="CX">Christmas Island</option>
                                    <option value="CC">
                                      Cocos (Keeling) Islands
                                    </option>
                                    <option value="CO">Colombia</option>
                                    <option value="KM">Comoros</option>
                                    <option value="CG">Congo</option>
                                    <option value="CK">Cook Islands</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="CI">Cote d'Ivoire</option>
                                    <option value="HR">
                                      Croatia (Hrvatska)
                                    </option>
                                    <option value="CU">Cuba</option>
                                    <option value="CY">Cyprus</option>
                                    <option value="CZ">Czech Republic</option>
                                    <option value="DK">Denmark</option>
                                    <option value="DJ">Djibouti</option>
                                    <option value="DM">Dominica</option>
                                    <option value="DO">
                                      Dominican Republic
                                    </option>
                                    <option value="EC">Ecuador</option>
                                    <option value="EG">Egypt</option>
                                    <option value="SV">El Salvador</option>
                                    <option value="GQ">
                                      Equatorial Guinea
                                    </option>
                                    <option value="ER">Eritrea</option>
                                    <option value="EE">Estonia</option>
                                    <option value="ET">Ethiopia</option>
                                    <option value="FK">
                                      Falkland Islands (Malvinas)
                                    </option>
                                    <option value="FO">Faroe Islands</option>
                                    <option value="FJ">Fiji</option>
                                    <option value="FI">Finland</option>
                                    <option value="FR">France</option>
                                    <option value="GF">French Guiana</option>
                                    <option value="PF">French Polynesia</option>
                                    <option value="GA">Gabon</option>
                                    <option value="GM">Gambia</option>
                                    <option value="GE">Georgia</option>
                                    <option value="DE">Germany</option>
                                    <option value="GH">Ghana</option>
                                    <option value="GI">Gibraltar</option>
                                    <option value="GR">Greece</option>
                                    <option value="GL">Greenland</option>
                                    <option value="GD">Grenada</option>
                                    <option value="GP">Guadeloupe</option>
                                    <option value="GU">Guam</option>
                                    <option value="GT">Guatemala</option>
                                    <option value="GN">Guinea</option>
                                    <option value="GW">Guinea-Bissau</option>
                                    <option value="GY">Guyana</option>
                                    <option value="HT">Haiti</option>
                                    <option value="HN">Honduras</option>
                                    <option value="HK">Hong Kong</option>
                                    <option value="HU">Hungary</option>
                                    <option value="IS">Iceland</option>
                                    <option value="IN">India</option>
                                    <option value="ID">Indonesia</option>
                                    <option value="IQ">Iraq</option>
                                    <option value="IE">Ireland</option>
                                    <option value="IL">Israel</option>
                                    <option value="IT">Italy</option>
                                    <option value="JM">Jamaica</option>
                                    <option value="JP">Japan</option>
                                    <option value="JO">Jordan</option>
                                    <option value="KZ">Kazakhstan</option>
                                    <option value="KE">Kenya</option>
                                    <option value="KI">Kiribati</option>
                                    <option value="KR">
                                      Korea, Republic of
                                    </option>
                                    <option value="KW">Kuwait</option>
                                    <option value="KG">Kyrgyzstan</option>
                                    <option value="LV">Latvia</option>
                                    <option value="LB">Lebanon</option>
                                    <option value="LS">Lesotho</option>
                                    <option value="LR">Liberia</option>
                                    <option value="LY">
                                      Libyan Arab Jamahiriya
                                    </option>
                                    <option value="LI">Liechtenstein</option>
                                    <option value="LT">Lithuania</option>
                                    <option value="LU">Luxembourg</option>
                                    <option value="MO">Macau</option>
                                    <option value="MG">Madagascar</option>
                                    <option value="MW">Malawi</option>
                                    <option value="MY">Malaysia</option>
                                    <option value="MV">Maldives</option>
                                    <option value="ML">Mali</option>
                                    <option value="MT">Malta</option>
                                    <option value="MH">Marshall Islands</option>
                                    <option value="MQ">Martinique</option>
                                    <option value="MR">Mauritania</option>
                                    <option value="MU">Mauritius</option>
                                    <option value="YT">Mayotte</option>
                                    <option value="MX">Mexico</option>
                                    <option value="MD">
                                      Moldova, Republic of
                                    </option>
                                    <option value="MC">Monaco</option>
                                    <option value="MN">Mongolia</option>
                                    <option value="MS">Montserrat</option>
                                    <option value="MA">Morocco</option>
                                    <option value="MZ">Mozambique</option>
                                    <option value="MM">Myanmar</option>
                                    <option value="NA">Namibia</option>
                                    <option value="NR">Nauru</option>
                                    <option value="NP">Nepal</option>
                                    <option value="NL">Netherlands</option>
                                    <option value="AN">
                                      Netherlands Antilles
                                    </option>
                                    <option value="NC">New Caledonia</option>
                                    <option value="NZ">New Zealand</option>
                                    <option value="NI">Nicaragua</option>
                                    <option value="NE">Niger</option>
                                    <option value="NG">Nigeria</option>
                                    <option value="NU">Niue</option>
                                    <option value="NF">Norfolk Island</option>
                                    <option value="MP">
                                      Northern Mariana Islands
                                    </option>
                                    <option value="NO">Norway</option>
                                    <option value="OM">Oman</option>
                                    <option value="PW">Palau</option>
                                    <option value="PA">Panama</option>
                                    <option value="PG">Papua New Guinea</option>
                                    <option value="PY">Paraguay</option>
                                    <option value="PE">Peru</option>
                                    <option value="PH">Philippines</option>
                                    <option value="PN">Pitcairn</option>
                                    <option value="PL">Poland</option>
                                    <option value="PT">Portugal</option>
                                    <option value="PR">Puerto Rico</option>
                                    <option value="QA">Qatar</option>
                                    <option value="RE">Reunion</option>
                                    <option value="RO">Romania</option>
                                    <option value="RU">
                                      Russian Federation
                                    </option>
                                    <option value="RW">Rwanda</option>
                                    <option value="KN">
                                      Saint Kitts and Nevis
                                    </option>
                                    <option value="LC">Saint LUCIA</option>
                                    <option value="WS">Samoa</option>
                                    <option value="SM">San Marino</option>
                                    <option value="ST">
                                      Sao Tome and Principe
                                    </option>
                                    <option value="SA">Saudi Arabia</option>
                                    <option value="SN">Senegal</option>
                                    <option value="SC">Seychelles</option>
                                    <option value="SL">Sierra Leone</option>
                                    <option value="SG">Singapore</option>
                                    <option value="SK">
                                      Slovakia (Slovak Republic)
                                    </option>
                                    <option value="SI">Slovenia</option>
                                    <option value="SB">Solomon Islands</option>
                                    <option value="SO">Somalia</option>
                                    <option value="ZA">South Africa</option>
                                    <option value="ES">Spain</option>
                                    <option value="LK">Sri Lanka</option>
                                    <option value="SH">St. Helena</option>
                                    <option value="PM">
                                      St. Pierre and Miquelon
                                    </option>
                                    <option value="SD">Sudan</option>
                                    <option value="SR">Suriname</option>
                                    <option value="SZ">Swaziland</option>
                                    <option value="SE">Sweden</option>
                                    <option value="CH">Switzerland</option>
                                    <option value="SY">
                                      Syrian Arab Republic
                                    </option>
                                    <option value="TW">
                                      Taiwan, Province of China
                                    </option>
                                    <option value="TJ">Tajikistan</option>
                                    <option value="TZ">
                                      Tanzania, United Republic of
                                    </option>
                                    <option value="TH">Thailand</option>
                                    <option value="TG">Togo</option>
                                    <option value="TK">Tokelau</option>
                                    <option value="TO">Tonga</option>
                                    <option value="TT">
                                      Trinidad and Tobago
                                    </option>
                                    <option value="TN">Tunisia</option>
                                    <option value="TR">Turkey</option>
                                    <option value="TM">Turkmenistan</option>
                                    <option value="TC">
                                      Turks and Caicos Islands
                                    </option>
                                    <option value="TV">Tuvalu</option>
                                    <option value="UG">Uganda</option>
                                    <option value="UA">Ukraine</option>
                                    <option value="AE">
                                      United Arab Emirates
                                    </option>
                                    <option value="GB">United Kingdom</option>
                                    <option value="US">United States</option>
                                    <option value="UY">Uruguay</option>
                                    <option value="UZ">Uzbekistan</option>
                                    <option value="VU">Vanuatu</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="VN">Viet Nam</option>
                                    <option value="VG">
                                      Virgin Islands (British)
                                    </option>
                                    <option value="VI">
                                      Virgin Islands (U.S.)
                                    </option>
                                    <option value="WF">
                                      Wallis and Futuna Islands
                                    </option>
                                    <option value="EH">Western Sahara</option>
                                    <option value="YE">Yemen</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZW">Zimbabwe</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Category</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">Baby</option>
                                    <option value="">
                                      All categories available{" "}
                                    </option>
                                  </select>
                                </div>
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">SKU Type</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">Noon</option>
                                    <option value="">
                                      All type available{" "}
                                    </option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">SKU Sub- Type</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">
                                      All Subtype available{" "}
                                    </option>
                                    <option value="">Amazon</option>
                                  </select>
                                </div>
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Fulfilment SKU Type</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">
                                      All Fulfilment type available{" "}
                                    </option>
                                    <option value="">Amazon</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Brand</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">Follow</option>
                                    <option value="">
                                      All brand Available{" "}
                                    </option>
                                  </select>
                                </div>
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">SKU/ ASIN</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">Noon</option>
                                    <option value="">Amazon</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Alert type</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="">Price Range</option>
                                    <option value="">Price Moves Above</option>
                                    <option value="">Price Moves Down</option>
                                    <option value="">Stock Range</option>
                                    <option value="">Stock Moves Above</option>
                                    <option value="">Stock Moves Down</option>
                                    <option value="">Stores Range</option>
                                    <option value="">Stores Moves Above</option>
                                    <option value="">Stores Moves Down</option>
                                    <option value="">
                                      Price Change Absolute (Abs)
                                    </option>
                                    <option value="">
                                      Stock Change Absolute (Abs)
                                    </option>
                                    <option value="">SKU to Stock</option>
                                    <option value="">SKU to Fulfilment</option>
                                  </select>
                                </div>
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Description</label>
                                  <br />
                                  <span>
                                    Notifies when price exiting the range.
                                  </span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Price moves below</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="">Price Range</option>
                                    <option value="">Price Moves Above</option>
                                  </select>
                                </div>
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Price moves above</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="Platform">Noon</option>
                                    <option value="">Amazon</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Frequency</label>
                                  <br />
                                  <select
                                    className="common-modal"
                                    name="Platform"
                                    id=""
                                  >
                                    <option value="">Price Range</option>
                                    <option value="">Price Moves Above</option>
                                  </select>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-6 modal-1">
                                  <label htmlFor="">Comment</label>
                                  <br />
                                  <input type="tex-box" className="common-modal" />
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-12 modal-1">
                                  <span style={{ paddingRight: "10px" }}>
                                    Delivery Method
                                  </span>
                                  <input
                                    style={{ paddingRight: "10px" }}
                                    type="checkbox"
                                  />
                                  <span style={{ paddingRight: "10px" }}>
                                    Whatsapp
                                  </span>
                                  <input type="checkbox" />
                                  <span>Email</span>
                                </div>
                              </div>

                              <div className="row">
                                <div className="col-md-12 modal-1">
                                  <input
                                    type="text-box"
                                    placeholder="summary"
                                    style={{
                                      padding: "7px",
                                      width: "100%",
                                      borderColor: "#EFF2F5",
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer productdetailModelFooter">
                              {/* <!-- <span className="d-flex" style="text-align: left !important;">Total SKUs: 688</span> --> */}
                              <button type="button" className="btn addalertBtn btn-primary" style={{color: 'white !mportant'}}>
                                Add Alert
                              </button>
                              <button
                                type="button"
                                className="btn btn-light"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row" style={{ paddingTop: "40px" }}>
                      <div className="col-md-12">
                        <span>3,943 Watchlists</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <span>10 price Alerts</span>
                      </div>
                    </div>

                    <div className="row" style={{ paddingTop: "40px" }}>
                      <div className="col-md-12 text-bold">
                        <span>Updated: 21 minutes ago</span>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12"></div>
                    </div>
                  </div>
                </div>

                <div className="col-md-5">
                  <div className="product-right">
                    <div className="row text-bold">
                      <span style={{ fontSize: "12px" }}>
                        Buybox Sale Price{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </span>
                    </div>

                    <div
                      className="row"
                      style={{ paddingTop: "10px", paddingBottom: "15px" }}
                    >
                      <span>
                        AED <font className="rate-big">18,87 </font>{" "}
                        <font className="rate-green">3015%</font>
                      </span>
                    </div>
                  </div>

                  <div className="styled__PriceBarContainer-sc-1atf4dj-2 iDyHKc text-bold">
                    <div className="styled__Row-sc-1atf4dj-3 kLGbRb">
                      Low
                      <div
                        style={{ height: "6px", width: "70%" }}
                        className="styled__ProgressBarComponent-sc-tiak8-0 fBqrhZ"
                      >
                        <div className="progressProductDetails mx-3">
                          <div
                            className="progress-bar-productDetails"
                            role="progressbar"
                            style={{ width: "25%" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="80"
                          >
                            {" "}
                          </div>
                        </div>
                      </div>
                      High
                      <div style={{ marginLeft: "5px" }}>
                        <button className="label__Label-sc-1p5pknx-0 styled__StyledHistoricalButton-sc-zcqu0d-0 iBByqe kqciMg rate-btn">
                          24H
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row" style={{ paddingTop: "10px" }}>
                    <div className="col-md-8">
                      <span>AED 17,87</span>
                    </div>
                    <div className="col-md-4">
                      <span>AED 20,87</span>
                    </div>
                  </div>

                  <div
                    className="row d-flex product-soh"
                    style={{ paddingBottom: "0px" }}
                  >
                    <div className="col-md-9 ">
                      <span className="text-bold ">
                        Estimated SOH{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </span>
                    </div>
                    <div className="col-md-3 d-flex product-logo-row">
                      <span>4300</span>
                    </div>
                  </div>

                  <div className="row d-flex">
                    <div className="col-md-9">
                      <span className="text-bold ">
                        Estimated SU Last 24h{" "}
                        <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                      </span>
                    </div>
                    <div className="col-md-3 d-flex product-logo-row">
                      <span>120</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row table-footer">
              <span>
                Designed for users to instantly see the changes that occur on
                the SKU and predicts what will come next.
              </span>
            </div>
          </div>

          <div className="col-md-12 col-xl-5 pt-3 pt-lg-0">
            <div className="product-card-right mb-2 pb-4 pt-5 section-padding">
              <div className="row">
                <div className="col-md-4 col-4">
                  <span className="text-bold ">Sku Title: </span>
                  <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                </div>
                <div className="col-md-8 col-8">
                  <span>Portable Diaper Organizer</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-4">
                  <span className="text-bold ">Sku Category: </span>
                  <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                </div>
                <div className="col-md-8 col-8">
                  <a href="//">
                    <span>Baby Products</span>
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-4">
                  <span className="text-bold ">Sku Type: </span>
                  <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                </div>
                <div className="col-md-8 col-8">
                  <span>Diapering</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-4">
                  <span className="text-bold ">Sku Sub-Type: </span>
                  <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                </div>
                <div className="col-md-8 col-8">
                  <span>Diaper Stackers & Organisers</span>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-4">
                  <span className="text-bold ">Sku Brand: </span>
                  <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                </div>
                <div className="col-md-8 col-8">
                  <a href="//">
                    <span>Beauenty</span>
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 col-4">
                  <span className="text-bold  ">Sku Description: </span>
                  <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
                </div>
                <div className="col-md-8 col-8">
                  <span>
                    The diaper has a strong t divider that is securely attached
                    to the sides and the bottom, and more.
                  </span>
                </div>
              </div>
            </div>
            <div className="row table-footer">
              <span>
                Designed for users to instantly see the SKU Description.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container-width d-flex flex-column flex-xl-row justify-content-between ">
        <div className="col-md-12 col-xl-8">
          <ChartDtlPage />
        </div>
        <div className="col-md-12 col-xl-4  pt-3 pt-lg-0">
          <div className="multi-right section-padding py-4 ms-0 ms-lg-4">
            <div className="row">
              <div className="col-md-12 text-center">
                <span className="text-bold" style={{ paddingBottom: "5px" }}>
                  SKU Analysis & Statistics
                </span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>E Marketplace cap </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">AED 60,090.00</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>Trade Volume </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">AED 60,090.00</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>Chg 24H </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="rate-red">-4.04%</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>ASP </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">AED 60,090.00</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>Vol (24h)/MCap </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">0.7924</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>SKU Status </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="rate-green">Live</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>DOH </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">44</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>ENR </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">AED 60,090.00</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>Max Investment </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">AED 60,090.00</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>Min Investment </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">AED 60,090.00</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>EQTI </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="">300</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>EM </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="rate-green">15%</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>E Opp to stock </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="rate-green">yes</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>E Opp To Fulfilment </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <span className="rate-green">Yes</span>
              </div>
            </div>
            <div className="row line-border">
              <div className="col-md-7 col-7 text-bold">
                <span>E Opp To Amazon Fulfilment </span>
                <Tooltip
                          title="And here's some amazing content. It's very engaging. Right?"placement="right"
                          arrow
                          style={{ backgroundColor: "white" }}
                        >
                          <InfoIcon style={{color: '#999999', fontSize: '14px'}}/>
                        </Tooltip>
              </div>
              <div className="col-md-5 col-5 text-center">
                <img src={NoonPng} alt="" width="15px" height="15px" />
              </div>
            </div>
            {/* <!-- <div className="row line-border">
				<div className="col-md-7 col-7 text-bold">
					<span>E Opp to Noon Fulfilment  </span><i className="fa-solid fa-circle-info info-icon" tabindex="0" className="btn btn-dark" data-bs-toggle="popover" data-bs-trigger="hover" data-bs-content="And here's some amazing content. It's very engaging. Right?"></i>
				</div>
				<div className="col-md-5 col-5 text-center">
					<span className="rate-red">No</span>
				</div>
			</div> --> */}
            <div className="row">
              <div className="col-md-12 text-center text-bold">
                <span className="multi-right-bottom">Trading Activity</span>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-3 text-bold">
                <span>40% Demand</span>
              </div>
              <div className="col-md-6 buy-progress-bar d-flex justify-content-center py-3 py-lg-0">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <div className="col-md-3 text-bold">
                <span className="text-center">60% Supply</span>
              </div>
            </div>
          </div>
          <div className="row table-footer ms-0 ms-lg-3">
            <span>Designed for users to instantly see the statistics.</span>
          </div>
        </div>
      </div>
      <div>
        <MarketplaceCompetitors />
      </div>
      <ComparableTradeVolume />
      <Footer />
    </div>
  );
};

export default ProductDetail;
