import owner1 from '../../../assets/owner1.png'

const Advertise = () => {
  return (
    <div className=' md:flex  ' >
      <img src={owner1} className='w-96' alt="owner1" />
      <div >
        <div className='mt-8 ml-8  bg-slate-200 '>
          <h2 className='text-3xl font-bold ' > Are You a Owner?        </h2>
          <p className='text-3xl' > Make yourself at home</p>
        </div>
        <hr />
        <div className='ml-8  mt-8 '  >
          <p className='text-lg mb-6 ' >To sell or rent your property, make an evaluation or create an advertisement in just a few minutes.</p>
          <div className='  md:flex' >  <button className="btn btn-outline btn-primary">FREE ADVERTISE</button>
            <button className="btn btn-outline btn-secondary ml-4">EVALUATE PROPERTY</button></div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;