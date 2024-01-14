import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";

const axiosSecure = axios.create({
  baseURL: 'https://eraa-imobiliria-server.vercel.app'
  
})
const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);


  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token')
    // console.log('request stopped by interceptors', token);
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, function (error) {
    return Promise.reject(error);
  })

  //401 403 status
  // intercepts 401 and 403 status
  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async (error) => {
    const status = error.response.status;
    // console.log('status error in the interceptor', status);
    // for 401 or 403 logout the user and move the user to the login
    if (status === 401 || status === 403) {
      await logOut();
      navigate('/login');
    }
    return Promise.reject(error);
  })
  return axiosSecure;
};

export default UseAxiosSecure;