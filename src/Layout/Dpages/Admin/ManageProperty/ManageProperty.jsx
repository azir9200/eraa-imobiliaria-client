import { Link } from "react-router-dom";
import useHouses from "../../../../Components/Hocks/AllHouses";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageProperty = () => {

const [allHouses, refetch] = useHouses();
const [_id]  = allHouses;
const [remain, setRemain] = useState([])

const handleDeleteItem = (_id) => {
  Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
  })
  
        // const res = await axiosSecure.delete(`/menu/${item._id}`);
         // console.log(res.data);
         fetch(`http://localhost:5000/allHouses/${_id}`, {
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
        <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allHouses.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       
                                        {item.property_name}
                                    </td>
                                    <td className="text-right">${item.price_range}</td>
                                    <td>
                                    <Link to={`/dashboard/updateHouse/${item._id}`} >
                                          <button  className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaEdit className="text-white  "></FaEdit> update
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                    
                                        <button
                                            onClick={() => handleDeleteItem(item._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>    </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
    </div>
  );
};

export default ManageProperty;