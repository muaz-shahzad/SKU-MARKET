import React from "react";
import BaigPic from "../../assets/images/sku-product.png";
import SFlag from "../../assets/images/noon-saudi.svg";
import GreenChart from "../../assets/images/greenMap.png";
import Ring from "../../assets/images/ring.png"
import RedChart from "../../assets/images/product-map1.png"
import "./comparebleTable.css";

const ComparebleTable = () => {
    return (
        <>
          <div className="top-ranked container">
        <div className="">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="col-12">
                <div className="cardHome">
          
                  <div className="px-2 py-3">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
               

                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fw-bold text-black">
                              <tr className="">
                                <th
                                  className="table-heading fs-6"
                                  style={{ width: "15%" }}
                                >
                                  SKU
                                </th>
                                <th className="table-heading fs-6">Marketplace</th>
                                <th className="table-heading fs-6">Stores</th>
                                <th
                                  className="table-heading fs-6"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Rate
                                </th>
                                <th
                                  className="table-heading fs-6"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Rank
                                </th>
                          
                                <th className="table-heading fs-6">Buybox Sale Price</th>
                                <th
                                  className="table-heading fs-6"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Chg 24H
                                </th>
                              
                                <th className="table-heading fs-6">Chart</th>
                              </tr>
                            </thead>
                            <tbody>
                            <tr className="bg-transparent">
                              <td>
                                <div className="row d-flex flex-column flex-xl-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-normal fs-6 text-primary">
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
                              <td className="rank-table-extra t-padding">
                                <a href="">
                                  <img
                                    className=""
                                    src={Ring}
                                    width="16px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td className="rank-table-extra t-padding">20</td>
                              <td className="rank-table-extra t-padding">11000</td>
                              <td className="rank-table-extra t-padding">3</td>
                              <td className="rank-table-extra t-padding">
                                Express
                              </td>
                              <td className="rank-table-extra t-padding rate-green">
                                Live
                              </td>
                            
                              <td className="t-padding product-chart text-center">
                                <img src={RedChart} alt="" />
                              </td>
                            </tr>
                            <tr className="bg-transparent">
                              <td>
                                <div className="row d-flex flex-column flex-xl-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-normal fs-6 text-primary">
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
                              <td className="rank-table-extra t-padding">
                                <a href="">
                                <img
                                    className=""
                                    src={Ring}
                                    width="16px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td className="rank-table-extra t-padding">34</td>
                              <td className="rank-table-extra t-padding">7000</td>
                              <td className="rank-table-extra t-padding">3</td>
                              <td className="rank-table-extra t-padding">Market</td>
                              <td className="rank-table-extra t-padding rate-red">
                                Not Live
                              </td>
                     
                           
                              <td className="t-padding product-chart text-center">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            <tr className="bg-transparent">
                              <td>
                                <div className="row d-flex flex-column flex-xl-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-normal fs-6 text-primary">
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
                              <td className="rank-table-extra t-padding">
                              <img
                                    className=""
                                    src={Ring}
                                    width="16px"
                                    height="15px"
                                  />
                              </td>
                              <td className="rank-table-extra t-padding">34</td>
                              <td className="rank-table-extra t-padding">12000</td>
                              <td className="rank-table-extra t-padding">3</td>
                              <td className="rank-table-extra t-padding">
                                Express
                              </td>
                              <td className="rank-table-extra t-padding rate-green">
                                Live
                              </td>
                 
                              <td className="t-padding product-chart text-center">
                                <img src={GreenChart} alt="" />
                              </td>
                            </tr>
                            <tr className="bg-transparent">
                              <td>
                                <div className="row d-flex flex-column flex-xl-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-normal fs-6 text-primary">
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
                              <td className="rank-table-extra t-padding">
                                <a href="">
                                <img
                                    className=""
                                    src={Ring}
                                    width="16px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td className="rank-table-extra t-padding">34</td>
                              <td className="rank-table-extra t-padding">10000</td>
                              <td className="rank-table-extra t-padding">3</td>
                              <td className="rank-table-extra t-padding">
                                Express
                              </td>
                              <td className="rank-table-extra t-padding rate-red">
                                Not Live
                              </td>
            
                              <td className="t-padding product-chart text-center">
                                <img src={RedChart} alt="" />
                              </td>
                            </tr>
                            <tr className="bg-transparent">
                              <td>
                                <div className="row d-flex flex-column flex-xl-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={BaigPic}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-normal fs-6 text-primary">
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
                              <td className="rank-table-extra t-padding">
                                <a href="">
                                <img
                                    className=""
                                    src={Ring}
                                    width="16px"
                                    height="15px"
                                  />
                                </a>
                              </td>
                              <td className="rank-table-extra t-padding">34</td>
                              <td className="rank-table-extra t-padding">50000</td>
                              <td className="rank-table-extra t-padding">3</td>
                              <td className="rank-table-extra t-padding">Market</td>
                              <td className="rank-table-extra t-padding rate-red">
                                Not Live
                              </td>
                        
                              <td className="t-padding product-chart text-center">
                                <img src={RedChart} alt="" />
                              </td>
                            </tr>
                            </tbody>
                         
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}

export default ComparebleTable;