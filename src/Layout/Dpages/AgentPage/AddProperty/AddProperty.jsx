import { useForm } from "react-hook-form";
import UseAxiosOpen from "../../../../Components/UseAxiosOpen/UseAxiosOpen";
import UseAxiosSecure from "../../../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import Swal from "sweetalert2";

const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosOpen = UseAxiosOpen();
  const axiosSecure = UseAxiosSecure();
   const onSubmit = (data) => {
    console.log(data)
    // const image = { image: data.image[0] }
    const res = axiosOpen.post( {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const propertyInfo = {
        name: data.name,
        photoURL: data.photoURL,
        title: data.title,
        price: parseFloat(data.price),
        location: data.location,
        AgentPhotoURL: res.data.data.agentPhotoURL
      }
      console.log(propertyInfo);
      const addProperty =  axiosSecure.post('/allHouses', propertyInfo);
      
      console.log(addProperty.data)
      if (addProperty.data.insertedId) {
        // show success popup
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
    console.log('image', res.data);
  };
  return (
    <div className="m-14 border-2 p-12  mx-auto border-gray-200" >
      <p className="text-xl text-center font-bold" >Add Property Information here...</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="form-control w-full my-6">
                        <label className="label">
         <span className="label-text">Property Name</span>  </label>
         <input  type="text"   placeholder="name"
                  {...register('name', { required: true })}
                           className="input input-bordered " />
                    </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
          { }
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Title </span>
          </label>
          <input type="text" {...register("Title", { required: true })} name="title" placeholder="title" className="input input-bordered" />
          { }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Price</span>
          </label>
          <input type="text" {...register("price", { required: true })} name="price" placeholder="price" className="input input-bordered" />
          { }
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Location</span>
          </label>
          <input type="text" {...register("location", { required: true })} name="location" placeholder="location" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Agent Photo URL</span>
          </label>
          <input type="agentPhotoURL" {...register("agentPhotoURL", { required: true })} name="agentPhotoURL" placeholder="Agent photo URL" className="input input-bordered" />
          { }
        </div>

        <div className="flex justify-center my-6 items-center" >
          <button className="btn font-bold text-lg w-full ">  Add Properties </button>  </div>
      </form>
    </div >
  );
};

export default AddProperty;