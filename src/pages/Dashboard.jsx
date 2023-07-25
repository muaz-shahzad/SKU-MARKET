import React from "react";
import Footer from "components/ProductDetail/Footer";
import Header from "components/ProductDetail/Header";
import Marquee from "components/common/Marquee";
import DashboardHero from "components/dashboard/dashboarHero";
import StatisticsTable from "components/dashboard/StatisticsTable";
import OpportunityTable from "components/dashboard/opartunityTable";
import TopGainerTable from "components/dashboard/TopGainersTable";
import "../components/dashboard/dashboard.css";
import TopRankedCatTable from "components/dashboard/topRankedCatTable";

const Dashboard = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="mt-3">
        <Marquee />
      </div>
      <DashboardHero />
      <StatisticsTable />
      <OpportunityTable />
      <TopGainerTable />
      <TopRankedCatTable />
      <Footer />
    </div>
  );
};

export default Dashboard;
