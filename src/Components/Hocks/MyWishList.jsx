import { useEffect } from "react";
import { useState } from "react";

const MyWishList = () => {
  const [wishLists, setWishList] = useState([])
  
  useEffect(() => {
    fetch('https://eraa-imobiliria-server.vercel.app/wishList')
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
