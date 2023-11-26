import useHouses from "../../Components/Hocks/AllHouses";
import AllPropertyCard from "../AllPropertyCard/AllPropertyCard";


const AllProperties = () => {
  const [allhouses] = useHouses();

  return (
    <div>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 " >
        {
          allhouses.map(houses => <AllPropertyCard key={houses.id} houses={houses} ></AllPropertyCard>)
        }
      </div>
    </div>
  );
};

export default AllProperties;