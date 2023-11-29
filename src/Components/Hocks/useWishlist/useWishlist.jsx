import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure, { axiosSecure } from "../UseExiosecure/UseAxiosSecure";


const useWishlist = () => {
  //tan stack quary

  const axiosSecure = UseAxiosSecure();

  const { data: wishlist = [] } = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
      const res = await axiosSecure.get('/wishlist')
      return res.data;
    }
  })
  return [wishlist]
};

export default useWishlist;