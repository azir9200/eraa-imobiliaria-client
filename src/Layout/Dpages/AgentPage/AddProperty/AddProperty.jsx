import { useForm } from "react-hook-form";
import UseAxiosOpen from "../../../../Components/UseAxiosOpen/UseAxiosOpen";
import UseAxiosSecure from "../../../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import Swal from "sweetalert2";
// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
// const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosOpen = UseAxiosOpen();
  const axiosSecure = UseAxiosSecure();

   const onSubmit = async(data) => {
    console.log(data)

//.......
    // const image = data.image;
    // const res = await axiosOpen.post(image_hosting_api, image, {
    //   headers: {
    //     'content-type': 'multipart/form-data'
    //   }
    // });
    // if (res.data.success) { }
      // now send the menu item data to the server with the image url
      const propertyInfo = {
        name: data.name,
        photoURL: data.photoURL,
        title: data.title,
        price: parseFloat(data.price),
        location: data.location,
        // AgentPhotoURL: res.data.data.agentPhotoURL
      }
      console.log(propertyInfo);

      // const addProperty =  axiosSecure.post('/allHouses', propertyInfo);      
      // console.log(addProperty.data)

   // send data to the server
  //  'https://eraa-imobiliria-server.vercel.app'
  
  //  fetch('https://eraa-imobiliria-server.vercel.app/allHouses', {
    fetch('http://localhost:5000/allHouses', {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(propertyInfo)
})
.then(res => res.json())
.then(data => {
  console.log(data);
      if (data.insertedId) {
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
})
    
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
          <input type="text" {...register("photoURL")} name="photoURL" placeholder="photo URL" className="input input-bordered" />
          
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Title </span>
          </label>
          <input type="text" {...register("title")} name="title" placeholder="title" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Price</span>
          </label>
          <input type="text" {...register("price")} name="price" placeholder="price" className="input input-bordered" />
          
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
          
        </div>

        <div className="flex justify-center my-6 items-center" >
          <button className="btn font-bold text-lg w-full ">  Add Properties </button>  </div>
      </form>
    </div >
  );
};

export default AddProperty;