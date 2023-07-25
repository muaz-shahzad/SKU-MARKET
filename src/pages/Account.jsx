import React from "react";
import ResponsiveAppBar from "components/ProductDetail/Header";
import Footer from "components/ProductDetail/Footer";
import Marquee from "components/common/Marquee";
import AccountHero from "components/Account/AccountHero";

 
const Account = () => {
  
    return (
        <div className="bg-white">
        <ResponsiveAppBar />
        <div className="mt-3">
          <Marquee />
        </div>
 <AccountHero/>
        <Footer />
      </div>
    );
};

export default Account;
