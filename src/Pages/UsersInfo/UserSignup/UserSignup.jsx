import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";
import UseAxiosOpen from "../../../Components/UseAxiosOpen/UseAxiosOpen";
import SocialLogin from "../../../Components/SocialLogin/SocialLogin";

const UserSignup = () => {
  const axiosOpen = UseAxiosOpen();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const userSignup = result.user;
        console.log(userSignup);
        updateUserInfo(data.name, data.photoURL)
          .then(() => {
            //create user entry in the database,
            const userInfo = {
              name: data.name,
              email: data.email
            }

            axiosOpen.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  console.log('user added to the database')
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
                  navigate(from, { replace: true });
                }
              })
          })
          .catch(error => console.log(error))
      })
  }

  return (
    <>
      <div className=" bg-base-200">
        <div>
        <h1 className="text-5xl mt-12 text-center font-2xl">SignUp Please!</h1>
        </div>
        <div className=" lg:flex">
          <div className="text-center border border-violet-400  md:w-1/2 ">                      
            <SocialLogin></SocialLogin>        
          </div>
          <div className="card px-8 md:w-1/2  shadow-2xl bg-base-100">
            
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" {...register("name", { required: true })} name="name" placeholder="Name" className="input input-bordered" />
                {errors.name && <span className="text-red-700" >Name field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL")} name="photoURL" placeholder="photo URL" className="input input-bordered" />
                {errors.photoURL && <span className="text-red-700" >Photo  URL is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                {errors.email && <p className="text-red-700" >Email field is required</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password")} name="password" placeholder="password" className="input input-bordered" />
                
              </div>

              <div className="form-control mt-6">
                <input className="btn btn-primary  text-2xl  " type="submit" value="Signup" />
              </div>
            </form>
            <p className="px-10" ><Link to="/userLogin" > <div className="text-center text-lg" >Already have an account  ?  <span className="font-bold text-amber-800" >Login</span></div></Link>
            </p>
            
          </div>

        </div >
      </div >
    </>
  );
};

export default UserSignup;