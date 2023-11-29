import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";

const UserSignup = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { createUser, updateUserInfo } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
      .then(result => {
        const userSignup = result.user;
        console.log(userSignup);
        updateUserInfo(data.name, data.photoURL)
          .then(() => {
            console.log('user profile info updated !')
            reset();
            Swal.fire({
              title: "Congratulation !",
              text: "User created Successfully.",
            });
            navigate('/');
          })
          .catch(error => console.log(error))
      })
  }

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center   md:w-1/2 ">
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card  md:w-1/2  shadow-2xl bg-base-100">
            <h1 className="text-5xl text-center font-bold">Signup Please!</h1>
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
                <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
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
                {/* {errors.password && <p className="text-red-700" >Password field is required</p>}
                 */}
              </div>

              {/* <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
                })} name="password" placeholder="password" className="input input-bordered" />
                {errors.password?.type === 'required' && <p className="text-red-700" >Password is required.</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-700" >Password must be 7 Caracter.</p>}
                {errors.password?.type === 'maxLength' && <p className="text-red-700" >Password can not  be more then 12 Caracter.</p>}
              </div> */}

              <div className="form-control mt-6">
                <input className="btn btn-primary  text-2xl  " type="submit" value="Signup" />
              </div>
            </form>
            <Link to="/userLogin" > <div className="text-center text-lg" >Already have an account  ?  <span className="font-bold text-amber-800" >Login</span> </div>  </Link>
          </div>
        </div >
      </div >
    </>
  );
};

export default UserSignup;