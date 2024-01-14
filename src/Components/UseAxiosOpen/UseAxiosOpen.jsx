import axios from "axios";

const axiosOpen = axios.create({
   baseURL: 'https://eraa-imobiliria-server.vercel.app'
  //baseURL: 'http://localhost:5000/'
})

const UseAxiosOpen = () => {
  return axiosOpen;
};

export default UseAxiosOpen;