import axios from "axios";

const axiosOpen = axios.create({
  baseURL: 'http://localhost:5000'
})

const UseAxiosOpen = () => {
  return axiosOpen;
};

export default UseAxiosOpen;