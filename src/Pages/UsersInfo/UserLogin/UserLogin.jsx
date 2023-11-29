
import { useContext, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";


const UserLogin = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  console.log('state in the AZIR location', location.state)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Success!',
          showClass: {
            popup: ` animate__animated animate__fadeInUp animate__faster  `
          },
          hideClass: {
            popup: ` animate__animated animate__fadeOutDown  animate__faster `
          }
        });
        navigate(from, { replace: true });
      })
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
  }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center   md:w-1/2 ">
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div className="card  md:w-1/2  shadow-2xl bg-base-100">
          <h1 className="text-5xl text-center font-bold">Login now!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="captcha" onBlur={handleValidateCaptcha} name="captcha" placeholder="Type above letters" className="input input-bordered" required />
              {/* <button className="btn btn-xs text-lg">Validate</button> */}

            </div>
            <div className="form-control mt-6">
              <input className="btn btn-success  text-2xl  " type="submit" value="Login" />
            </div>
          </form>
          <Link to="/userSignup" >   <div className="text-center text-lg" >Dont have a account yet ?  <span className="font-bold text-amber-800" >Register</span> </div>  </Link>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;