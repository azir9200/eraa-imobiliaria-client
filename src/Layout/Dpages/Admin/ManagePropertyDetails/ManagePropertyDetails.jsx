import { Link } from "react-router-dom";
import useHouses from "../../../../Components/Hocks/AllHouses";
import {  FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";


const ManagePropertyDetails = ({item}) => {

   const [ refetch] = useHouses();

const [remain, setRemain] = useState([])

  const {  image, property_name,  price_range, } = item;


  const handleDeleteItem = (_id) => {
    console.log("_id",  _id)
    
      Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
      })



      fetch(`https://eraa-imobiliria-server.vercel.app/allHouses/${_id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
     
     if (data.deletedCount > 0) {
        // refetch to update the 
        refetch(); 
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: 'card has been deleted',
            showConfirmButton: false,
            timer: 1500
        });
        const remaining = remain.filter(item => item._id !== _id);
        setRemain(remaining);
     }
      }) 

    }



  return (
    <div>
    
<div className="card card-side bg-base-100 shadow-xl">
<figure className="w-3/5" > <img src={image} alt="Album" className="max-h[600px]  " />  </figure>
  <div className="card-body">
  <div>
   
  <h2 className="text-xl" >Property Name:   {property_name} </h2>
    <h2 className="text-xl">Location: </h2>
    <p className="text-xl" >Price: {price_range} </p>
   
  </div>
    <div className="card-actions justify-end">
    <Link to={`/dashboard/updateHouse/${item._id}`} >
       <button  className="btn btn-ghost  bg-orange-300">  update  </button> </Link>
       <button onClick={() => handleDeleteItem(item._id)}
        className="btn btn-ghost border border-red-200">
       <FaTrashAlt className="text-red-600"></FaTrashAlt>Delete</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default ManagePropertyDetails;