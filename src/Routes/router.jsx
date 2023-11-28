import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";
import UserLogin from "../Pages/UsersInfo/UserLogin/UserLogin";
import UserSignup from "../Pages/UsersInfo/UserSignup/UserSignup";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
        path: '/userLogin',
        element: <UserLogin></UserLogin>
      },
      {
        path: '/userSignup',
        element: <UserSignup></UserSignup>
      },
      {
        path: '/secret',
        element: <PrivateRoute> <Secret></Secret></PrivateRoute>
      },
      {
        path: '/houseDetails/:id',
        element: <HouseDetails></HouseDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/allHouse/${params.id}`)
      }
    ]
  },
]);


export default router;