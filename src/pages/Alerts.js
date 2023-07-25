import AlertsAdd from 'components/Alerts/AlertsAdd';
import WhatsappAlerts from 'components/Alerts/WhatsappAlerts';
import SKUMarquee from 'components/common/Marquee';
import ResponsiveAppBar from 'components/ProductDetail/Header';
import Footer from 'components/ProductDetail/Footer';

const Alerts = () => {
    return (
        <div>
            <ResponsiveAppBar />
            <div className="">
                <SKUMarquee />
            </div>
            <AlertsAdd />
            <WhatsappAlerts />
            <Footer/>
        </div>
    );
};

export default Alerts;
