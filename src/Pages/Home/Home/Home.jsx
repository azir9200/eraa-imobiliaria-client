import Advertise from "../Advertise/Advertise";
import Banner from "../Banner/Banner";
import Reviews from "../CustomerReviews/Reviews/Reviews";
import Featured from "../Featured/Featured";
import SearchMore from "../SearchMore/SearchMore";

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Banner Section */}
      <section className="mb-6 mt-16 ">
        <Banner />
      </section>

      {/* Featured Properties Section */}
      <section className="mb-4 ">
        <Featured />
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-emerald-50 mb-4">
        <Reviews />
      </section>

      {/* Search More Section */}
      <section className="mb-12 ">
        <SearchMore />
      </section>

      {/* Advertisement Section */}
      <section className="bg-white py-12 shadow-md">
        <Advertise />
      </section>
    </div>
  );
};

export default Home;
