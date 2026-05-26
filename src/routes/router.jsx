import { Navigate, createBrowserRouter } from "react-router-dom"
import AuthLayout from "../layout/AuthLayout"
import DashboardLayout from "../layout/DashboardLayout"
import Home from "../pages/dashboard/Home"
import UsersTable from "../pages/users/UserTabel"
import LoginPage from "../pages/Auth/LoginPage"
import RegisterPage from "../pages/Auth/RegisterPage"
import ProtectedRoute from "./ProtectedRoute"
import ForgetPasswordPage from "../pages/Auth/ForgetPasswordPage"
import Robots from "../pages/robots/Robots"

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/login" /> },
      { path: "/login", element: <LoginPage /> },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/forget-password",
        element: <ForgetPasswordPage/>,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Home /> }, // dashboard main page
      { path: "users", element: <UsersTable /> }, // data table
      { path: "all-robots", element: <Robots /> },
    ],
  },
])

export default router
