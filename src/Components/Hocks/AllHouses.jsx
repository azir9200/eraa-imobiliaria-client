import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosOpen from "../UseAxiosOpen/UseAxiosOpen";

const useHouses = () => {
const axiosOpen = UseAxiosOpen();


  const {data: allHouses = [], isPending: loading, refetch} = useQuery({
    queryKey: ['allHouses'], 
    queryFn: async() =>{
        const res = await axiosOpen.get('/allHouses');
        return res.data;
    }
})

  return [allHouses, loading, refetch]

};

export default useHouses;