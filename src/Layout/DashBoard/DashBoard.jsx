import { FaAddressBook, FaHome, FaPeriscope, FaRegQuestionCircle, FaRobot, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
  return (

    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-300" >
        <ul className="menu p-6 " >
          <li><NavLink to="/dashBoard/wishList">
            <FaRobot></FaRobot>
            Agent Profile</NavLink> </li>
          <li><NavLink to="/dashBoard/wishList"> Add Property</NavLink> </li>
          <li><NavLink to="/dashBoard/wishList">
            <FaShoppingCart></FaShoppingCart>
            My Added Property</NavLink> </li>

          <li><NavLink to="/dashBoard/wishList">
            <FaAddressBook></FaAddressBook>
            My Sold Properties</NavLink> </li>
          <li><NavLink to="/dashBoard/wishList"> Requested Properties</NavLink> </li>
          <li><div className="divider" ></div> </li>

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