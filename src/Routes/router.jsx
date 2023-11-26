import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>

      },
      {
        path: '/allProperties',
        element: <AllProperties></AllProperties>
      },
      {
        path: '/houseDetails/:id',
        element: <HouseDetails></HouseDetails>
      }
    ]
  },
]);


export default router;