import { useState } from "react";
import { Button } from "../../../node_modules/@mui/material/index";
import "./alert.css";

import OpenModalAddAlerts from "./OpenModalAddAlerts";
const AlertsAdd = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <div className="container-width">
        <div className="row">
          <div className="col-md-12">
            <p className="fw-3">SKUs Signals, Stock and Price Alerts</p>
          </div>
        </div>
      </div>
      <div className="top-ranked">
        <div className="container-width">
          <div className="row">
            <div className="col-sm-2 col-sm-12 col-md-12 col-lg-12">
              <div className="col-12">
                <div className="cardAlerts">
                  <div className="row table-style ">
                    <div className="pb-3 text-bold d-flex flex-column flex-lg-row table-header">
                      <div className=" text-bold d-flex w-sm-100 w-md-25">
                        {/* <!-- <i className="fa-solid fa-magnifying-glass"></i>
									<a href="//">Search SKU</a> --> */}
                        <div
                          className="input-group p-1 sm-bottom background ms-3 d-flex justify-content-center"
                          style={{ maxwidth: "350px", borderRadius: "3px" }}
                        >
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                              style={{ height: "35px", background: "#0052FF" }}
                            >
                              <i className="fa-solid fa-magnifying-glass" style={{color: 'white'}}></i>
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control alerts-search"
                            placeholder="Search SKU"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            style={{
                              maxWidth: "300px",
                              height: "35px",
                              width: "60%",
                            }}
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-center ms-3 me-0">
                        <div
                          className="export "
                          data-bs-toggle="modal"
                          data-bs-target="#standard-modal"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <Button className="text-black " style={{ fontSize: '12px', color: 'black', textTransform: 'capitalize' }} onClick={handleOpen}>
                            {" "}
                            New Alert
                          </Button>
                          <OpenModalAddAlerts open={open} setOpen={setOpen} />
                        </div>

                        <div
                          className="export d-flex ms-1"
                          style={{ alignItems: "center" }}
                        >
                          <Button >
                            <i
                              className="fa-solid fa-cloud-arrow-up "
                              data-bs-toggle="modal"
                              data-bs-target="#standard-import"

                            ></i>
                            {" "}
                            <span className="text-black ms-1" style={{ fontSize: '12px', textTransform: 'capitalize' }}>
                              Import
                            </span>
                          </Button>
                        </div>

                      </div>

                      <div
                        id="standard-import"
                        className="modal fade"
                        tabindex="-1"
                        role="dialog"
                        aria-labelledby="standard-modalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content import-content">
                            <div className="modal-header">
                              <h4
                                className="modal-title rate-red"
                                id="standard-modalLabel"
                              >
                                Please make sure there are no duplicate rows
                              </h4>
                              <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-hidden="true"
                              ></button>
                            </div>
                            <div className="modal-body import-body">
                              <form
                                action="/"
                                method="post"
                                className="dropzone"
                                id="myAwesomeDropzone"
                                data-plugin="dropzone"
                                data-previews-container="#file-previews"
                                data-upload-preview-template="#uploadPreviewTemplate"
                              >
                                <div className="fallback">
                                  <input name="file" type="file" multiple />
                                </div>

                                <div className="dz-message needsclick">
                                  <i className="h1 text-muted ri-upload-cloud-2-line"></i>
                                  <h3>Drop files here or click to upload.</h3>
                                  <span className="text-muted font-13">
                                    (This is just a demo dropzone. Selected
                                    files are
                                    <strong>not</strong> actually uploaded.)
                                  </span>
                                </div>
                              </form>

                              <div
                                className="dropzone-previews mt-3"
                                id="file-previews"
                              ></div>

                              <div className="d-none" id="uploadPreviewTemplate">
                                <div className="card mt-1 mb-0 shadow-none border">
                                  <div className="p-2">
                                    <div className="row align-items-center">
                                      <div className="col-auto">
                                        <img
                                          data-dz-thumbnail
                                          src="#"
                                          className="avatar-sm rounded bg-light"
                                          alt=""
                                        />
                                      </div>
                                      <div className="col ps-0">
                                        <a
                                          href="javascript:void(0);"
                                          className="text-muted fw-bold"
                                          data-dz-name
                                        ></a>
                                        <p className="mb-0" data-dz-size></p>
                                      </div>
                                      <div className="col-auto">
                                        <a
                                          href=""
                                          className="btn btn-link btn-lg text-muted"
                                          data-dz-remove
                                        >
                                          <i className="ri-close-line"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="modal-footer">
                              <a
                                target="_blank"
                                href="https://docs.google.com/spreadsheets/d/1hXrZqdrPc1MQ1kFdXlTrVVsguXEc8-cIo7MYQUuQDfw/edit#gid=0"
                              >
                                <span
                                  className="d-flex"
                                  style={{ marginRight: "145px !important" }}
                                >
                                  Download Template
                                </span>
                              </a>
                              <button type="button" className="btn btn-primary">
                                Import
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

                  <div className="card-body">

                    <div className="">
                      <div

                      >
                        <div className="table-responsive">
                          <table className="table alert-Table">
                            <thead className="fs-6 fw-bold text-black">
                              <tr className="alert-table-row newrow" >
                                <th scope="col" className="text-center alerthead">SKU</th>
                                <th className="alerthead"  scope="col">Notification Target </th>
                                <th className="alerthead"  scope="col">Marketplace</th>
                                <th className="alerthead"  scope="col">Stores </th>
                                <th className="alerthead"  scope="col">Rate</th>
                                <th className="alerthead"  scope="col">Rank</th>
                                <th className="alerthead"  scope="col">Fulfilment Type </th>
                                <th className="alerthead"  scope="col">SKU Status </th>
                                <th className="alerthead"  scope="col">Buybox Sale Price </th>
                                <th className="alerthead"  scope="col">Comment</th>
                                <th className="alerthead"  scope="col">Notify Via </th>
                                <th className="alerthead"  scope="col">Active Status </th>
                                <th className="alerthead"  scope="col">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                {/* <th scope="row">1</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td> */}
                              </tr>
                              <tr>
                                {/* <th scope="row">2</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td> */}
                              </tr>
                              <tr>
                                {/* <th scope="row">3</th>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td>
        <td>Cell</td> */}
                              </tr>
                            </tbody>
                            <div className="bg-light ND w-100" >
                              <td className="py-1 px-2 w-100">No Data Available</td>
                            </div>
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
  );
};

export default AlertsAdd;
