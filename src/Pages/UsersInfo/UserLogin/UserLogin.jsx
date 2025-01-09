import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate } from "react-simple-captcha";
import Swal from "sweetalert2";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";
import { setUser } from "../../../redux/features/userSlice";
import { verifyToken } from "../../../redux/utils";
import { useLoginMutation } from "../../../redux/api/authApi/authApi";
import { useDispatch, useSelector } from "react-redux";

const UserLogin = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.login);
  const [login] = useLoginMutation();

  // const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // const from = location.state?.from?.pathname || "/";

  // console.log('state in the location', location.state)
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Redux login here
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      console.log("user login", result);

      const user = verifyToken(result.data.accessToken);
      dispatch(setUser({ user: user, token: result.data.accessToken }));
      console.log("login", user);
      if (result.success && result.data?.accessToken) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registration is successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      } else {
        throw new Error(result.message || "Login failed. No access token.");
      }
    } catch (error) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration is successful!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    }
  };
  //Redux end

  // const handleLogin = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(email, password);
  //   signIn(email, password)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user);
  //       Swal.fire({
  //         title: 'Your login Successful !',
  //         showClass: {
  //           popup: ` animate__animated animate__fadeInUp animate__faster  `
  //         },
  //         hideClass: {
  //           popup: ` animate__animated animate__fadeOutDown  animate__faster `
  //         }
  //       });
  //       navigate(from, { replace: true });
  //     })
  // }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
  };

  return (
    <div className="p-8 m-8 bg-base-200">
      <div>
        <h1 className="text-3xl mb-8 text-center font-xl">Login First </h1>
      </div>
      <div className="lg:flex">
        <div className=" md:w-1/2 rounded-xl shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="captcha"
                onBlur={handleValidateCaptcha}
                name="captcha"
                placeholder="Type above letters"
                className="input input-bordered"
                required
              />
              {/* <button className="btn btn-xs text-lg">Validate</button> */}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-success  text-2xl  "
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p>
            <Link to="/userSignup">
              {" "}
              <div className="text-center text-lg">
                Dont have a account yet ?{" "}
                <span className="font-bold text-amber-800">Register</span>{" "}
              </div>{" "}
            </Link>
          </p>
        </div>
        <div className="text-center border  md:w-1/2 ">
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};
export default UserLogin;
