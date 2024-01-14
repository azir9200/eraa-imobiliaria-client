import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../UseExiosecure/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";




const useWishlist = () => {
  //tan stack query
  const axiosSecure = UseAxiosSecure();
  const { user } = useContext(AuthContext);

  const { refetch, data: wishList = [] } = useQuery({
    queryKey: ['wishList'],
    queryFn: async () => {
      const res = await axiosSecure.get('wishList');
      return res.data;
      
    }
  })
  return [wishList, refetch]
};

export default useWishlist;


