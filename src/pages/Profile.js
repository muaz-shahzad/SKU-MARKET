import ResponsiveAppBar from "components/ProductDetail/Header";
import Footer from "components/ProductDetail/Footer";
import Marquee from "components/common/Marquee";
import ProfileHero from "components/profile/profileHero";
import StoreSKU from "components/profile/storeSKU";
import FullfilmentTable from "components/profile/FullfilmentTable";
import ProfileGainerTable from "components/profile/profileGainerTable";
import TopRankedProfileTable from "components/profile/topRankedProfileTable";

 
const Profile = () => {
    return (
        <div className="bg-white">
        <ResponsiveAppBar />
        <div className="mt-3">
          <Marquee />
        </div>
        <ProfileHero />
       <StoreSKU />
       <div>
       <FullfilmentTable />
       </div>
       <ProfileGainerTable />
       <TopRankedProfileTable />
        <Footer />
      </div>
    );
};

export default Profile;