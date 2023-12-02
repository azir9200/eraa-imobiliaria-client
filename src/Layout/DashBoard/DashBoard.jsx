import { FaAddressBook, FaEnvelope, FaFacebookMessenger, FaHome, FaRobot, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useWishlist from "../../Components/Hocks/useWishlist/useWishlist";
import useAdmin from "../../Components/Hocks/UseAdmin/UseAdmin";


const DashBoard = () => {
  const [wishList] = useWishlist();
  // todo: admin create
  const [isAdmin] = useAdmin();
  return (

    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-300" >
        <ul className="menu  " >
          {
            isAdmin ? <>
              <li><NavLink to="/dashBoard/wishList">
                <FaRobot></FaRobot>
                Admin Profile</NavLink> </li>

              <li><NavLink to="/myWishList">  <FaShoppingCart></FaShoppingCart>
                Manage Property</NavLink> </li>

              <li><NavLink to="/dashBoard/users">
                Manage Users  </NavLink> </li>

              <li><NavLink to="/myWishList">  <FaShoppingCart></FaShoppingCart>
                Manage Property</NavLink> </li>

              <li><NavLink to="/dashBoard/wishList">
                <FaAddressBook></FaAddressBook>
                Manage Reviews</NavLink> </li>


            </> :
              <>
                <li><NavLink to="/dashBoard/wishList">
                  <FaRobot></FaRobot>
                  My Profile</NavLink> </li>

                <li><NavLink to="/myWishList">  <FaShoppingCart></FaShoppingCart>
                  My Wish List </NavLink> </li>

                <li><NavLink to="/dashBoard/wishList">
                  Property Bought </NavLink> </li>

                <li><NavLink to="/dashBoard/wishList">
                  <FaAddressBook></FaAddressBook>
                  My Review</NavLink> </li>
              </>
          }


          <div className="divider p-12" > </div>

          <li><NavLink to="/dashBoard/wishList">
            <FaRobot></FaRobot>
            My Profile</NavLink> </li>

          <li><NavLink to="/myWishList">  <FaShoppingCart></FaShoppingCart>
            My Wish List :{wishList.length} Wish List</NavLink> </li>

          <li><NavLink to="/dashBoard/wishList">
            Property Bought </NavLink> </li>

          <li><NavLink to="/myWishList"> <FaAddressBook></FaAddressBook>
            My Review</NavLink> </li>



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