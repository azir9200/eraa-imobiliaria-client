import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const SearchMore = () => {
  return (
    <div className="">
      <div className="hero h-96" style={{ backgroundImage: 'url(https://i.ibb.co/p2xCw8G/search1.png)' }}>
      </div>



      <div className="text-center bg-violet-200  justify-center items-center">
        <div className=" md:flex  justify-center " >

          <Link to='/allProperties' >
            <button className="btn btn-outline btn-accent text-3xl w-36 my-8 text-center   ">BUY</button></Link>

          <Link to='/allProperties' >    <button className="btn btn-outline btn-success text-3xl w-36 my-8  mx-8 text-center ">RENT</button></Link>

          <Link to='/allProperties' >
            <button className="btn btn-outline btn-accent text-3xl w-36 my-8 text-center   ">Tresspass</button></Link>
        </div>
        <div className="w-1/3 md:flex justify-center items-center mx-auto pb-8 ">

          <input className="w-full rounded-md px-4 py-2" type="text" placeholder="search your house here .." />

          <button className="flex justify-center items-center ml-6 text-2xl " > Search <FaSearch className="text-2xl ml-4" ></FaSearch></button>
        </div>
      </div>


    </div>
  );
};

export default SearchMore;