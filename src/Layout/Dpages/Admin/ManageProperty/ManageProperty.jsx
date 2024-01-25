
import useHouses from "../../../../Components/Hocks/AllHouses";
import ManagePropertyDetails from "../ManagePropertyDetails/ManagePropertyDetails";

const ManageProperty = () => {

const [ allHouses, refetch] = useHouses();



  return (
    <div>

<div className="grid grid-cols-1  lg:grid-cols-2 gap-4 " >
       
            {
             allHouses.map(item=> 
                 <ManagePropertyDetails
                 
                 key={item._id} 
                 refetch={refetch}
                  item={item}>

                  </ManagePropertyDetails> )
            }
        </div>



     
    </div>
  );
};

export default ManageProperty;