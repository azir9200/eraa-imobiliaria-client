import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProviders";
import UseAxiosOpen from "../UseAxiosOpen/UseAxiosOpen";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
  const { googoleSignin } = useContext(AuthContext);
  const axiosOpen = UseAxiosOpen();
  const navigate = useNavigate();

  const handleGoogleSignin = () => {
    googoleSignin()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.name
        }
        axiosOpen.post('/users', userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/');
          })
      })
  }

  return (
    <div className="p-6" >
      <div className="divider shadow-lg" ></div>
      <div>
        <button onClick={handleGoogleSignin} className="btn text-lg"> <FaGoogle className="mr-4" ></FaGoogle>Google </button>
      </div>
    </div>
  );
};

export default SocialLogin;