import { useEffect, useState } from "react";


const useHouses = () => {
  const [allhouses, setAllHouses] = useState([]);



  useEffect(() => {
    fetch('http://localhost:5000/allHouses')
      .then(res => res.json())
      .then(data => setAllHouses(data))
  }, [])


  return [allhouses]


};

export default useHouses;