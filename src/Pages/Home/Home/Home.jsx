import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Reviews from "../CustomerReviews/Reviews/Reviews";
import Featured from "../Featured/Featured";
import SearchMore from "../SearchMore/SearchMore";


const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Featured></Featured>
      <Reviews></Reviews>
      <SearchMore></SearchMore>
      <Advertise></Advertise>
    </div>
  );
};

export default Home;