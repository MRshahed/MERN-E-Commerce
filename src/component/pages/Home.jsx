import Announcement from "../container/Announcement";
import Slider from "../container/Slider";
import Navbar from "../navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  );
};

export default Home;
