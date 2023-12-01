import { FaAddressBook, FaHome, FaRobot, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
  return (

    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-300" >
        <ul className="menu p-10 " >
          <li><NavLink to="/dashBoard/wishList">
            <FaRobot></FaRobot>
            My Profile</NavLink> </li>

          <li><NavLink to="/myWishList"> Wish List</NavLink> </li>

          <li><NavLink to="/dashBoard/wishList">
            <FaShoppingCart></FaShoppingCart>
            Property Bought </NavLink> </li>

          <li><NavLink to="/dashBoard/wishList">
            <FaAddressBook></FaAddressBook>
            My Review</NavLink> </li>


          <li><NavLink to='/'><FaHome></FaHome> Home </NavLink> </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;