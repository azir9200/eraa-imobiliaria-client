import useWishlist from "../../../Components/Hocks/useWishlist/useWishlist";
import MyWishListDetails from "../MyWishListDetails/MyWishListDetails";


const WishList = () => {
  const [wishList] = useWishlist();
  // const totalPrice = wishList.reduce((total, item) => total + item.price_range, 0)

  return (
    <div>


      <h2 className="text-2xl">My Wish List {wishList.length} </h2>

      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 " >

        {
          wishList.map(details => <MyWishListDetails key={details._id} details={details}
          > </MyWishListDetails>)
        }
      </div>

    </div>
  );
};

export default WishList;