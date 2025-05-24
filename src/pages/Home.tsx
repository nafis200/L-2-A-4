import AboutUs from "./Aboutus";
import CustomCard from "./Card";
import CarShopBanner from "./CarShopBanner";
import CarShopFAQ from "./CarShopFAQ";
import DiscountSection from "./DiscountSection";
import Praising from "./Praising";
import Swipper from "./Swipper";
import Testimonials from "./Testimonials";


const Home = () => {
  return (
    <div className="mx-1">
    <Swipper/>

    <div className="mt-5">
      <CustomCard/>
    </div>
    <div>
      <Testimonials/>
    </div>
    <div>
      <CarShopBanner/>
    </div>
    <div>
      <Praising/>
    </div>
    <div>
      <AboutUs/>
    </div>
    <div>
      <DiscountSection/>
    </div>
    <div>
      <CarShopFAQ/>
    </div>
  </div>
  );
};

export default Home;
