import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../application/services/AuthService";
import { useAuth } from "../../../context/AuthContext";
import UserLocalStorageRepository from "../../persistence/UserLocalStorageRepository";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { setToken } = useAuth();

  const userRepository = new UserLocalStorageRepository();
  const authService = new AuthService(userRepository);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await authService.login(email, password);
      setToken(token);
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
