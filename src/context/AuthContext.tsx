// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import api from "@/services";
import { putAcessToken } from "@/lib/utils";
import { UserType } from "@/@types/user";

interface AuthContextProps {
  user: UserType | null;
  setUser:React.Dispatch<React.SetStateAction<null>>
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: ()=>{},
  loading: true,
  login: async (email: string, password: string) => false,
  logout: () => {},
});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser({ ...JSON.parse(storedUser), token: storedToken });
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await api.post("/login", { email, password });
      console.log(res.data);
      if (res.status == 200) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        putAcessToken(res.data.token);
        setUser(res.data.user);
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user,setUser, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
