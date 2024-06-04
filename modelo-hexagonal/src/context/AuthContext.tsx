import React, { createContext, useContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import UserLocalStorageRepository from "../adapters/persistence/UserLocalStorageRepository";

interface AuthContextType {
  email: string | null;
  userId: string | null;
  role: string | null;
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const userRepository = new UserLocalStorageRepository();
    const savedToken = userRepository.getToken();
    if (savedToken) {
      const decoded: any = jwtDecode(savedToken);
      setEmail(decoded.email);
      setUserId(decoded.userId);
      setRole(decoded.role);
      setToken(savedToken);
    }
  }, []);

  const handleSetToken = (newToken: string | null) => {
    const userRepository = new UserLocalStorageRepository();
    if (newToken) {
      const decoded: any = jwtDecode(newToken);
      setEmail(decoded.email);
      setUserId(decoded.userId);
      setRole(decoded.role);
      userRepository.saveToken(newToken);
    } else {
      setEmail(null);
      setUserId(null);
      setRole(null);
      userRepository.deleteToken();
    }
    setToken(newToken);
  };

  return (
    <AuthContext.Provider
      value={{ email, userId, role, token, setToken: handleSetToken }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
