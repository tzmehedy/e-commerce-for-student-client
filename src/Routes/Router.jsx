import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddJobs from "../Pages/AddJobs/AddJobs";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import UpdateMyPostedJobModal from "../Components/UpdateMyPostedJobModal";
import BidRequest from "../Pages/BidRequest/BidRequest";
import MyBids from "../Pages/MyBids/MyBids";
import AllJobs from "../Pages/AllJobs/AllJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            "http://localhost:5000/allJobsByCategory?category=Web Development"
          ),
        
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>
      },
      {
        path: "/addJobs",
        element: (
          <PrivateRoute>
            <AddJobs></AddJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/jobDetails/:id",
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobDetails/${params.id}`),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateMyPostedJobModal></UpdateMyPostedJobModal>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobDetails/${params.id}`),
      },
      {
        path: "/bidRequest",
        element: (
          <PrivateRoute>
            <BidRequest></BidRequest>
          </PrivateRoute>
        ),
      },

      {
        path: "/my-bids",
        element: (
          <PrivateRoute>
            <MyBids></MyBids>
          </PrivateRoute>
        ),
      },
    ],
  },
]);


export default router