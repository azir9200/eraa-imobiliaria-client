import  { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import UseAxiosSecure from '../UseExiosecure/UseAxiosSecure';
import { useQuery } from "@tanstack/react-query";

const useAgent = () => {
    
  const { user, loading } = useContext(AuthContext);
  const axiosSecure = UseAxiosSecure();
  const { data: isAgent, isPending: isAgentLoading } = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/agent/${user.email}`);
       console.log("data",res.data);
      return res.data?.agent;
    }
  })
  return [isAgent, isAgentLoading]
};

export default useAgent;