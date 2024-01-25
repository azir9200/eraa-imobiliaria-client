import useHouses from "../../Components/Hocks/AllHouses";
import AllPropertyCard from "../AllPropertyCard/AllPropertyCard";


const AllProperties = () => {
  const [allhouses] = useHouses();

  return (
    <div className="" >
<h2 className="text-center mx-auto w-3/5 text-xl italic font-semibold  ">Fell Comfort to Find Your Best House From Our Website</h2>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 " >
        {
          allhouses.map(houses => <AllPropertyCard key={houses.id} houses={houses} ></AllPropertyCard>)
        }
      </div>
    </div>
  );
};

export default AllProperties;