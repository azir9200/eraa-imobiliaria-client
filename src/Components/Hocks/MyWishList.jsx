import { useEffect } from "react";
import { useState } from "react";

const MyWishList = () => {
  const [wishLists, setWishList] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:5000/wishList')
      .then(res => res.json())
      .then(data => setWishList(data))
  }, [])
  return (
    <div>
      <p> total wishlist : {wishLists.length} </p>
    </div>
  )
};

export default MyWishList;

// import { useEffect, useState } from "react";

// const Carts = () => {
//   const [allCarts, setAllCarts] = useState([]);


//   useEffect(() => {
//     fetch('http://localhost:5000/wishList')
//       .then(res => res.json())
//       .then(data => setAllCarts(data))
//   }, [])

//   return [allCarts]

// };

// export default Carts;
