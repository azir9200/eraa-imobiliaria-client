import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import HouseDetails from "../Pages/HouseDetails/HouseDetails";
import UserLogin from "../Pages/UsersInfo/UserLogin/UserLogin";
import UserSignup from "../Pages/UsersInfo/UserSignup/UserSignup";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "../Layout/DashBoard/DashBoard";
import WishList from "../Pages/Dashboard/WishList/WishList";
import AllUsers from "../Layout/Dpages/AllUsers/AllUsers";
import AddProperty from "../Layout/Dpages/AgentPage/AddProperty/AddProperty";
import MyProfile from "../Layout/Dpages/NormalUsers/MyProfile/MyProfile";
import AgentProfile from "../Layout/Dpages/AgentPage/AgentProfile/AgentProfile";
import MyAddedProperty from "../Layout/Dpages/AgentPage/MyAddedProperty/MyAddedProperty";
import MySoldProperty from "../Layout/Dpages/AgentPage/MySoldProperty/MySoldProperty";
import RequestedProperty from "../Layout/Dpages/AgentPage/RequestedProperty/RequestedProperty";
import PropertyBought from "../Layout/Dpages/NormalUsers/PropertyBought/PropertyBought";
import MyReview from "../Layout/Dpages/NormalUsers/MyReview/MyReview";
import ModalReview from "../Pages/Home/ModalReview/ModalReview";
import MakeOffer from "../Pages/Dashboard/MakeOffer/MakeOffer";
import ErrorPage from "../Components/ErrorPage/ErrorPage";





const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      },
      {
        path: '/makeOffer',
        element: <MakeOffer></MakeOffer>
      },
      {
        path: 'modalReview',
        element: <ModalReview></ModalReview>
      }
    ]
  },
  {
    path: 'dashBoard',
    element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children: [
      //normal user route
      {
        path: 'wishList',
        element: <WishList></WishList>
      },
      {
        path: 'myProfile',
        element: <MyProfile></MyProfile>
      },
      {
        path: 'myProfile/:id',
        element: <MyProfile></MyProfile>,
        loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
      },

      {
        path: 'propertyBought',
        element: <PropertyBought></PropertyBought>
      },
      {
        path: 'myReview',
        element: <MyReview></MyReview>
      },
      //todo : make admin roote
      {
        path: 'addProperty',
        element: <AddProperty> <AddProperty></AddProperty> </AddProperty>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      // agent routes
      {
        path: 'agentProfile',
        element: <AgentProfile></AgentProfile>
      },
      {
        path: 'addProperty',
        element: <AddProperty></AddProperty>
      },
      {
        path: 'myAddedProperty',
        element: <MyAddedProperty></MyAddedProperty>
      },
      {
        path: 'soldProperty',
        element: <MySoldProperty></MySoldProperty>
      },
      {
        path: 'requestedProperty',
        element: <RequestedProperty></RequestedProperty>
      }



    ]
  }
]);


export default router;