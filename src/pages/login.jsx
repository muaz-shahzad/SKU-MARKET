import React from "react";
import "../components/login/login.css"
// import Footer from "components/Home/Footer";
// import Header from "components/Home/Header";

const Login = () => {
    return (
        <>
            {/* <Header/> */}
            <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
                <div className="container">
                    <div className="row justify-content-center ">
                        <div className="col-xxl-4 col-lg-5 col-md-5 " style={{backgroundColor: '#f8f9fa !important'}}>
                            <div className="cardlogin" style={{backgroundColor: '#f8f9fa !important'}}>


                                <div className="card-headerlogin pt-4 pb-4 text-center" >
                                    <a href="index.html">
                                        <span><img style={{ width: '200px', height: '60px' }} src="images/SKU-Market-Logo.svg" alt="logo" height="" /></span>
                                    </a>
                                </div>

                                <div className="card-body2 p-4" style={{backgroundColor: '#f8f9fa !important'}}>

                                    <div className="text-center ">
                                        <h4 className="text-dark-50 text-center pb-0 fw-bold ">Sign In</h4>
                                        <p className="text-muted mb-4 fs-5">Enter your email address and password to access admin panel.</p>
                                    </div>

                                    <form action="#" style={{backgroundColor: '#f8f9fa !important'}}>

                                        <div className="mb-3">
                                            <label htmlFor="emailaddress" className="form-label fs-5">Email address</label>
                                            <input className="form-control" type="email" id="emailaddress" required="" placeholder="Enter your email" />
                                        </div>

                                        <div className="mb-3">
                                            <a href="pages-recoverpw.html" className="text-muted float-end"><small>Forgot your password?</small></a>
                                            <label htmlFor="password" className="form-label fs-5">Password</label>
                                            <div className="input-group input-group-merge">
                                                <input type="password" id="password" className="form-control" placeholder="Enter your password" />
                                                <div className="input-group-text" data-password="false">
                                                    <span className="password-eye"></span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-3 mb-3">

                                            <div className="mb-3 form-check d-flex align-items-center">
                                                <input type="checkbox" className="" style={{width: '18px' , height: '18px'}} id="exampleCheck1" />
                                                <label className="form-check-label fs-5 text-black" htmlFor="exampleCheck1">Remember me</label>
                                            </div>
                                        </div>

                                        <div className="mb-3 mb-0 text-center">
                                            <button className="py-1 px-2 fs-5 text-white border-none" type="submit" style={{border: 'none', borderRadius: '6px' ,color: 'white' , backgroundColor: '#1560FF'  }}> Log In </button>
                                        </div>

                                    </form>
                                </div>
                            </div>


                            <div className="row mt-3">
                                <div className="col-12 text-center">
                                    <p className="text-muted" >Don't have an account? <a href="pages-register.html" className="text-muted ms-1 fw-bold fs-5"><b>Sign Up</b></a></p>

                                    <h6 className="fw-normal text-muted fs-5">All rights reserved @ 2022 - 2023</h6>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>

            </div>
            {/* <Footer/> */}
        </>
    )
}

export default Login;