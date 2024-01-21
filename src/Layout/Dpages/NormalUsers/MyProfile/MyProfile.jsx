import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";


const MyProfile = () => {

  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
          
        <span> </span>
        <h2 className="text-emerald-400 text-4xl mb-2">User Name: {user?.displayName} </h2>
        <p className="text-emerald-400  text-4xl mb-2"> User Email Address : {user.email} </p>
     
        <p className="text-emerald-400  text-4xl mb-2">User Role :{user.role}  </p>

      </div>
    </div>
  );
};

export default MyProfile;