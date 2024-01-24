import { FaAddressBook, FaEnvelope, FaFacebookMessenger, FaHome, FaRobot, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../../Components/Hocks/UseAdmin/UseAdmin";
import useAgent from "../../Components/Hocks/useAgent/UseAgent";


const DashBoard = () => {

  const [isAdmin] = useAdmin();
console.log(isAdmin);

const [isAgent] = useAgent();
console.log(isAgent)



  return (

    <div className="flex">
      <div className="w-64 min-h-screen bg-emerald-300" >
        <ul className="menu p-6 " >
          {
            isAdmin ? <>
              <li><NavLink to="/dashBoard/adminProfile">
                <FaRobot></FaRobot>
                Admin Profile</NavLink> </li>

             
              <li><NavLink to="/dashBoard/addProperty">  <FaShoppingCart></FaShoppingCart>
                Add Property</NavLink> </li>

              <li><NavLink to="/dashBoard/manageProperty">  <FaShoppingCart></FaShoppingCart>
                Manage Property</NavLink> </li>

                <li><NavLink to="/dashBoard/allUsers">
                <FaRobot></FaRobot>
                Manage Users </NavLink> </li>

             


            </> :
              <>
                {/* normal dashboard */}
                <li><NavLink to="/dashBoard/myProfile">
                  <FaRobot></FaRobot>
                 My Profile</NavLink> </li>

                <li><NavLink to="/dashBoard/wishList"> <FaShoppingCart></FaShoppingCart>
                  My Wish List </NavLink> </li>

                <li><NavLink to="/dashBoard/propertyBought">
                  Property Bought </NavLink> </li>


                <li><NavLink to="/dashBoard/myReview">
                  <FaAddressBook></FaAddressBook>
                  My Review</NavLink> </li>
              </>
          }

          
<div className="divider p-12" > </div>

          {
            isAgent ? <>
                         <li><NavLink to="/dashBoard/agentProfile">
            <FaRobot></FaRobot>
            Agent  Profile</NavLink> </li>

     
          <li><NavLink to="/dashBoard/myAddedProperty">
            My Added Properties  </NavLink> </li>

          <li><NavLink to="/dashBoard/soldProperty"> <FaAddressBook></FaAddressBook>
            My Sold Properties</NavLink> </li>

          <li><NavLink to="/dashBoard/requestedProperty"> <FaAddressBook></FaAddressBook>
            Requested Properties</NavLink> </li>

            </> :
              <>
              <li><NavLink to='/'><FaFacebookMessenger> </FaFacebookMessenger>  <FaEnvelope></FaEnvelope> Contacts </NavLink> </li>
               
              </>
          }


          
          {/* agent  */}
          {/* <li><NavLink to="/dashBoard/agentProfile">
            <FaRobot></FaRobot>
            Agent  Profile</NavLink> </li>

     
          <li><NavLink to="/dashBoard/myAddedProperty">
            My Added Properties  </NavLink> </li>

          <li><NavLink to="/dashBoard/soldProperty"> <FaAddressBook></FaAddressBook>
            My Sold Properties</NavLink> </li>

          <li><NavLink to="/dashBoard/requestedProperty"> <FaAddressBook></FaAddressBook>
            Requested Properties</NavLink> </li> */}

          {/* regular */}
          <div className="divider p-12" > </div>

          <li><NavLink to='/'><FaHome></FaHome> Home </NavLink> </li>
          <li><NavLink to='/'><FaFacebookMessenger> </FaFacebookMessenger>  <FaEnvelope></FaEnvelope> Contacts </NavLink> </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;