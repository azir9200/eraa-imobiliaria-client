import FeaturedCard from "../FeaturedCard/FeaturedCard";
import useHouses from "../../../Components/Hocks/AllHouses";


const Featured = () => {
  const [allhouses] = useHouses();


  const houses = allhouses.slice(0, 4);

  return (
    <div>
<h2 className="text-center text-xl font-semibold m-6">FIND YOUR BEST HOUSE HERE</h2>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 " >

        {
          houses.map(house => <FeaturedCard key={house.id} house={house} ></FeaturedCard>)
        }
      </div>

    </div>
  );
};

export default Featured;