import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import LayoutPage from "../components/LayoutPages";
import ProtectedRoute from "../components/ProtectedRoute";
import NewEmployee from "../pages/NewEmployee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage />,
    children: [
      { index: true, element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/home", element: <Home /> },
          { path: "/new-employee", element: <NewEmployee /> },
        ],
      },
    ],
  },
]);

export default router;
