import React, { useState } from "react";
import "./dashboard.css";
import { styled } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import SkuProduct from "../../assets/images/sku-product.png";
import SFlagRing from "../../assets/images/noon-saudi.svg";
import AmazonPic from "../../assets/images/amazon-uae.svg";
import DashboardGreenChar from "../../assets/images/dashboardgreenchart.png";
import LineChart from "../../assets/images/lineChart.PNG";
import AddIcon from "@mui/icons-material/Add";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bubble } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const data = {
  datasets: [
    {
      label: "Red dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Blue dataset",
      data: Array.from({ length: 50 }, () => ({
        x: faker.datatype.number({ min: -100, max: 100 }),
        y: faker.datatype.number({ min: -100, max: 100 }),
        r: faker.datatype.number({ min: 5, max: 20 }),
      })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const DashboardHero = (props) => {
  const [showTwo, setShowTwo] = useState(false);
  const handleCloseTwo = () => setShowTwo(false);
  const handleShowTwo = () => setShowTwo(true);

  const [showOne, setShowOne] = useState(false);
  const handleCloseOne = () => setShowOne(false);
  const handleShowOne = () => setShowOne(true);

  const [showWatchlistSecond, setshowWatchlistSecond] = useState(false);
  const handleCloseWatchlist = () => setshowWatchlistSecond(false);
  const handleShowWatchlist = () => setshowWatchlistSecond(true);

  // tree dots popup
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  const [open9, setOpen9] = useState(false);
  const [open10, setOpen10] = useState(false);
  const [ShowWthcListPopup, setShowWthcListPopup] = useState(false);
  const [openSmallPopupProduct ,setopenSmallPopupProduct] =useState(false)
  const [showadd, setShowadd] = useState(false);
  const handleCloseadd = () => setShowadd(false);
  const handleShowadd = () => setShowadd(true);

  const [showadd1, setShowadd1] = useState(false);
  const handleCloseadd1 = () => setShowadd1(false);
  const handleShowadd1 = () => setShowadd1(true);
  return (
    <div className="dashboardHeroMain container-width">
      <div className="d-flex justify-content-between flex-column flex-xl-row">
        <div className="heroLeft">
          <div className="d-flex justify-content-between flex-column flex-xl-row align-items-center">
            <div className="heroBoxWidth dash-Card me-0 me-lg-3 mt-3 mt-lg-0">
              <div className="dash-card-body">
                <div className=" float-end" style={{ position: "relative" }}>
                  <a
                    onClick={() => setOpen(!open)}
                    className="arrow-none card-drop"
                  >
                    <i
                      className="mdi mdi-dots-horizontal"
                      style={{ fontSize: "22px", color: "blue" }}
                    ></i>
                  </a>
                  {open && (
                    <div
                      className="threeDotsToggle"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="mdi mdi-cached me-1"></i>Refresh
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="mdi mdi-circle-edit-outline me-1"></i>
                        Edit
                      </a>

                      <a
                        href="javascript:void(0);"
                        className="dropdown-item text-danger"
                      >
                        <i className="mdi mdi-delete-outline me-1"></i>Remove
                      </a>
                    </div>
                  )}
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="avatar-sm rounded">
                      <span className="avatar-title  h3 my-0 text-primary rounded">
                        <img
                          src={SkuProduct}
                          alt=""
                          width="50px;"
                          height="50px;"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ">
                    <img
                      src={SFlagRing}
                      alt=""
                      width="40px;"
                      height="40px;"
                      style={{ width: "58px" }}
                    />

                    <br />
                    <a href="/" className="mt-0 mb-1 font-14">
                      N35997789A
                    </a>
                    <br />
                    <span className="mb-0 rate-green rateFont">
                      <i className="mdi mdi-arrow-up-bold text-success "></i> 4.04%
                    </span>
                  </div>
                </div>

                <div className="row align-items-end justify-content-between top-rate-left">
                  <div className="col-sm-7">
                    <h4 className="mt-0 text-muted fw-semibold mb-1 title-size">
                      Buybox Sale Price
                    </h4>
                    <p
                      className="text-bold mb-0 textGray"
                      style={{ fontSize: "10px" }}
                    >
                      SAR 185
                    </p>
                  </div>

                  <div className="col-sm-5">
                    <img src={LineChart} style={{ width: "100%" }} />
                    {/* <div className="text-end">
                      <div id="currency-btc-chart" data-colors="#727cf5">
                       
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="heroBoxWidth dash-Card me-0 me-lg-3 mt-3 mt-lg-0">
              <div className="dash-card-body">
                <div className=" float-end" style={{ position: "relative" }}>
                  <a
                    onClick={() => setOpen2(!open2)}
                    className="arrow-none card-drop"
                  >
                    <i
                      className="mdi mdi-dots-horizontal"
                      style={{ fontSize: "22px", color: "blue" }}
                    ></i>
                  </a>
                  {open2 && (
                    <div
                      className="threeDotsToggle"
                      style={{ position: "absolute", right: "0" }}
                    >
                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="mdi mdi-cached me-1"></i>Refresh
                      </a>

                      <a href="javascript:void(0);" className="dropdown-item">
                        <i className="mdi mdi-circle-edit-outline me-1"></i>
                        Edit
                      </a>

                      <a
                        href="javascript:void(0);"
                        className="dropdown-item text-danger"
                      >
                        <i className="mdi mdi-delete-outline me-1"></i>Remove
                      </a>
                    </div>
                  )}
                </div>
                <div className="d-flex">
                  <div className="flex-shrink-0">
                    <div className="avatar-sm rounded">
                      <span className="avatar-title  h3 my-0 text-primary rounded">
                        <img
                          src={SkuProduct}
                          alt=""
                          width="50px;"
                          height="50px;"
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow-1 ms-2 ">
                    <img
                      src={SFlagRing}
                      alt=""
                      width="40px;"
                      height="40px;"
                      style={{ width: "58px" }}
                    />

                    <br />
                    <a href="/" className="mt-0 mb-1 font-14">
                      N35997789A
                    </a>
                    <br />
                    <span className="mb-0 rate-green rateFont">
                      <i className="mdi mdi-arrow-up-bold text-success "></i> 4.04%
                    </span>
                  </div>
                </div>

                <div className="row align-items-end justify-content-between top-rate-left">
                  <div className="col-sm-7">
                    <h4 className="mt-0 text-muted fw-semibold mb-1 title-size">
                      Buybox Sale Price
                    </h4>
                    <p
                      className="text-bold mb-0 textGray"
                      style={{ fontSize: "10px" }}
                    >
                      SAR 185
                    </p>
                  </div>

                  <div className="col-sm-5">
                    <div className="text-end">
                      <img src={LineChart} style={{ width: "100%" }} />
                      {/* <div className="text-end">
                      <div id="currency-btc-chart" data-colors="#727cf5">
                       
                      </div>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="heroBoxWidth me-0 me-lg-3 mt-3 mt-lg-0">
              <div className="add-card">
                <div className="add-card-in text-center" onClick={handleShowTwo}>
                  <i
                    className="fa-solid fa-plus-minus h6 my-0 textGray"
                    data-bs-toggle="modal"
                    data-bs-target="#standard-modal"
                    style={{ cursor: "pointer" }}
                  ></i>{" "}
                  <h4 className="font-16 mt-1 mb-0 d-block textGray">
                    Add New Alert
                  </h4>
                </div>
                {/* <!-- Trigger/Open The Modal --> */}
                <Modal
                  {...props}
                  aria-labelledby="contained-modal-title-vcenter"
                  className="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center"
                  showTwo={showTwo}
                  onHide={handleCloseTwo}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="modeltitle">
                      Choose SKU/ ASIN/ MPN
                    </Modal.Title>
                  </Modal.Header>
                  <div className="modal-body">
                    <div className="row d-flex justify-content-between">
                      <div className="col-md-6 modal-0">
                        <label htmlFor="">Platform</label>
                        <br />
                        <select className="common-modal " name="Platform" id="">
                          <option value="Platform">Noon</option>
                          <option value="">Amazon</option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-0">
                        <label htmlFor="">Platform Country</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
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
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Cote d'Ivoire</option>
                          <option value="HR">Croatia (Hrvatska)</option>
                          <option value="CU">Cuba</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
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
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libyan Arab Jamahiriya</option>
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
                          <option value="MD">Moldova, Republic of</option>
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
                          <option value="AN">Netherlands Antilles</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
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
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint LUCIA</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia (Slovak Republic)</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SH">St. Helena</option>
                          <option value="PM">St. Pierre and Miquelon</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands (British)</option>
                          <option value="VI">Virgin Islands (U.S.)</option>
                          <option value="WF">Wallis and Futuna Islands</option>
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
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Baby</option>
                          <option value="">All categories available </option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">SKU Type</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Noon</option>
                          <option value="">All type available </option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">SKU Sub- Type</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">
                            All Subtype available{" "}
                          </option>
                          <option value="">Amazon</option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">Fulfilment SKU Type</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
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
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Follow</option>
                          <option value="">All brand Available </option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">SKU/ ASIN/ MPN</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Noon</option>
                          <option value="">Amazon</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 modal-1">
                        <span>Total SKUs: 688</span>
                      </div>
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button
                      variant="contained"
                      className="btn1"
                      onClick={handleCloseTwo}
                    >
                      Save
                    </Button>
                    <Button
                      className="btn2"
                      variant="contained"
                      onClick={handleCloseTwo}
                    >
                      {" "}
                      Reset all Filters
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* //////////////////////////////////////////////////////////////////////////// */}

                {/* <!-- alert modal start here --> */}

                <div
                  className="export"
                  data-bs-toggle="modal"
                  data-bs-target="#standard-modal"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {/* <button type="button" data-bs-toggle="modal" data-bs-target="#standard-modal"></button> */}
                </div>

                <div
                  id="standard-modal textGray"
                  className="modal fade"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="standard-modalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4
                          className="modal-title textGray"
                          id="standard-modalLabel "
                        >
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
                            <select className="common-modal " name="Platform" id="">
                              <option value="Platform">Noon</option>
                              <option value="">Amazon</option>
                            </select>
                          </div>
                          <div className="col-md-6 modal-0">
                            <label htmlFor="">Platform Country</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
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
                              <option value="BN">Brunei Darussalam</option>
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
                              <option value="HR">Croatia (Hrvatska)</option>
                              <option value="CU">Cuba</option>
                              <option value="CY">Cyprus</option>
                              <option value="CZ">Czech Republic</option>
                              <option value="DK">Denmark</option>
                              <option value="DJ">Djibouti</option>
                              <option value="DM">Dominica</option>
                              <option value="DO">Dominican Republic</option>
                              <option value="EC">Ecuador</option>
                              <option value="EG">Egypt</option>
                              <option value="SV">El Salvador</option>
                              <option value="GQ">Equatorial Guinea</option>
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
                              <option value="KR">Korea, Republic of</option>
                              <option value="KW">Kuwait</option>
                              <option value="KG">Kyrgyzstan</option>
                              <option value="LV">Latvia</option>
                              <option value="LB">Lebanon</option>
                              <option value="LS">Lesotho</option>
                              <option value="LR">Liberia</option>
                              <option value="LY">Libyan Arab Jamahiriya</option>
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
                              <option value="MD">Moldova, Republic of</option>
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
                              <option value="AN">Netherlands Antilles</option>
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
                              <option value="RU">Russian Federation</option>
                              <option value="RW">Rwanda</option>
                              <option value="KN">Saint Kitts and Nevis</option>
                              <option value="LC">Saint LUCIA</option>
                              <option value="WS">Samoa</option>
                              <option value="SM">San Marino</option>
                              <option value="ST">Sao Tome and Principe</option>
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
                              <option value="SY">Syrian Arab Republic</option>
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
                              <option value="TT">Trinidad and Tobago</option>
                              <option value="TN">Tunisia</option>
                              <option value="TR">Turkey</option>
                              <option value="TM">Turkmenistan</option>
                              <option value="TC">
                                Turks and Caicos Islands
                              </option>
                              <option value="TV">Tuvalu</option>
                              <option value="UG">Uganda</option>
                              <option value="UA">Ukraine</option>
                              <option value="AE">United Arab Emirates</option>
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
                              <option value="VI">Virgin Islands (U.S.)</option>
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
                            <select className="common-modal" name="Platform" id="">
                              <option value="Platform">Baby</option>
                              <option value="">
                                All categories available{" "}
                              </option>
                            </select>
                          </div>
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">SKU Type</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
                              <option value="Platform">Noon</option>
                              <option value="">All type available </option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">SKU Sub- Type</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
                              <option value="Platform">
                                All Subtype available{" "}
                              </option>
                              <option value="">Amazon</option>
                            </select>
                          </div>
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">Fulfilment SKU Type</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
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
                            <select className="common-modal" name="Platform" id="">
                              <option value="Platform">Follow</option>
                              <option value="">All brand Available </option>
                            </select>
                          </div>
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">SKU/ ASIN</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
                              <option value="Platform">Noon</option>
                              <option value="">Amazon</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">Alert type</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
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
                            <span>Notifies when price exiting the range.</span>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">Price moves below</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
                              <option value="">Price Range</option>
                              <option value="">Price Moves Above</option>
                            </select>
                          </div>
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">Price moves above</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
                              <option value="Platform">Noon</option>
                              <option value="">Amazon</option>
                            </select>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 modal-1">
                            <label htmlFor="">Frequency</label>
                            <br />
                            <select className="common-modal" name="Platform" id="">
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
                      <div className="modal-footer">
                        {/* <!-- <span className="d-flex" style="text-align: left !important;">Total SKUs: 688</span> --> */}
                        <button type="button" className="btn btn-primary">
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
            </div>

            <div className="heroBoxWidth me-0 me-lg-3 mt-3 mt-lg-0">
              <div className="add-card relative">
                <div className="add-card-in text-center" onClick={handleShowTwo}>
                  <i
                    className="fa-solid fa-plus-minus h6 my-0 textGray"
                    data-bs-toggle="modal"
                    data-bs-target="#standard-modal"
                    style={{ cursor: "pointer" }}
                  ></i>{" "}
                  <h4 className="font-16 mt-1 mb-0 d-block textGray">
                    Add New Alert
                  </h4>
                </div>

                {/* <!-- Trigger/Open The Modal --> */}
                <Modal
                  {...props}
                  aria-labelledby="contained-modal-title-vcenter"
                  className="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center"
                  show={showTwo}
                  onHide={handleCloseTwo}
                >
                  <Modal.Header closeButton>
                    <Modal.Title className="modeltitle">
                      Choose SKU/ ASIN/ MPN
                    </Modal.Title>
                  </Modal.Header>
                  <div className="modal-body">
                    <div className="row d-flex justify-content-between">
                      <div className="col-md-6 modal-0">
                        <label htmlFor="">Platform</label>
                        <br />
                        <select className="common-modal " name="Platform" id="">
                          <option value="Platform">Noon</option>
                          <option value="">Amazon</option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-0">
                        <label htmlFor="">Platform Country</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
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
                          <option value="BN">Brunei Darussalam</option>
                          <option value="BG">Bulgaria</option>
                          <option value="BF">Burkina Faso</option>
                          <option value="BI">Burundi</option>
                          <option value="KH">Cambodia</option>
                          <option value="CM">Cameroon</option>
                          <option value="CA">Canada</option>
                          <option value="CV">Cape Verde</option>
                          <option value="KY">Cayman Islands</option>
                          <option value="CF">Central African Republic</option>
                          <option value="TD">Chad</option>
                          <option value="CL">Chile</option>
                          <option value="CN">China</option>
                          <option value="CX">Christmas Island</option>
                          <option value="CC">Cocos (Keeling) Islands</option>
                          <option value="CO">Colombia</option>
                          <option value="KM">Comoros</option>
                          <option value="CG">Congo</option>
                          <option value="CK">Cook Islands</option>
                          <option value="CR">Costa Rica</option>
                          <option value="CI">Cote d'Ivoire</option>
                          <option value="HR">Croatia (Hrvatska)</option>
                          <option value="CU">Cuba</option>
                          <option value="CY">Cyprus</option>
                          <option value="CZ">Czech Republic</option>
                          <option value="DK">Denmark</option>
                          <option value="DJ">Djibouti</option>
                          <option value="DM">Dominica</option>
                          <option value="DO">Dominican Republic</option>
                          <option value="EC">Ecuador</option>
                          <option value="EG">Egypt</option>
                          <option value="SV">El Salvador</option>
                          <option value="GQ">Equatorial Guinea</option>
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
                          <option value="KR">Korea, Republic of</option>
                          <option value="KW">Kuwait</option>
                          <option value="KG">Kyrgyzstan</option>
                          <option value="LV">Latvia</option>
                          <option value="LB">Lebanon</option>
                          <option value="LS">Lesotho</option>
                          <option value="LR">Liberia</option>
                          <option value="LY">Libyan Arab Jamahiriya</option>
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
                          <option value="MD">Moldova, Republic of</option>
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
                          <option value="AN">Netherlands Antilles</option>
                          <option value="NC">New Caledonia</option>
                          <option value="NZ">New Zealand</option>
                          <option value="NI">Nicaragua</option>
                          <option value="NE">Niger</option>
                          <option value="NG">Nigeria</option>
                          <option value="NU">Niue</option>
                          <option value="NF">Norfolk Island</option>
                          <option value="MP">Northern Mariana Islands</option>
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
                          <option value="RU">Russian Federation</option>
                          <option value="RW">Rwanda</option>
                          <option value="KN">Saint Kitts and Nevis</option>
                          <option value="LC">Saint LUCIA</option>
                          <option value="WS">Samoa</option>
                          <option value="SM">San Marino</option>
                          <option value="ST">Sao Tome and Principe</option>
                          <option value="SA">Saudi Arabia</option>
                          <option value="SN">Senegal</option>
                          <option value="SC">Seychelles</option>
                          <option value="SL">Sierra Leone</option>
                          <option value="SG">Singapore</option>
                          <option value="SK">Slovakia (Slovak Republic)</option>
                          <option value="SI">Slovenia</option>
                          <option value="SB">Solomon Islands</option>
                          <option value="SO">Somalia</option>
                          <option value="ZA">South Africa</option>
                          <option value="ES">Spain</option>
                          <option value="LK">Sri Lanka</option>
                          <option value="SH">St. Helena</option>
                          <option value="PM">St. Pierre and Miquelon</option>
                          <option value="SD">Sudan</option>
                          <option value="SR">Suriname</option>
                          <option value="SZ">Swaziland</option>
                          <option value="SE">Sweden</option>
                          <option value="CH">Switzerland</option>
                          <option value="SY">Syrian Arab Republic</option>
                          <option value="TW">Taiwan, Province of China</option>
                          <option value="TJ">Tajikistan</option>
                          <option value="TZ">
                            Tanzania, United Republic of
                          </option>
                          <option value="TH">Thailand</option>
                          <option value="TG">Togo</option>
                          <option value="TK">Tokelau</option>
                          <option value="TO">Tonga</option>
                          <option value="TT">Trinidad and Tobago</option>
                          <option value="TN">Tunisia</option>
                          <option value="TR">Turkey</option>
                          <option value="TM">Turkmenistan</option>
                          <option value="TC">Turks and Caicos Islands</option>
                          <option value="TV">Tuvalu</option>
                          <option value="UG">Uganda</option>
                          <option value="UA">Ukraine</option>
                          <option value="AE">United Arab Emirates</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                          <option value="UY">Uruguay</option>
                          <option value="UZ">Uzbekistan</option>
                          <option value="VU">Vanuatu</option>
                          <option value="VE">Venezuela</option>
                          <option value="VN">Viet Nam</option>
                          <option value="VG">Virgin Islands (British)</option>
                          <option value="VI">Virgin Islands (U.S.)</option>
                          <option value="WF">Wallis and Futuna Islands</option>
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
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Baby</option>
                          <option value="">All categories available </option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">SKU Type</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Noon</option>
                          <option value="">All type available </option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">SKU Sub- Type</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">
                            All Subtype available{" "}
                          </option>
                          <option value="">Amazon</option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">Fulfilment SKU Type</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
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
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Follow</option>
                          <option value="">All brand Available </option>
                        </select>
                      </div>
                      <div className="col-md-6 modal-1">
                        <label htmlFor="">SKU/ ASIN/ MPN</label>
                        <br />
                        <select className="common-modal" name="Platform" id="">
                          <option value="Platform">Noon</option>
                          <option value="">Amazon</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 modal-1">
                        <span>Total SKUs: 688</span>
                      </div>
                    </div>
                  </div>
                  <Modal.Footer>
                    <Button
                      variant="contained"
                      className="btn1"
                      onClick={handleCloseTwo}
                    >
                      Save
                    </Button>
                    <Button
                      className="btn2"
                      variant="contained"
                      onClick={handleCloseTwo}
                    >
                      {" "}
                      Reset all Filters
                    </Button>
                  </Modal.Footer>
                </Modal>
                {/* //////////////////////////////////////////////////////////////////////////// */}
              </div>
            </div>
          </div>
          {/* model code here start  */}
          <div className=" dash-Card mt-3 me-0 me-lg-3">
            <div className="">
              <div className="card-header">
                <div className="chartHeader ps-2 pe-1 d-flex justify-content-between align-content-center">
                  <h4 className="header-title mb-0 fw-normal">
                    Buybox Price Status
                  </h4>

                  <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        href="#day-status"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link py-1 active"
                      >
                        <p className="mb-0">L 24 Hour</p>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#week-status"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link py-1"
                      >
                        <p className="mb-0">L 7 Days</p>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#month-status"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link py-1"
                      >
                        <p className="mb-0">L 2 Weeks</p>
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        href="#year-status"
                        data-bs-toggle="tab"
                        aria-expanded="false"
                        className="nav-link py-1"
                      >
                        <p className="mb-0">L Month</p>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="pb-3">
                  <Bubble options={options} data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="heroRight mt-4 mt-lg-0">
          <div className="">
            <div className="alert-hero-right section-padding">
              <div className="row">
                <div className="col-md-6">
                  <span className="text-bold">My Watchlist</span>
                </div>
                <div className="col-md-6" style={{ textAlign: "right" }}>
                  <a href="//">
                    <span className="text-bold">See Watchlist</span>
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 col-12">
                  <table
                    id="basic-datatable"
                    className="table dt-responsive alert-table-right"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-lg-4 col-4">
                              <div
                                className=" float-end"
                                style={{ position: "relative" }}
                              >
                                <a
                                  onClick={() => setOpen6(!open6)}
                                  className="arrow-none card-drop"
                                >
                                  <i
                                    className="mdi mdi-dots-horizontal"
                                    style={{ fontSize: "16px", color: "blue" }}
                                  ></i>
                                </a>
                                {open6 && (
                                  <div
                                    className="threeDotsToggle"
                                    style={{ position: "absolute", right: "0" }}
                                  >
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-cached me-1"></i>Refresh
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-circle-edit-outline me-1"></i>
                                      Edit
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item text-danger"
                                    >
                                      <i className="mdi mdi-delete-outline me-1"></i>
                                      Remove
                                    </a>
                                  </div>
                                )}
                              </div>
                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div className="col-lg-8 col-8 text-center watch-right">
                              <img src={AmazonPic} width="55px" height="15px" />{" "}
                              <br />
                              <a href="" className="text-bold">
                                N35997789A
                              </a>
                              <span className="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          className=" watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span className="text-bold mt-4">SAR 70</span>
                          <p className="text-green mb-0">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-lg-4 col-4">
                              <div
                                className=" float-end"
                                style={{ position: "relative" }}
                              >
                                <a
                                  onClick={() => setOpen7(!open7)}
                                  className="arrow-none card-drop"
                                >
                                  <i
                                    className="mdi mdi-dots-horizontal"
                                    style={{ fontSize: "16px", color: "blue" }}
                                  ></i>
                                </a>
                                {open7 && (
                                  <div
                                    className="threeDotsToggle"
                                    style={{ position: "absolute", right: "0" }}
                                  >
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-cached me-1"></i>Refresh
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-circle-edit-outline me-1"></i>
                                      Edit
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item text-danger"
                                    >
                                      <i className="mdi mdi-delete-outline me-1"></i>
                                      Remove
                                    </a>
                                  </div>
                                )}
                              </div>

                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div className="col-lg-8 col-8 text-center watch-right">
                              <img src={SFlagRing} width="55px" height="15px" />{" "}
                              <br />
                              <a href="" className="text-bold">
                                N35997789A
                              </a>
                              <span className="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          className=" watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span className="text-bold mt-4">SAR 70</span>
                          <p className="text-green mb-0">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-lg-4 col-4">
                              <div
                                className=" float-end"
                                style={{ position: "relative" }}
                              >
                                <a
                                  onClick={() => setOpen8(!open8)}
                                  className="arrow-none card-drop"
                                >
                                  <i
                                    className="mdi mdi-dots-horizontal"
                                    style={{ fontSize: "16px", color: "blue" }}
                                  ></i>
                                </a>
                                {open8 && (
                                  <div
                                    className="threeDotsToggle"
                                    style={{ position: "absolute", right: "0" }}
                                  >
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-cached me-1"></i>Refresh
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-circle-edit-outline me-1"></i>
                                      Edit
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item text-danger"
                                    >
                                      <i className="mdi mdi-delete-outline me-1"></i>
                                      Remove
                                    </a>
                                  </div>
                                )}
                              </div>

                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div className="col-lg-8 col-8 text-center watch-right">
                              <img src={AmazonPic} width="55px" height="15px" />{" "}
                              <br />
                              <a href="" className="text-bold">
                                N35997789A
                              </a>
                              <span className="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          className=" watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span className="text-bold mt-4">SAR 70</span>
                          <p className="text-green mb-0">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-lg-4 col-4">
                              <div
                                className=" float-end"
                                style={{ position: "relative" }}
                              >
                                <a
                                  onClick={() => setOpen9(!open9)}
                                  className="arrow-none card-drop"
                                >
                                  <i
                                    className="mdi mdi-dots-horizontal"
                                    style={{ fontSize: "16px", color: "blue" }}
                                  ></i>
                                </a>
                                {open9 && (
                                  <div
                                    className="threeDotsToggle"
                                    style={{ position: "absolute", right: "0" }}
                                  >
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-cached me-1"></i>Refresh
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-circle-edit-outline me-1"></i>
                                      Edit
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item text-danger"
                                    >
                                      <i className="mdi mdi-delete-outline me-1"></i>
                                      Remove
                                    </a>
                                  </div>
                                )}
                              </div>
                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div className="col-lg-8 col-8 text-center watch-right">
                              <img src={SFlagRing} width="55px" height="15px" />{" "}
                              <br />
                              <a href="" className="text-bold">
                                N35997789A
                              </a>
                              <span className="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          className=" watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span className="text-bold mt-4">SAR 70</span>
                          <p className="text-green mb-0">10%</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="row">
                            <div className="col-lg-4 col-4">
                              <div
                                className=" float-end"
                                style={{ position: "relative" }}
                              >
                                <a
                                  onClick={() => setOpen10(!open10)}
                                  className="arrow-none card-drop"
                                >
                                  <i
                                    className="mdi mdi-dots-horizontal"
                                    style={{ fontSize: "16px", color: "blue" }}
                                  ></i>
                                </a>
                                {open10 && (
                                  <div
                                    className="threeDotsToggle"
                                    style={{ position: "absolute", right: "0" }}
                                  >
                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-cached me-1"></i>Refresh
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item"
                                    >
                                      <i className="mdi mdi-circle-edit-outline me-1"></i>
                                      Edit
                                    </a>

                                    <a
                                      href="javascript:void(0);"
                                      className="dropdown-item text-danger"
                                    >
                                      <i className="mdi mdi-delete-outline me-1"></i>
                                      Remove
                                    </a>
                                  </div>
                                )}
                              </div>
                              <img
                                src={SkuProduct}
                                width="50px"
                                height="40px"
                              />
                            </div>
                            <div className="col-lg-8 col-8 text-center watch-right">
                              <img src={SFlagRing} width="55px" height="15px" />{" "}
                              <br />
                              <a href="" className="text-bold">
                                N35997789A
                              </a>
                              <span className="table-font">Tommee Tippee</span>
                            </div>
                          </div>
                        </td>
                        <td
                          className=" watch-right-rate"
                          style={{ paddingTop: "15px !important" }}
                        >
                          <span className="text-bold mt-4">SAR 70</span>
                          <p className="text-green mb-0">10%</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
            <div className="col-md-12">
                <div className="add-sku">
                  <div className="">
                    <div
                      className="add-card-in text-center relative"
                      onClick={() => setopenSmallPopupProduct(!openSmallPopupProduct)}
                      style={{ textAlign: "right", position: 'relative' }}
                    >
                      <i onClick={handleShowadd} className="fa-solid fa-plus-minus  my-0 textGray"></i>{" "}
                      <h4 className="font-16 mt-1 mb-0 d-block textGray">
                        Add New SKUs to you Watchlist
                      </h4>
                      {openSmallPopupProduct && (
                      <div className="watch-modal-down dashboardSmallPopup" style={{position: 'absolute'}}>
												<h6 className="text-bold">Select Watchlist</h6>

												<br />
                      
												<div className="add-watch text-bold" data-bs-toggle="modal" data-bs-target="#standard-watch">
													<i   onClick={handleShowadd1} className="fa-solid fa-circle-plus"></i>
													<span className="mb-3">Add New Watchlist</span>
												</div>
											</div>
                      )}

                      {/* <Modal {...props} className="dashboardDoubleModel" show={showadd} onHide={handleCloseadd}>

                        <Modal.Header closeButton >
                          <Modal.Title className="">Select Watchlist</Modal.Title>
                        </Modal.Header>
                        <div className="modal-body">
                          <AddIcon style={{ color: "blue" }}
                            onClick={handleShowadd1}
                          />
                          <span className="ms-1">Add New Watchlist</span>
                        </div>
                        <Modal.Footer>
                        </Modal.Footer>
                      </Modal> */}
                      {/* ////////////////// */}
                      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" className="absolute top-0 bottom-0 m-auto d-flex align-items-center jsutify-content-center" show={showadd1} onHide={handleCloseadd1}>
                        <Modal.Header closeButton>
                          <Modal.Title className="modeltitle">New watchlist</Modal.Title>
                        </Modal.Header>
                        <div className="modal-body">
                          <div className="new-watch-modal">
                            <input type="text" placeholder="Enter Watchlist Title" />
                          </div>
                        </div>
                        <Modal.Footer>
                          <Button variant="contained" className="btn1" onClick={handleCloseadd1}>Create</Button>
                          <Button className="btn2" variant="contained" onClick={handleCloseadd1}>Close</Button>

                        </Modal.Footer>
                      </Modal>

                    </div>
                  </div>
                </div>
              </div>
              {/* 
       <div className=" export" data-bs-toggle="modal" data-bs-target="#standard-modal" style={{display: 'flex', alignItems: 'center'}}>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#standard-modal">Add New Watchlist</button>
                </div> */}

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
            </div>
          </div>
        </div>
      </div>

      <div className="heroSecondBox d-flex justify-content-between flex-column flex-xl-row col-12 py-3">
        <div className="heroBoxWidth2 dash-Card me-0 me-lg-3 mt-3 mt-lg-0">
          <div className="dash-card-body">
            <div className=" float-end" style={{ position: "relative" }}>
              <a onClick={() => setOpen3(!open3)} className="arrow-none card-drop">
                <i
                  className="mdi mdi-dots-horizontal"
                  style={{ fontSize: "22px", color: "blue" }}
                ></i>
              </a>
              {open3 && (
                <div
                  className="threeDotsToggle"
                  style={{ position: "absolute", right: "0" }}
                >
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="mdi mdi-cached me-1"></i>Refresh
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="mdi mdi-circle-edit-outline me-1"></i>
                    Edit
                  </a>

                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-danger"
                  >
                    <i className="mdi mdi-delete-outline me-1"></i>Remove
                  </a>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="avatar-sm rounded">
                  <span className="avatar-title  h3 my-0 text-primary rounded">
                    <img src={SkuProduct} alt="" width="50px;" height="50px;" />
                  </span>
                </div>
              </div>
              <div className="flex-grow-1 ms-2 ">
                <img
                  src={SFlagRing}
                  alt=""
                  width="40px;"
                  height="40px;"
                  style={{ width: "58px" }}
                />

                <br />
                <a href="/" className="mt-0 mb-1 font-14">
                  N35997789A
                </a>
                <br />
                <span className="mb-0 rate-green rateFont">
                  <i className="mdi mdi-arrow-up-bold text-success "></i> 4.04%
                </span>
              </div>
            </div>

            <div className="row align-items-end justify-content-between top-rate-left">
              <div className="col-sm-7">
                <h4 className="mt-0 text-muted fw-semibold mb-1 title-size">
                  Buybox Sale Price
                </h4>
                <p className="text-bold mb-0 textGray" style={{ fontSize: "10px" }}>
                  SAR 185
                </p>
              </div>

              <div className="col-sm-5">
                <img
                  src={DashboardGreenChar}
                  alt=""
                  height="40px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="heroBoxWidth2 dash-Card me-0 me-lg-3 mt-3 mt-lg-0">
          <div className="dash-card-body">
            <div className=" float-end" style={{ position: "relative" }}>
              <a onClick={() => setOpen4(!open4)} className="arrow-none card-drop">
                <i
                  className="mdi mdi-dots-horizontal"
                  style={{ fontSize: "22px", color: "blue" }}
                ></i>
              </a>
              {open4 && (
                <div
                  className="threeDotsToggle"
                  style={{ position: "absolute", right: "0" }}
                >
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="mdi mdi-cached me-1"></i>Refresh
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="mdi mdi-circle-edit-outline me-1"></i>
                    Edit
                  </a>

                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-danger"
                  >
                    <i className="mdi mdi-delete-outline me-1"></i>Remove
                  </a>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="avatar-sm rounded">
                  <span className="avatar-title  h3 my-0 text-primary rounded">
                    <img src={SkuProduct} alt="" width="50px;" height="50px;" />
                  </span>
                </div>
              </div>
              <div className="flex-grow-1 ms-2 ">
                <img
                  src={SFlagRing}
                  alt=""
                  width="40px;"
                  height="40px;"
                  style={{ width: "58px" }}
                />

                <br />
                <a href="/" className="mt-0 mb-1 font-14">
                  N35997789A
                </a>
                <br />
                <span className="mb-0 rate-green rateFont">
                  <i className="mdi mdi-arrow-up-bold text-success "></i> 4.04%
                </span>
              </div>
            </div>

            <div className="row align-items-end justify-content-between top-rate-left">
              <div className="col-sm-7">
                <h4 className="mt-0 text-muted fw-semibold mb-1 title-size">
                  Buybox Sale Price
                </h4>
                <p className="text-bold mb-0 textGray" style={{ fontSize: "10px" }}>
                  SAR 185
                </p>
              </div>

              <div className="col-sm-5">
                <img
                  src={DashboardGreenChar}
                  alt=""
                  height="40px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="heroBoxWidth2 dash-Card me-0 me-lg-3 mt-3 mt-lg-0">
          <div className="dash-card-body">
            <div className=" float-end" style={{ position: "relative" }}>
              <a onClick={() => setOpen5(!open5)} className="arrow-none card-drop">
                <i
                  className="mdi mdi-dots-horizontal"
                  style={{ fontSize: "22px", color: "blue" }}
                ></i>
              </a>
              {open5 && (
                <div
                  className="threeDotsToggle"
                  style={{ position: "absolute", right: "0" }}
                >
                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="mdi mdi-cached me-1"></i>Refresh
                  </a>

                  <a href="javascript:void(0);" className="dropdown-item">
                    <i className="mdi mdi-circle-edit-outline me-1"></i>
                    Edit
                  </a>

                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-danger"
                  >
                    <i className="mdi mdi-delete-outline me-1"></i>Remove
                  </a>
                </div>
              )}
            </div>
            <div className="d-flex">
              <div className="flex-shrink-0">
                <div className="avatar-sm rounded">
                  <span className="avatar-title  h3 my-0 text-primary rounded">
                    <img src={SkuProduct} alt="" width="50px;" height="50px;" />
                  </span>
                </div>
              </div>
              <div className="flex-grow-1 ms-2 ">
                <img
                  src={SFlagRing}
                  alt=""
                  width="40px;"
                  height="40px;"
                  style={{ width: "58px" }}
                />

                <br />
                <a href="/" className="mt-0 mb-1 font-14">
                  N35997789A
                </a>
                <br />
                <span className="mb-0 rate-green rateFont">
                  <i className="mdi mdi-arrow-up-bold text-success "></i> 4.04%
                </span>
              </div>
            </div>

            <div className="row align-items-end justify-content-between top-rate-left">
              <div className="col-sm-7">
                <h4 className="mt-0 text-muted fw-semibold mb-1 title-size">
                  Buybox Sale Price
                </h4>
                <p className="text-bold mb-0 textGray" style={{ fontSize: "10px" }}>
                  SAR 185
                </p>
              </div>

              <div className="col-sm-5">
                <img
                  src={DashboardGreenChar}
                  alt=""
                  height="40px"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="heroBoxWidth2 dash-Card mt-3 mt-lg-0">
          <div className="dash-card-body d-flex align-items-center justify-content-center">
            {/* <div className="dropdown float-end">
                  <a
                    href="#"
                    className="dropdown-toggle arrow-none card-drop"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i
                      className="mdi mdi-dots-horizontal"
                      style={{ fontSize: "22px" }}
                    ></i>
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="mdi mdi-cached me-1"></i>Refresh
                    </a>

                    <a href="javascript:void(0);" className="dropdown-item">
                      <i className="mdi mdi-circle-edit-outline me-1"></i>
                      Edit
                    </a>

                    <a
                      href="javascript:void(0);"
                      className="dropdown-item text-danger"
                    >
                      <i className="mdi mdi-delete-outline me-1"></i>Remove
                    </a>
                  </div>
                </div> */}
            <div
              className="add-card-in text-center watch-modal"
              onClick={handleShowTwo}
              style={{ textAlign: "right" }}
            >
              <i className="fa-solid fa-plus-minus  my-0 textGray"></i>{" "}
              <h4 className="font-16 mt-1 mb-0 d-block textGray">Add New Alert</h4>
              {/* <!-- Trigger/Open The Modal --> */}
              <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                className="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center"
                showTwo={showTwo}
                onHide={handleCloseTwo}
              >
                <Modal.Header closeButton>
                  <Modal.Title className="modeltitle">
                    Choose SKU/ ASIN/ MPN
                  </Modal.Title>
                </Modal.Header>
                <div className="modal-body">
                  <div className="row d-flex justify-content-between">
                    <div className="col-md-6 modal-0">
                      <label htmlFor="">Platform</label>
                      <br />
                      <select className="common-modal " name="Platform" id="">
                        <option value="Platform">Noon</option>
                        <option value="">Amazon</option>
                      </select>
                    </div>
                    <div className="col-md-6 modal-0">
                      <label htmlFor="">Platform Country</label>
                      <br />
                      <select className="common-modal" name="Platform" id="">
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
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="CV">Cape Verde</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="CI">Cote d'Ivoire</option>
                        <option value="HR">Croatia (Hrvatska)</option>
                        <option value="CU">Cuba</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
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
                        <option value="KR">Korea, Republic of</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libyan Arab Jamahiriya</option>
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
                        <option value="MD">Moldova, Republic of</option>
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
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
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
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint LUCIA</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia (Slovak Republic)</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SH">St. Helena</option>
                        <option value="PM">St. Pierre and Miquelon</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SZ">Swaziland</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syrian Arab Republic</option>
                        <option value="TW">Taiwan, Province of China</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania, United Republic of</option>
                        <option value="TH">Thailand</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Viet Nam</option>
                        <option value="VG">Virgin Islands (British)</option>
                        <option value="VI">Virgin Islands (U.S.)</option>
                        <option value="WF">Wallis and Futuna Islands</option>
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
                      <select className="common-modal" name="Platform" id="">
                        <option value="Platform">Baby</option>
                        <option value="">All categories available </option>
                      </select>
                    </div>
                    <div className="col-md-6 modal-1">
                      <label htmlFor="">SKU Type</label>
                      <br />
                      <select className="common-modal" name="Platform" id="">
                        <option value="Platform">Noon</option>
                        <option value="">All type available </option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 modal-1">
                      <label htmlFor="">SKU Sub- Type</label>
                      <br />
                      <select className="common-modal" name="Platform" id="">
                        <option value="Platform">All Subtype available </option>
                        <option value="">Amazon</option>
                      </select>
                    </div>
                    <div className="col-md-6 modal-1">
                      <label htmlFor="">Fulfilment SKU Type</label>
                      <br />
                      <select className="common-modal" name="Platform" id="">
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
                      <select className="common-modal" name="Platform" id="">
                        <option value="Platform">Follow</option>
                        <option value="">All brand Available </option>
                      </select>
                    </div>
                    <div className="col-md-6 modal-1">
                      <label htmlFor="">SKU/ ASIN/ MPN</label>
                      <br />
                      <select className="common-modal" name="Platform" id="">
                        <option value="Platform">Noon</option>
                        <option value="">Amazon</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 modal-1">
                      <span>Total SKUs: 688</span>
                    </div>
                  </div>
                </div>
                <Modal.Footer>
                  <Button
                    variant="contained"
                    className="btn1"
                    onClick={handleCloseTwo}
                  >
                    Save
                  </Button>
                  <Button
                    className="btn2"
                    variant="contained"
                    onClick={handleCloseTwo}
                  >
                    {" "}
                    Reset all Filters
                  </Button>
                </Modal.Footer>
              </Modal>
              {/* //////////////////////////////////////////////////////////////////////////// */}
              <div className="watch-modal-down" id="myDIV">
                <h6 className="text-bold">Select Watchlist</h6>

                <br />
                <div
                  className="add-watch text-bold"
                  data-bs-toggle="modal"
                  data-bs-target="#standard-watch"
                >
                  <i className="fa-solid fa-circle-plus"></i>
                  <span>Add New Watchlist</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHero;
