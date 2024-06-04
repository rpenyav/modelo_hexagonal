import React from "react";
import { useAuth } from "../../../context/AuthContext";

const Dashboard: React.FC = () => {
  const { email, userId, role } = useAuth();

  return (
    <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>Email: {email}</p>
      <p>User ID: {userId}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default Dashboard;
