import React, { useEffect } from "react";
import "./DashBoard.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import ChatList from "../../chatList/ChatList";

export default function DashBoardLayout() {
  const { userId, isLoaded } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded, userId, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboardLayout">
      <div className="menu">
        <ChatList/>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
