import Announcement from "../container/Announcement";
import Catagories from "../container/Catagories";
import Footer from "../container/Footer";
import Newsletter from "../container/Newsletter";
import Products from "../container/Products";
import Slider from "../container/Slider";
import Navbar from "../navbar/Navbar";
import Featured from "../container/Featured";
import Partner from "../container/Partner";

const Home = () => {
  return (
    <div className="">
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
      <Products />
      <Featured />
      <Partner />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
