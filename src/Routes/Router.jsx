import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllJobs from "../Components/AllJobs";
import WebDevelopment from "../Components/WebDevelopment";
import GraphicsDesign from "../Components/GraphicsDesign";
import VideoEditing from "../Components/VideoEditing";
import DigitalMarketing from "../Components/DigitalMarketing";
import AiServices from "../Components/AiServices";
import WritingTranslation from "../Components/WritingTranslation";
import AddJobs from "../Pages/AddJobs/AddJobs";
import PrivateRoute from "./PrivateRoute";
import JobDetails from "../Pages/JobDetails/JobDetails";
import MyPostedJobs from "../Pages/MyPostedJobs/MyPostedJobs";
import UpdateMyPostedJobModal from "../Components/UpdateMyPostedJobModal";
import BidRequest from "../Pages/BidRequest/BidRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <AllJobs></AllJobs>,
            loader: () => fetch("http://localhost:5000/allJobs"),
          },
          {
            path: "webDevelopment",
            element: <WebDevelopment></WebDevelopment>,
            loader: () => fetch("http://localhost:5000/webDevelopment"),
          },
          {
            path: "graphicsDesign",
            element: <GraphicsDesign></GraphicsDesign>,
            loader: () => fetch("http://localhost:5000/graphicsDesign"),
          },
          {
            path: "videoEditing",
            element: <VideoEditing></VideoEditing>,
            loader: () => fetch("http://localhost:5000/videoEditing"),
          },
          {
            path: "digitalMarketing",
            element: <DigitalMarketing></DigitalMarketing>,
            loader: () => fetch("http://localhost:5000/digitalMarketing"),
          },
          {
            path: "aiServices",
            element: <AiServices></AiServices>,
            loader: () => fetch("http://localhost:5000/aiServices"),
          },
          {
            path: "writingTranslation",
            element: <WritingTranslation></WritingTranslation>,
            loader: () => fetch("http://localhost:5000/writingTranslation"),
          },
        ],
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
        path: "/bidRequest/:email",
        element: <BidRequest></BidRequest>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/bidRequest/${params.email}`
          ),
      },
    ],
  },
]);


export default router