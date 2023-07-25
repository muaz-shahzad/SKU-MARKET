import logo from 'static/images/logo.svg';
import './mobile.css';

const Footer = () => {
    return (
        <div className="footer-main shadow-none mt-3" style={{ background: 'white' }}>
            <div className="container-fluid bg-white shadow-none">
                <div className="container">
                    <div className="row d-flex justify-content-around align-items-center footer-area footer-mobaile">
                        <div className="col-md-4">
                            <div className="footer-items footer-mobile-logo footer-logo">
                                <img
                                    src={logo}
                                    width="160px"
                                    height="90px"
                                    alt="SKU Market"
                                />
                                <h6 className='text-black'>All rights reserved  2022 44- 2023</h6>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="footer-items footer-1 d-flex justify-content-center">
                            <div className="col-md-4">
							<div className="footer-items footer-1 d-flex justify-content-center">
								<img src="images/Apple_Pay_logo.png" style={{height: '20px', marginRight: '20px'}} />
								<img src="images/payment-cards2.png" style={{ height: '20px', marginRight: '20px'}} />
							</div>
						</div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row foot-menu">
                                <div className="col-md-4 text-black text-center">
                                    <p href="#home" className='HomeFooterlink text-dark'>Home</p>
                                </div>
                                <div className="col-md-4">
                                    <p href="#price" className='text-black HomeFooterlink text-dark'>Pricing Plans</p>
                                </div>
                                <div className="col-md-4">
                                    <p href="#sku" className='text-black HomeFooterlink text-dark'>Subscription</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    );
};

export default Footer;
