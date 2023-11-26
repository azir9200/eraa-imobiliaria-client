import { useEffect, useState } from "react";


const useHouses = () => {
  const [allhouses, setAllHouses] = useState([]);



  useEffect(() => {
    fetch('houses.json')
      .then(res => res.json())
      .then(data => setAllHouses(data))
  }, [])


  return [allhouses]
  // <div>
  //   <h2> houses</h2>
  //   <p> total houses {allhouses.length}  </p>
  // </div>

};

export default useHouses;