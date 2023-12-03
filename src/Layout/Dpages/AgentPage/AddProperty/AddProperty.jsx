import { useForm } from "react-hook-form";
import UseAxiosOpen from "../../../../Components/UseAxiosOpen/UseAxiosOpen";
import UseAxiosSecure from "../../../../Components/Hocks/UseExiosecure/UseAxiosSecure";
import Swal from "sweetalert2";

const AddProperty = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosOpen = UseAxiosOpen();
  const axiosSecure = UseAxiosSecure();
  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] }
    const res = await axiosOpen.post(imageFile, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    });
    if (res.data.success) {
      // now send the menu item data to the server with the image url
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }

      const menuRes = await axiosSecure.post('/menu', menuItem);
      console.log(menuRes.data)
      if (menuRes.data.insertedId) {
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
    console.log('with image url', res.data);
  };
  return (
    <div>
      <p className="text-xl text-center font-bold" >Add Property Information here...</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} />


        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("photoURL", { required: true })} name="photoURL" placeholder="photo URL" className="input input-bordered" />
          { }
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Property Title</span>
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
          <input type="text" {...register("location", { required: true })} name="lication" placeholder="location" className="input input-bordered" />

        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" {...register("agentPhotoURL", { required: true })} name="agentPhotoURL" placeholder="Agent photo URL" className="input input-bordered" />
          { }
        </div>

        <button className="btn btn-success  ">  Add Properties </button>
      </form>
    </div >
  );
};

export default AddProperty;