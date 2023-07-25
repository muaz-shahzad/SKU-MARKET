import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./account.css";
import { styled } from "@mui/material/styles";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "@mui/material/Button";

const AccountHero = (props) => {
  const [modelShow, setModelShow] = useState(false);
  const handleClosemodel = () => setModelShow(false);
  const handleShowmodel = () => setModelShow(true);
  return (
    <>
      <div className="container-width">
        <div className="row">
          <div className="col-md-12">
            <span className="text-bold text-black">Subscription</span>
          </div>
        </div>
      </div>

      <div className="container-width">
        <div className="row">
          <div className="col-md-12">
            <div className="subcription justify-content-center d-flex flex-column flex-md-row">
              <div className="d-flex align-items-center">
                <span>Your current subscription: </span>
                <span className="text-bold" style={{ paddingLeft: "10px" }}>
                  Free
                </span>
              </div>
              <a onClick={handleShowmodel} className="btn cancel-btn ms-0 ms-md-2">
                Cancel my subscription
              </a>
              <Link to='/Subscriptions'>
              <a className="btn upgrade-btn mt-2 mt-md-0 ms-0 ms-md-2">
                Upgrade my subscription
              </a>
              </Link>
              <Modal
                {...props}
                modelShow={modelShow}
                onHide={handleClosemodel}
                aria-labelledby="contained-modal-title-vcenter"
                className="absolute top-0 bottom-0 m-auto w-25 d-flex align-items-center jsutify-content-center"
           
              >
                <Modal.Header closeButton>
                  <Modal.Title className="modeltitle">
                    Cancel subscription
                  </Modal.Title>
                </Modal.Header>
                <div>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-footer">
                        <button type="button" className="btn btn-primary">
                          Apply
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
                <Modal.Footer>
                  <Button
                    variant="contained"
                    className="btn1"
                    onClick={handleClosemodel}
                  >
                    Save
                  </Button>
                  <Button
                    className="btn2"
                    variant="contained"
                    onClick={handleClosemodel}
                  >
                    {" "}
                    Reset all Filters
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>

      <div className="container-width">
        <div className="row cardAccount">
          <div className="col-md-12" style={{ paddingTop: "15px" }}>
            <p className="text-bold text-black fw-4">Account information</p>
            <p style={{ fontSize: "12px", color: "#6c757d" }}>
              Fill the form below For your Account Information.
            </p>
          </div>

          <div className="col-md-12 account-main">
            <div className="row billing-field">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="">First Name</label> <br />
                  <input type="text" placeholder="Enter Your First Name" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="">Last Name</label> <br />
                  <input type="text" placeholder="Enter Your Last Name" />
                </div>
              </div>
            </div>
            <div className="row billing-field">
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="">
                    Email Address <span className="rate-red">*</span>
                  </label>{" "}
                  <br />
                  <input type="email" placeholder="Enter Your Email" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="mb-2">
                  <label htmlFor="">
                    Phone <span className="rate-red">*</span>
                  </label>{" "}
                  <br />
                  <input type="text" placeholder="(xx) xxx xxxx xxx" />
                </div>
              </div>
            </div>
            <div className="row billing-field">
              <div className="col-md-12">
                <div className="mb-2">
                  <label htmlFor="">Full Address</label> <br />
                  <input type="text" placeholder="Enter full address" />
                </div>
              </div>
            </div>
            <div className="row billing-field">
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="">Town/City</label> <br />
                  <input type="email" placeholder="Enter Your City Name" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="mb-2">
                  <label htmlFor="">State</label> <br />
                  <input type="text" placeholder="Enter Your state" />
                </div>
              </div>
              <div className="col-md-4">
                <label htmlFor="">Zip/Postal Code</label> <br />
                <input type="text" placeholder="Enter Your zip code" />
              </div>
            </div>
            <div className="row billing-field">
              <div className="col-md-10">
                <div className="mb-2">
                  <label htmlFor="">Country</label> <br />
                  <select
                    name=""
                    id=""
                    style={{
                      color: "darkgray !important",
                      fontSize: "14px !important",
                    }}
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

              <div
                className="col-md-2 d-flex align-items-center text-right"
                style={{ justifyContent: "right" }}
              >
                <button className="accout-button">submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountHero;
