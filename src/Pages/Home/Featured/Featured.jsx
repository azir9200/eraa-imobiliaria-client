import FeaturedCard from "../FeaturedCard/FeaturedCard";
import useHouses from "../../../Components/Hocks/AllHouses";


const Featured = () => {
  const [allhouses] = useHouses();

  // const [allhouse, setHouses] = useState([]);
  // useEffect(() => {
  //   fetch('houses.json')
  //     .then(res => res.json())
  //     .then(data => setHouses(data))
  // }, [])
  const houses = allhouses.slice(0, 4);

  return (
    <div>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 " >

        {
          houses.map(house => <FeaturedCard key={house.id} house={house} ></FeaturedCard>)
        }
      </div>

    </div>
  );
};

export default Featured;