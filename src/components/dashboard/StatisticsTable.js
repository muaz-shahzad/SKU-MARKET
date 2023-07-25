import React from "react";
import BaigPic from "../../assets/images/sku-product.png";
import SFlag from "../../assets/images/noon-saudi.svg";
import GreenChart from "../../assets/images/greenMap.png";
import AmazonPic from "../../assets/images/amazon-uae.svg";
import { styled } from '@mui/material/styles';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const StatisticsTable = () => {
  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        border: '1px solid #dadde9',
        color: 'black',
    },
  }));
  return (
    <>
      <div className="top-ranked ">
        <div className="container-width d-flex justify-content-between flex-column flex-xl-row">
          <div className="row col-12 col-xl-8 m-auto">
           
              <div className="pe-0 pe-lg-2 ps-0 ">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                        Marketplace Insights, Analytics & Statistics
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
                                <th className="table-heading">Marketplace</th>
                                <th className="table-heading">Top Ranked SKUs</th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                >
                                  Top Categories
                                </th>
                                <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="right" arrow style={{ backgroundColor: 'white' }} >
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Top Brands
                                </th></HtmlTooltip>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Stores
                                </th>
                                <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="right" arrow style={{ backgroundColor: 'white' }} >
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Live SKUs
                                </th></HtmlTooltip>

                                <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="right" arrow style={{ backgroundColor: 'white' }} >
                                <th className="table-heading">Live SKUsice </th></HtmlTooltip>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Not Live SKUs
                                </th>
                                <th
                                  className="table-heading"
                                  tabindex="0"
                                  data-bs-placement="top"
                                  data-bs-toggle="popover"
                                  data-bs-trigger="hover"
                                  data-bs-content="And here's some amazing content. It's very engaging. Right?"
                                >
                                  Fulfilment by Stores
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
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
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>
                              <tr className="trBackgroundColor">
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
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={AmazonPic}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={AmazonPic}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
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
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={AmazonPic}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
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
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
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
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
                                </td>
                              </tr>

                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <a href="">
                                    <img
                                      className="w-100"
                                      src={AmazonPic}
                                      width="15px"
                                      height="15px"
                                    />
                                  </a>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  18
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  30
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  100
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  500
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  300
                                </td>
                                <td className="rank-table-extra t-p-staticTable rate-green">
                                  900
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  600
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
                    Designed for users to instantly see the top Brands on the
                    marketplaces for opportunities.
                  </span>
                </div>
              </div>
        
          </div>
          <div className="row col-12 col-xl-4 m-auto">
            <div className="ps-0 ps-lg-2 pe-0">
              <div className="">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                        Opportunity to Stock
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
                              <HtmlTooltip title="And here's some amazing content. It's very engaging. Right?"
                                                        placement="right" arrow style={{ backgroundColor: 'white' }} >
                                <th className="table-heading">SKU</th></HtmlTooltip>
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
                    Designed for users to instantly see the opportunities on the
                    marketplaces.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* trending SKU tabele START here  */}

      <div className="top-ranked ">
        <div className="container-width d-flex justify-content-between">
          <div className="row col-12 m-auto">
            <div className="pe-0 ps-0">
              <div className="p-0">
                <div className="cardStatistics">
                  <div className="row table-style pt-3 pt-md-0 d-flex flex-direction-column justify-content-center justify-lg-start flex-lg-row align-items-center ">
                    <div className="col-md-6 text-bold table-header-left col-12 mx-auto text-center text-lg-start">
                      <span className="table-title ps-0 ps-md-2 ">
                        Top Ranked & Trending SKUs
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
                                  Stores
                                </th>
                                <th className="table-heading">Rate</th>
                                <th className="table-heading">Rank</th>
                                <th className="table-heading">Fulfilment Type</th>
                                <th className="table-heading">SKU Status</th>
                                <th className="table-heading">Buybox Sale Price</th>
                                <th className="table-heading">Chg 24h</th>
                                <th className="table-heading">Max Offer Price</th>
                                <th className="table-heading">Min Offer Price </th>
                                <th className="table-heading">
                                  E Opp to Fulfilment
                                </th>
                                <th className="table-heading"> E Opp to stock</th>
                                <th className="table-heading">Price Graphs(7d)</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="trBackgroundColor">
                                <td className="rank-table-extra t-p-staticTable">
                                  <div className="row d-flex flex-column flex-lg-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-12">
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
                                  <p className="mt-2"> EG 230</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2 rate-red"> -4.04%</p>
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
                                  <p className="mt-2"> 34</p>
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
                                <div className="row d-flex flex-column flex-lg-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-12">
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
                                  <p className="mt-2"> EG 230</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2 rate-red"> -4.04%</p>
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
                                  <p className="mt-2"> 34</p>
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
                                <div className="row d-flex flex-column flex-lg-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-12">
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
                                  <p className="mt-2"> EG 230</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2 rate-red"> -4.04%</p>
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
                                  <p className="mt-2"> 34</p>
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
                                <div className="row d-flex flex-column flex-lg-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-12">
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
                                  <p className="mt-2"> EG 230</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2 rate-red"> -4.04%</p>
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
                                  <p className="mt-2"> 34</p>
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
                                <div className="row d-flex flex-column flex-lg-row">
                                    <div className="col-lg-4 col-4">
                                      <img
                                        src={BaigPic}
                                        width="50px"
                                        height="40px"
                                      />
                                    </div>
                                    <div className="col-lg-6 col-12">
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
                                  <p className="mt-2"> EG 230</p>
                                </td>
                                <td className="rank-table-extra t-p-staticTable">
                                  <p className="mt-2 rate-red"> -4.04%</p>
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
                                  <p className="mt-2"> 34</p>
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
                    Designed for users to instantly see the market situations on
                    the marketplaces.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsTable;
