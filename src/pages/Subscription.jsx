import React from "react";
import SKUMarquee from "components/common/Marquee";
import ResponsiveAppBar from "components/ProductDetail/Header";
import Footer from "components/ProductDetail/Footer";
import SubscriptionHero from "components/Subscriptions/subscriptionHero";
import '../components/Subscriptions/subscription.css';

const Subscriptions = () => {

    return (
        <div>
        <ResponsiveAppBar />
        <div className="">
          <SKUMarquee />
        </div>
        <SubscriptionHero/>
        <Footer />
      </div>
    )
}

export default Subscriptions;