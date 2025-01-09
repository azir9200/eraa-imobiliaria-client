import FeaturedCard from "../FeaturedCard/FeaturedCard";
import useHouses from "../../../Components/Hocks/AllHouses";

const Featured = () => {
  const [allhouses] = useHouses();

  // Show only the first 4 houses
  const houses = allhouses.slice(0, 4);

  return (
    <div className="bg-emerald-200 py-12 px-4 lg:px-16">
      <h2 className="text-center text-3xl font-bold text-emerald-600 mb-8">
        Find Your Best House Here
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {houses.map((house) => (
          <FeaturedCard key={house._id} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
