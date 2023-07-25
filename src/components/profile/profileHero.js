import React from "react";
import './profile.css';
import RedChart from "../../assets/images/redChart.png";
import GreenChart from "../../assets/images/greenMap.png";
import GreenChardeep from "../../assets/images/greendeep.png";
import GraphProfilepic from "../../assets/images/grapprofile.png";
import { Card, Nav, Tab } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ProfileHero = () => {
    return (
        <>
       <div className="competitor">
	<div className="container-width">
		<div className="competitor-main">
			<div className="row d-flex flex-column flex-lg-row">

					<div className="col-md-12 col-lg-3">
						<div className="Profilecard">
							<div className="row ">
								<div className="col-md-12 ">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Competitor</span>
											<p>130</p>
											<span className="rate-red"><i className="fa-solid fa-arrow-down"></i> 1.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={RedChart} alt="" width="100%" height="50px"/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="Profilecard">
							<div className="row ">
								<div className="col-md-12 ">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Live SKUs</span>
											<p>4800</p>
											<span className="rate-green"><i className="fa-solid fa-arrow-up"></i> 1.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={GreenChardeep} alt="" width="100%" height="50px"/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="Profilecard">
							<div className="row ">
								<div className="col-md-12 ">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Not Live SKUs</span>
											<p>5000</p>
											<span className="rate-green"><i className="fa-solid fa-arrow-up"></i> 3.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={GreenChart} alt="" width="100%" height="50px"/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="Profilecard">
							<div className="row ">
								<div className="col-md-12 ">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Buybox SKUs</span>
											<p>4330</p>
											<span className="rate-red"><i className="fa-solid fa-arrow-down"></i> 4.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={RedChart} alt="" width="120px" height="50px"/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="Profilecard">
							<div className="row ">
								<div className="col-md-12 ">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Not Buybox SKUs</span>
											<p>4800</p>
											<span className="rate-red"><i className="fa-solid fa-arrow-down"></i> 1.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={ RedChart} alt="" width="120px" height="50px"/>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>

					<div className="col-md-12 col-lg-9">
						<div className="row">
							<div className="col-md-12">
                        		<div className="M-status">
                        			<div className="col-md-12">
                        				<div className="Profilecard">
                        					{/* <div className="card-header-profile align-items-center d-sm-flex justify-content-sm-between">
                                                <h4 className="header-title mb-0" style={{fontSize: '15px'}}>Store Price Status</h4>

                                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <a href="#day-status" data-bs-toggle="tab" aria-expanded="false" className="nav-link py-1 active">
                                                            <span className="">L 24 Hour</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a href="#week-status" data-bs-toggle="tab" aria-expanded="false" className="nav-link py-1">
                                                            <span className="">L 7 Days</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a href="#month-status" data-bs-toggle="tab" aria-expanded="false" className="nav-link py-1">
                                                            <span className="">L 2 Weeks</span>
                                                        </a>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <a href="#year-status" data-bs-toggle="tab" aria-expanded="false" className="nav-link py-1">
                                                            <span className="">L Month</span>
                                                        </a>
                                                    </li>
                                                </ul>
                                   			</div> */}
                                                <div className="card-header-profile align-items-center pt-0 pb-0 d-sm-flex justify-content-sm-between">
                                <h4 className="header-title my-0 fw-normal">
                                Store Price Status
                                </h4>
                                <Nav
                                    as="ul"
                                    variant="pills"
                                    className=" p-1 rounded"
                                >
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as={Link}
                                            className="my-0"
                                            to="#"
                                            eventKey="day"
                                        >
                                            L 24 Hour
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as={Link}
                                            className="my-0"
                                            to="#"
                                            eventKey="week"
                                        >
                                         L 7 Day
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as={Link}
                                            className="my-0"
                                            to="#"
                                            eventKey="month"
                                        >
                                            L 2 Weeks
                                        </Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link
                                            as={Link}
                                            className="my-0"
                                            to="#"
                                            eventKey="year"
                                        >
                                            L Month
                                        </Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                                        
		                                    <div className="card-body mt-3">
		                                        <div dir="ltr">
		                                           <img src={GraphProfilepic} width="100%" height="340px" alt=""/>
		                                        </div>
		                                    </div>
                            
                        				</div> 
                    				</div>
                        		</div>
                            </div>
						</div>

						<div className="row">
							<div className="col-md-12 d-flex flex-column flex-xl-row">
								<div className="heroprofilecardwidth Profilecard">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Fulfilment by Stores</span>
											<p>4800</p>
											<span className="rate-green"><i className="fa-solid fa-arrow-up"></i> 1.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={GreenChardeep} alt="" width="120px" height="50px"/>
										</div>
									</div>
								</div>

								<div className="heroprofilecardwidth Profilecard mx-0 mx-lg-1"> 
									<div className="" style={{marginRight: '10px', marginLeft: '10px'}}>
										<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Fulfilment by MP</span>
											<p>130</p>
											<span className="rate-red"><i className="fa-solid fa-arrow-down"></i> 1.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={RedChart} alt="" width="120px" height="50px"/>
										</div>
									</div>
									</div>
								</div>

								<div className="heroprofilecardwidth Profilecard">
									<div className="competitor-left-1 row">
										<div className="col-md-6">
											<span className="text-bold" style={{fontSize: '13px'}}>Fulfilment by Stores</span>
											<p>5800</p>
											<span className="rate-green"><i className="fa-solid fa-arrow-up"></i> 5.08%</span>
											<span>Since Last Month</span>
										</div>
										<div className="col-md-6">
											<img src={GreenChart} alt="" width="120px" height="50px"/>
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


export default ProfileHero;