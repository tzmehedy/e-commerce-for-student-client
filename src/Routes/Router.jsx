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
          },
          {
            path: "webDevelopment",
            element: <WebDevelopment></WebDevelopment>,
          },
          {
            path: "graphicsDesign",
            element: <GraphicsDesign></GraphicsDesign>,
          },
          {
            path: "videoEditing",
            element: <VideoEditing></VideoEditing>,
          },
          {
            path: "digitalMarketing",
            element: <DigitalMarketing></DigitalMarketing>,
          },
          {
            path: "aiServices",
            element: <AiServices></AiServices>,
          },
          {
            path: "writingTranslation",
            element: <WritingTranslation></WritingTranslation>,
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
    ],
  },
]);


export default router