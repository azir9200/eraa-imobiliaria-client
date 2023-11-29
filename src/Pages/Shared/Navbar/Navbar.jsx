import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { FaHeart } from "react-icons/fa";
import useWishlist from "../../../Components/Hocks/useWishlist/useWishlist";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [wishList] = useWishlist()

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));

  }

  const navlinks = <>
    <li><Link to='/' >Home</Link> </li>
    <li><Link to='/allProperties' >All Properties</Link> </li>
    <li><Link to='/houseDetails' >House details</Link></li>
    <li>
      <Link to='/'>
        <button className="btn" >
          <FaHeart></FaHeart>
          <div className="badge badge-secondary" >+{wishList.length}</div>
        </button>
      </Link>
    </li>

    {
      user ? <>
        <span>{user?.displayName} </span>
        <button onClick={handleLogout} className="btn btn-ghost text-xl ">Logout</button>
      </> : <>
        <li><Link to='/userLogin'>Login</Link></li>
      </>
    }
  </>

  return (
    <div className="navbar h-24  bg-emerald-200">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow font-semibold bg-base-100 rounded-box w-52">
            {navlinks}
          </ul>
        </div>
        <Link to='/' className=" text-xl">  <img className=" rounded-md  w-20 h-20" src={logo} alt="" /> </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal font-medium text-xl px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Search</a>
      </div>
    </div>
  );
};

export default Navbar;