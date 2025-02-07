import AboutUs from "./components/aboutUs";
import BlogPost from "./components/blogPost";
import ChooseNpick from "./components/chooseNpick";
import Clients from "./components/cleint";
import Foodcategory from "./components/foodcategory";
import FoodProcessBanner from "./components/foodProcessBanner";
import Hero from "./components/hero";
import MeetOurchefs from "./components/meetOurchefs";
import Testimonials from "./components/testimonials";
import WhyChooseUs from "./components/whyChooseus";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Foodcategory />
      <WhyChooseUs />
      <Clients />
      <ChooseNpick />
      <MeetOurchefs />
      <Testimonials/>
      <FoodProcessBanner/>
      <BlogPost/>
    </div>
  );
}
