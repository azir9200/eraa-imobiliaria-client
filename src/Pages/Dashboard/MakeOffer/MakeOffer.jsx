import Swal from "sweetalert2";


const MakeOffer = () => {

  const handleOffer = () => {

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your Offer has been submitted",
      showConfirmButton: false,
      timer: 2500
    });

  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="m-16 p-12 rounded-xl shadow-2xl bg-blue-200">
          <h1 className="text-5xl text-center font-bold"> Offer Information</h1>
          <form >
            <div className="md:flex gap-6" >
              <div className="form-control  ">
                <label className="label">
                  <span className="label-text">Property Title</span>
                </label>
                <input type="propertyTitle" name="propertyTitle" placeholder="Property Title " className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Property Location</span>
                </label>
                <input type="Property Location" name="propertyLocation" placeholder="Property Location" className="input input-bordered" />
              </div>
            </div>

            <div className="form-control">
                <label className="label">
                  <span className="label-text"> Property Price</span>
                  <input type="text" />
                </label>
                <input type="agentName" name="agentName" placeholder="Agent Name" className="input input-bordered" />
              </div>

            <div className="md:flex gap-6" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Agent Name</span>
                </label>
                <input type="agentName" name="agentName" placeholder="Agent Name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Email</span>
                </label>
                <input type="buyerEmail" name="Buyer Email" placeholder="Buyer Email" className="input input-bordered" />
              </div>
            </div>

            <div className="md:flex md:w-full gap-6" >
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buyer Name </span>
                </label>
                <input type="buyerName" name="buyerName" placeholder="Buyer Name" className="input input-bordered" />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Buying Date</span>
                </label>
                <input type="buyingDate" name="buyingDate" placeholder="Buying Date" className="input input-bordered" />
              </div>
            </div>
            <div className="form-control mt-6">
              <button onClick={handleOffer} >
                <input className="btn btn-success  text-2xl  " type="submit" value="Submit Offer" /> </button>
            </div>
          </form>

        </div>
      </div>


    </div >
  );
};

export default MakeOffer;