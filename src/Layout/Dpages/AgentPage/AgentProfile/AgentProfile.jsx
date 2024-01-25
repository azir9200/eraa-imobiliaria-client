import { useContext } from "react";
import { AuthContext } from "../../../../Providers/AuthProviders";

 
       
const AgentProfile = () => {

  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="mx-auto text-center md:w-4/12 my-8">
          
      <h2 className="underline text-2xl m-6">Agent Profile</h2>
        <h2 className="text-emerald-400 text-4xl mb-2">User Name:   {user.displayName} </h2>
        <p className="text-emerald-400  text-4xl mb-2"> User Email Address : {user.email} </p>
     
       
      </div>
    </div>
  );
};

export default AgentProfile;