
import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

 

const AdminProfile = () => {

  const { user } = useContext(AuthContext);
  return (
    <div className="mx-auto text-center">
        <h2 className=" text-3xl italic m-6">Admin Details</h2>
      <div className="mx-auto text-center  md:w-3/5 my-8">
          
    
        <h2 className="text-sky-500 text-4xl mb-2">Admin Name:   {user.displayName} </h2>
        <p className="text-sky-400  text-4xl mb-2">  Email : {user.email} </p>
     
       
      </div>
    </div>
  );
};

export default AdminProfile;