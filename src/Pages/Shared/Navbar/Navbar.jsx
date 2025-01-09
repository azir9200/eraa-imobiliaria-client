import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import useWishlist from "../../../Components/Hocks/useWishlist/useWishlist";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [wishList] = useWishlist();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navlinks = (
    <>
      <li>
        <Link to="/" className="hover:text-sky-600 transition duration-300">
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/allProperties"
          className="hover:text-sky-600 transition duration-300"
        >
          All Properties
        </Link>
      </li>
      <li>
        <Link
          to="/dashBoard/wishList"
          className="hover:text-sky-600 transition duration-300"
        >
          Dashboard: {wishList.length}
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar h-20 fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 lg:px-12">
      <div className="navbar-start flex items-center">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 shadow-lg bg-white rounded-lg w-52"
          >
            {navlinks}
          </ul>
        </div>

        {/* Logo and Brand Name (Hidden on Small Screens) */}
        <Link to="/" className="sm:flex hidden items-center">
          <img src={logo} alt="Logo" className="w-16 h-16 rounded-xl" />
          <span className="ml-2 text-xl font-bold text-gray-800 ">
            Real-Estate
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 space-x-6 text-lg font-medium text-gray-700">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end lg:flex">
        {/* Add any extra icons or buttons here */}
        {user ? (
          <>
            <span className="font-medium text-gray-700">
              {user?.displayName}
            </span>
            <button
              onClick={handleLogout}
              className="btn btn-ghost text-lg text-red-500 hover:text-red-700 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <li>
            <Link
              to="/userLogin"
              className="hover:text-sky-600 transition duration-300"
            >
              Login
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
