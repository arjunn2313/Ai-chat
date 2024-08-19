import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import DashBoard from "./pages/DashboardPage/DashBoard.jsx";
import ChatPage from "./pages/ChatPage/ChatPage.jsx";
import RootLayout from "./components/layouts/RootLayouts/RootLayout.jsx";
import DashBoardLayout from "./components/layouts/DashBoardLayout/DashBoard.jsx";
import SignIN from "./pages/SignIn/SignIN.jsx";
import SignUP from "./pages/SignUp/SignUP.jsx";



const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/sign-in/*",
        element: <SignIN />,
      },
      {
        path: "/sign-up/*",
        element: <SignUP />,
      },
      {
        element: <DashBoardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashBoard />,
          },
          {
            path: "/dashboard/chat/:id",
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
