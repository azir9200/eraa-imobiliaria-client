import { FaAddressBook, FaHome, FaRobot, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../../Components/Hocks/UseAdmin/UseAdmin";
import useAgent from "../../Components/Hocks/useAgent/UseAgent";

const DashBoard = () => {
  const [isAdmin] = useAdmin();

  const [isAgent] = useAgent();
  console.log(isAgent);

  return (
    <div className="flex">
      <div className="sm:w-32 md:w-64 min-h-screen bg-emerald-300">
        <ul className="menu  ">
          {isAdmin ? (
            <>
              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/adminProfile">
                  <FaRobot></FaRobot>
                  Admin Profile
                </NavLink>{" "}
              </li>

              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/wishList">My Wish List </NavLink>{" "}
              </li>

              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/addProperty">
                  {" "}
                  <FaShoppingCart></FaShoppingCart>
                  Add Property
                </NavLink>{" "}
              </li>

              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/manageProperty">
                  {" "}
                  <FaShoppingCart></FaShoppingCart>
                  Manage Property
                </NavLink>{" "}
              </li>

              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/allUsers">
                  <FaRobot></FaRobot>
                  Manage Users{" "}
                </NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              {/* normal  user dashboard */}
              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/myProfile">
                  <FaRobot></FaRobot>
                  My Profile
                </NavLink>{" "}
              </li>

              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/wishList">
                  {" "}
                  <FaShoppingCart></FaShoppingCart>
                  My Wish List{" "}
                </NavLink>{" "}
              </li>

              <li className="text-xl font-semibold">
                <NavLink to="/dashBoard/myReview">
                  <FaAddressBook></FaAddressBook>
                  My Review
                </NavLink>{" "}
              </li>
            </>
          )}

          <div className="divider md:px-12"> </div>

          <li className="text-xl font-semibold">
            <NavLink to="/">
              <FaHome></FaHome> Home{" "}
            </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
