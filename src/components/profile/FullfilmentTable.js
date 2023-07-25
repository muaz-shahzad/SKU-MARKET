import React, {useState} from "react";
import BaigPic from "../../assets/images/sku-product.png";
import SFlag from "../../assets/images/noon-saudi.svg";
import GreenChart from "../../assets/images/greenMap.png";
import AmazonPic from "../../assets/images/amazon-uae.svg";
import { styled } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

const FullfilmentTable = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);


  const [show3, setShow3] = useState(false);
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);


  const [show4, setShow4] = useState(false);
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);

    return (
        <>
        <div className="top-ranked ">
        <div className="container-width d-flex justify-content-between flex-column flex-xl-row">
         
          <div className="row col-12 col-xl-6 m-auto">
            <div className="pe-0 pe-lg-2 ps-0">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                      Opportunity To Fulfilment
                      </span>
                    </div>

                    <div className="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right-profile mt-2 mt-lg-0">
                      <div className="export">
                        <a href="//">
                          <i className="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div className="filter" style={{ width: "64px" }} onClick={handleShow}>
                        <a >Filter</a>
                      </div>
                                          {/* <!-- Trigger/Open The Modal --> */}
                    <Modal
                      {...props}
                      aria-labelledby="contained-modal-title-vcenter"
                      className="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center"
                      show={show}
                      onHide={handleClose}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="modeltitle">
                        Filter
                        </Modal.Title>
                      </Modal.Header>
                      <div className="">
								        
								   
                      <div className="modal-body filter-body">
								                
                                <div className="row d-flex justify-content-between">
                                  <div className="col-md-6 modal-0">
                                    <label htmlFor="">Platform</label><br />
                                    <select className="common-modal " name="Platform" id="">
                                      <option value="Platform">Noon</option>
                                      <option value="">Amazon</option>
                                    </select>
                                  </div>
                                  <div className="col-md-6 modal-0">
                                    <label htmlFor="">Platform Country</label><br />
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
                                    <label htmlFor="">Category</label><br />
                                    <select className="common-modal" name="Platform" id="">
                                      <option value="Platform">Baby</option>
                                      <option value="">All categories available </option>
                                    </select>
                                  </div>
                                  <div className="col-md-6 modal-1">
                                    <label htmlFor="">SKU Type</label><br />
                                    <select className="common-modal" name="Platform" id="">
                                      <option value="Platform">Noon</option>
                                      <option value="">All type available </option>
                                    </select>
                                  </div>
                                </div>
  
                                <div className="row">
                                  <div className="col-md-6 modal-1">
                                    <label htmlFor="">SKU Sub- Type</label><br />
                                    <select className="common-modal" name="Platform" id="">
                                      <option value="Platform">All Subtype available </option>
                                      <option value="">Amazon</option>
                                    </select>
                                  </div>
                                  <div className="col-md-6 modal-1">
                                    <label htmlFor="">Fulfilment SKU Type</label><br />
                                    <select className="common-modal" name="Platform" id="">
                                      <option value="Platform">All Fulfilment type available </option>
                                      <option value="">Amazon</option>
                                    </select>
                                  </div>
                                </div>
  
                                <div className="row">
                                  <div className="col-md-6 modal-1">
                                    <label htmlFor="">Brand</label><br />
                                    <select className="common-modal" name="Platform" id="">
                                      <option value="Platform">Follow</option>
                                      <option value="">All brand Available </option>
                                    </select>
                                  </div>
                                  <div className="col-md-6 modal-1">
                                    <label htmlFor="">SKU/ ASIN/ MPN</label><br />
                                    <select className="common-modal" name="Platform" id="">
                                      <option value="Platform">Noon</option>
                                      <option value="">Amazon</option>
                                    </select>
                                  </div>
                                </div>
  
                                <div className="row price-change-main">
                                  <div className="col-md-12 modal-1 price-change-top">
                                    <span>Price Change SAR</span>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '20px'}}>24H Price Change</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                  </div>
  
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '51px'}}>Change (7D)</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                  </div>
  
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '44px'}}>Change (30D)</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '38px'}}>Max Sale Price</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '42px'}}>Min Sale Price</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                  </div>
                                </div>
  
                              
  
                                <div className="row">
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '65px'}}>SKU Rank</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                    <form action="">
                                 <input type="range" id="vol" name="vol" min="0" max="100000" style={{marginTop: '5px', width: '95%'}}/>
                              </form>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '69px'}}>SKU Rate</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                    <form action="">
                                 <input type="range" id="vol" name="vol" min="0" max="100000" style={{marginTop: '5px', width: '95%'}} />
                              </form>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '46px'}}>No. Of Sellers</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                    <form action="">
                                 <input type="range" id="vol" name="vol" min="0" max="100000" style={{marginTop: '5px', width: '95%'}} />
                              </form>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '39px'}}>Stock On Hand</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                    <form action="">
                                 <input type="range" id="vol" name="vol" min="0" max="100000" style={{marginTop: '5px', width: '95%'}} />
                              </form>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '48px'}}>Trade Volume</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                    <form action="">
                                 <input type="range" id="vol" name="vol" min="0" max="100000" style={{marginTop: '5px', width: '95%'}}/>
                              </form>
                                  </div>
                                  <div className="price-change-bottom">
                                    <div className="price-1  common-modal">
                                      <span style={{paddingRight: '61px'}}>Market Cap</span>
                                      <input type="number" placeholder="From" value="" /> %
                                      <input type="number" placeholder="To" value="" /> %
                                      <a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
                                    </div>
                                    <form action="">
                                 <input type="range" id="vol" name="vol" min="0" max="100000" style={{marginTop: '5px', width: '95%'}} />
                              </form>
                                  </div>
                                </div>
  
  
                                <div className="row">
                                  <div className="col-md-12 modal-1">
                                    <span>Total SKUs: 688</span>
                                  </div>
                                </div>
  
  
                              </div>
								       
								        
                       
								    </div>
									
                      <Modal.Footer>
                        <Button
                          variant="contained"
                          className="btn1"
                          onClick={handleClose}
                        >
                          Reset All Fillter
                        </Button>
                        <Button
                          variant="contained"
                          className="btn1"
                          onClick={handleClose}
                        >
                          Apply 
                        </Button>
                        <Button
                          className="btn2"
                          variant="contained"
                          onClick={handleClose}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    {/* ////////////////////////////////////////////////////// */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th className="table-heading">SKU</th>
                                <th className="table-heading">Marketplace</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Buybox Sale Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                Chg 24H
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                              Max Offer Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                            Max Offer Price
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                     <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row table-footer px-2 mt-3">
                    <div className="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div className="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div className="">
                        <a href="//">
                          <i className="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                  Designed for users to instantly see the market situations on the marketplaces and predicts what will come next.
                  </span>
                </div>
              </div>
            </div>
          </div>
   
          <div className="row col-12 col-xl-6 m-auto">
            <div className="ps-0 ps-lg-2 pe-0">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                      Opportunity To Stock
                      </span>
                    </div>

                    <div className="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right-profile mt-2 mt-lg-0">
                      <div className="export">
                        <a href="//">
                          <i className="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div className="filter" style={{ width: "64px" }} onClick={handleShow2}>
                        <a>Filter</a>
                      </div>
                                                   {/* <!-- Trigger/Open The Modal --> */}
                    <Modal
                      {...props}
                      aria-labelledby="contained-modal-title-vcenter"
                      className="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center"
                      show2={show2}
                      onHide={handleClose2}
                    >
                      <Modal.Header closeButton>
                        <Modal.Title className="modeltitle">
                        Filter
                        </Modal.Title>
                      </Modal.Header>
                      <div className="">
								        
								   
								            <div className="modal-body filter-body">
								                
								            	<div className="row d-flex justify-content-between">
								            		<div className="">
								            			<label htmlFor="">Platform</label><br />
								            			<select className="common-modal " name="Platform" id="">
								            				<option value="Platform">Noon</option>
								            				<option value="">Amazon</option>
								            			</select>
								            		</div>
								            		<div className="">
								            			<label htmlFor="">Platform Country</label><br />
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
								            		<div className="">
								            			<label htmlFor="">Category</label><br />
								            			<select className="common-modal" name="Platform" id="">
								            				<option value="Platform">Baby</option>
								            				<option value="">All categories available </option>
								            			</select>
								            		</div>
								            		<div className="">
								            			<label htmlFor="">SKU Type</label><br />
								            			<select className="common-modal" name="Platform" id="">
								            				<option value="Platform">Noon</option>
								            				<option value="">All type available </option>
								            			</select>
								            		</div>
								            	</div>

								            	<div className="row">
								            		<div className="">
								            			<label htmlFor="">SKU Sub- Type</label><br />
								            			<select className="common-modal" name="Platform" id="">
								            				<option value="Platform">All Subtype available </option>
								            				<option value="">Amazon</option>
								            			</select>
								            		</div>
								            		<div className="">
								            			<label htmlFor="">Fulfilment SKU Type</label><br />
								            			<select className="common-modal" name="Platform" id="">
								            				<option value="Platform">All Fulfilment type available </option>
								            				<option value="">Amazon</option>
								            			</select>
								            		</div>
								            	</div>

								            	<div className="row">
								            		<div className="">
								            			<label htmlFor="">Brand</label><br />
								            			<select className="common-modal" name="Platform" id="">
								            				<option value="Platform">Follow</option>
								            				<option value="">All brand Available </option>
								            			</select>
								            		</div>
								            		<div className="">
								            			<label htmlFor="">SKU/ ASIN/ MPN</label><br />
								            			<select className="common-modal" name="Platform" id="">
								            				<option value="Platform">Noon</option>
								            				<option value="">Amazon</option>
								            			</select>
								            		</div>
								            	</div>

								            	<div className="row price-change-main">
								            		<div className="col-md-12 modal-1 price-change-top">
								            			<span>Price Change SAR</span>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '20px'}}>24H Price Change</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            		</div>

								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '51px'}}>Change (7D)</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            		</div>

								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '44px'}}>Change (30D)</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '38px'}}>Max Sale Price</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '42px'}}>Min Sale Price</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            		</div>
								            	</div>

								            

								            	<div className="row">
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '65px'}}>SKU Rank</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            			<form action="">
														 	<input type="range" id="vol" name="vol" min="0" max="100000"  style={{marginTop: '5px', width: '95%'}}/>
														</form>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '69px'}}>SKU Rate</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            			<form action="">
														 	<input type="range" id="vol" name="vol" min="0" max="100000"  style={{marginTop: '5px', width: '95%'}} />
														</form>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '46px'}}>No. Of Sellers</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            			<form action="">
														 	<input type="range" id="vol" name="vol" min="0" max="100000"  style={{marginTop: '5px', width: '95%'}} />
														</form>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '39px'}}>Stock On Hand</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            			<form action="">
														 	<input type="range" id="vol" name="vol" min="0" max="100000"  style={{marginTop: '5px', width: '95%;'}} />
														</form>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '48px'}}>Trade Volume</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            			<form action="">
														 	<input type="range" id="vol" name="vol" min="0" max="100000"  style={{marginTop: '5px', width: '95%'}} />
														</form>
								            		</div>
								            		<div className="price-change-bottom">
								            			<div className="price-1  common-modal">
								            				<span style={{paddingRight: '61px'}}>Market Cap</span>
								            				<input type="number" placeholder="From" value="" /> %
								            				<input type="number" placeholder="To" value="" /> %
								            				<a href=""><i className="fa-solid fa-rotate-left" style={{fontSize: '13px'}}></i></a>
								            			</div>
								            			<form action="">
														 	<input type="range" id="vol" name="vol" min="0" max="100000"  style={{marginTop: '5px', width: '95%'}} />
														</form>
								            		</div>
								            	</div>


								            	<div className="row">
								            		<div className="col-md-12 modal-1">
								            			<span>Total SKUs: 688</span>
								            		</div>
								            	</div>


								            </div>
								       
								        
                       
								    </div>
									
                      <Modal.Footer>
                        <Button
                          variant="contained"
                          className="btn1"
                          onClick={handleClose2}
                        >
                          Reset All Fillter
                        </Button>
                        <Button
                          variant="contained"
                          className="btn1"
                          onClick={handleClose2}
                        >
                          Apply 
                        </Button>
                        <Button
                          className="btn2"
                          variant="contained"
                          onClick={handleClose2}
                        >
                          Close
                        </Button>
                      </Modal.Footer>
                    </Modal>

                    {/* ////////////////////////////////////////////////////// */}
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th className="table-heading">SKU</th>
                                <th className="table-heading">Marketplace</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Buybox Sale Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                Chg 24H
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                              Max Offer Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                            Max Offer Price
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                     <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row table-footer px-2 mt-3">
                    <div className="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div className="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div className="">
                        <a href="//">
                          <i className="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                  Designed for users to instantly see the market situations on the marketplaces and predicts what will come next.
                  </span>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div>





      {/* New High (ATH) table start here*/}
 
      <div className="top-ranked ">
        <div className="container-width d-flex justify-content-between flex-column flex-xl-row">
         
          <div className="row col-12 col-xl-5">
            <div className="pe-0 pe-lg-2 ps-0 ms-2">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                      New High (ATH)

                      </span>
                    </div>

                    <div className="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right-profile mt-2 mt-lg-0">
                      <div className="export">
                        <a href="//">
                          <i className="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div className="filter" style={{ width: "64px" }}>
                        <a href="//">Filter</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th className="table-heading">SKU</th>
                                <th className="table-heading">Marketplace</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Buybox Sale Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                Chg 24H
                                </th>
                  
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                           
                              </tr>
                  
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                     
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                    
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                    
                              </tr>
                     <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                     
                              </tr>
                  
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row table-footer px-2 mt-3">
                    <div className="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div className="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div className="">
                        <a href="//">
                          <i className="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                  Designed for users to instantly see the market situations on the marketplaces and predicts what will come next.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row col-12 col-xl-7">
            <div className="pe-0 ps-0 me-2">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                      Top Ranked Categories
                      </span>
                    </div>

                    <div className="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right-profile mt-2 mt-lg-0">
                      <div className="export">
                        <a href="//">
                          <i className="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div className="filter" style={{ width: "64px" }}>
                        <a href="//">Filter</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th className="table-heading">Top Category</th>
                                <th className="table-heading">Marketplace</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Stores
                                </th>
                               
                                <th className="table-heading">Min Offer Price </th>
                                <th className="table-heading">
                                  E Opp to Fulfilment
                                </th>
                                <th className="table-heading"> E Opp to stock</th>
                                <th className="table-heading">Price Graphs(7d)</th>
                                <th className="table-heading">Price Graphs(7d)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                              <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> Toyess</p>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100 mt-2"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 34</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 3</p>
                                </td>
                               
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 18</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable product-chartDASHOBARD">
                                  <img src={GreenChart} />
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                              <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> Toyess</p>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100 mt-2"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 34</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 3</p>
                                </td>
                               
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 18</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable product-chartDASHOBARD">
                                  <img src={GreenChart} />
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                              <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> Toyess</p>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100 mt-2"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 34</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 3</p>
                                </td>
                               
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 18</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable product-chartDASHOBARD">
                                  <img src={GreenChart} />
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                              <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> Toyess</p>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100 mt-2"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 34</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 3</p>
                                </td>
                               
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 18</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable product-chartDASHOBARD">
                                  <img src={GreenChart} />
                                </td>
                              </tr>
                                     <tr className="trBackgroundColor">
                              <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> Toyess</p>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100 mt-2"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 34</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 3</p>
                                </td>
                               
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 47</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2"> 18</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable product-chartDASHOBARD">
                                  <img src={GreenChart} />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row table-footer px-2">
                    <div className="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div className="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div className="">
                        <a href="//">
                          <i className="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                    Designed for users to instantly see the market situations on
                    the marketplaces.
                  </span>
                </div>
              </div>
            </div>
          </div>


      
        </div>
      </div>


      {/* Unusual Volume Most Volatile table start here */}
      {/* <div className="top-ranked ">
        <div className="container-width d-flex justify-content-between flex-column flex-xl-row">
         
          <div className="row col-12 col-xl-6 m-auto">
            <div className="pe-0 pe-lg-2 ps-0">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                      Unusual Volume

                      </span>
                    </div>

                    <div className="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right mt-2 mt-lg-0">
                      <div className="export">
                        <a href="//">
                          <i className="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div className="filter" style={{ width: "64px" }}>
                        <a href="//">Filter</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th className="table-heading">SKU</th>
                                <th className="table-heading">Marketplace</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Buybox Sale Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                Chg 24H
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                              Max Offer Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                            Max Offer Price
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                     <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row table-footer px-2 mt-3">
                    <div className="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div className="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div className="">
                        <a href="//">
                          <i className="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                  Designed for users to instantly see the market situations on the marketplaces and predicts what will come next.
                  </span>
                </div>
              </div>
            </div>
          </div>
   
          <div className="row col-12 col-xl-6 m-auto">
            <div className="ps-0 ps-lg-2 pe-0">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                      Most Volatile
                      </span>
                    </div>

                    <div className="col-md-6 col-10 text-bold d-flex justify-content-center justify-content-lg-end table-header-right mt-2 mt-lg-0">
                      <div className="export">
                        <a href="//">
                          <i className="fa-solid fa-file-export"></i> Export
                        </a>
                      </div>
                      <div className="filter" style={{ width: "64px" }}>
                        <a href="//">Filter</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr>
                                <th className="table-heading">SKU</th>
                                <th className="table-heading">Marketplace</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Buybox Sale Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                Chg 24H
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                              Max Offer Price
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                            Max Offer Price
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                     <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-md-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-6">
                                      <a href="" className="text-bold fs-6">
                                        N35997789A
                                      </a>
                                      <span className="table-font">
                                        ASOS Ridley High
                                      </span>
                                      <span className="table-font">
                                        Tommee Tippee
                                      </span>
                                    </div>
                                  </div>
                                </td>

                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={SFlag}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                                       <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  18
                                </td>
                              </tr>
                  
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row table-footer px-2 mt-3">
                    <div className="col-md-6 table-footer-left text-bold">
                      <span>Showing 1 to 5 of 5 Marketplace</span>
                    </div>
                    <div className="col-md-6 table-footer-right d-flex align-items-center justify-content-end">
                      <div className="">
                        <a href="//">
                          <i className="fa-solid fa-angle-left"></i>
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          1
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          2
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          3
                        </a>
                        <a href="//" className="btn shadow-none hover-shadow">
                          4
                        </a>
                        <a href="//">
                          <i className="fa-solid fa-angle-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-footer">
                  <span style={{ marginTop: "-12px !important" }}>
                  Designed for users to instantly see the market situations on the marketplaces and predicts what will come next.
                  </span>
                </div>
              </div>
            </div>
          </div>

      
        </div>
      </div> */}


        </>
    )
}

export default FullfilmentTable;