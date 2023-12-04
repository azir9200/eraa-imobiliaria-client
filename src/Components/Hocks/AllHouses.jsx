import { useEffect, useState } from "react";


const useHouses = () => {
  const [allhouses, setAllHouses] = useState([]);



  useEffect(() => {
    fetch('https://eraa-imobiliria-server.vercel.app/allHouses')
      .then(res => res.json())
      .then(data => setAllHouses(data))
  }, [])


  return [allhouses]


};

export default useHouses;