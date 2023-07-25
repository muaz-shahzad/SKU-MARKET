import { useGetAllProductsQuery } from "features/product/productAPI";
import { Link } from "react-router-dom";
import noon from "static/images/noon.png";
import image from "static/images/products/product.png";
import './index.css'

const query =
  "limit=5&fields=title,image,sku,rating,rank,current_price,sold_24_hours,estimated_SOH,price_change";

const ComparableTradeVolume = ({ product }) => {
  const { data } = useGetAllProductsQuery(query);

  return (
    <div className="container-width">
      <div className="row trade d-flex flex-column flex-lg-row">
        <div className="col-md-12 col-lg-6 ">
          <div className="trade-left">
            <div className="row table-style">
              <div className="col-7 col-md-6 text-bold">
                <span className="table-title">Comparable trade volume</span>
              </div>
              <div className="col-4 col-md-6 text-bold d-flex justify-content-end">
                <a href="" className="fontSizeProductTable" style={{color: 'blue !important'}} target="_blank">
                  See All SKUs <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <table
                          id="basic-datatable"
                          className="table dt-responsive nowrap w-100"
                        >
                          <thead className="tableHeadingGray">
                            <tr>
                              <th className="fontSizeProductTable text-center">SKU</th>
                              <th
                                className="fontSizeProductTable text-center"
                              
                              >
                                Marketplace
                              </th>
                              <th className="fontSizeProductTable text-center" >
                                Buybox Sale Price
                              </th>
                              <th className="fontSizeProductTable text-center">Chg 24H</th>
                            </tr>
                          </thead>

                          <tbody className="productTABLrowspace">
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra ">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra rowMarginTop">
                                <div className="rowMarginTop">
                                30
                                </div>
                                </td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra ">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">30</div></td>
                              <td className="table-extra rate-red "> <div className="rowMarginTop">-4.04%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">22</div></td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">1</div></td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">3</div></td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">77</div></td>
                              <td className="table-extra rate-red"> <div className="rowMarginTop">-4.04%</div></td>
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
          <div className="row table-footer">
            <span style={{marginTop: '-10px !important'}}>
              Of all the top SKUs on marketplace, these are the closest in trade
              volume.
            </span>
          </div>
        </div>
        <div className="col-md-12 col-lg-6 pt-4 pt-lg-0">
          <div className="trade-left">
            <div className="row table-style">
              <div className="col-7 col-md-6 text-bold">
                <span className="table-title">Comparable trade volume</span>
              </div>
              <div className="col-4 col-md-6 text-bold d-flex justify-content-end">
                <a href="" className="fontSizeProductTable" style={{color: 'blue !important'}} target="_blank">
                  See All SKUs <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
            </div>
            <div className="">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <div className="tab-content">
                      <div
                        className="tab-pane show active"
                        id="basic-datatable-preview"
                      >
                        <table
                          id="basic-datatable"
                          className="table dt-responsive nowrap w-100"
                        >
                          <thead className="tableHeadingGray">
                            <tr>
                              <th className="fontSizeProductTable text-center">SKU</th>
                              <th
                                className="fontSizeProductTable text-center"
                              
                              >
                                Marketplace
                              </th>
                              <th className="fontSizeProductTable text-center" >
                                Buybox Sale Price
                              </th>
                              <th className="fontSizeProductTable text-center">Chg 24H</th>
                            </tr>
                          </thead>

                          <tbody className="productTABLrowspace">
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra ">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra rowMarginTop">
                                <div className="rowMarginTop">
                                30
                                </div>
                                </td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra ">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">30</div></td>
                              <td className="table-extra rate-red "> <div className="rowMarginTop">-4.04%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">22</div></td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">1</div></td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">3</div></td>
                              <td className="table-extra rate-green"> <div className="rowMarginTop">15%</div></td>
                            </tr>
                            <tr>
                              <td>
                                <div className="row d-flex flex-column flex-md-row">
                                  <div className="col-lg-4 col-4">
                                    <img
                                      src={image}
                                      width="50px"
                                      height="40px"
                                    />
                                  </div>
                                  <div className="col-lg-8 col-8">
                                    <a href="" className="text-bold fontSizeProductTable">
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
                              <td className="table-extra">
                                <img className="rowMarginTop"
                                  src={noon}
                                  width="15px"
                                  height="15px"
                                />
                              </td>
                              <td className="table-extra"> <div className="rowMarginTop">77</div></td>
                              <td className="table-extra rate-red"> <div className="rowMarginTop">-4.04%</div></td>
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
          <div className="row table-footer">
            <span style={{marginTop: '-10px !important'}}>
              Of all the top SKUs on marketplace, these are the closest in trade
              volume.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparableTradeVolume;
