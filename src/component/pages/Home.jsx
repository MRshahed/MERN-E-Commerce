import Announcement from "../container/Announcement";
import Catagories from "../container/Catagories";
import Slider from "../container/Slider";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Catagories />
    </div>
  );
};

export default Home;
