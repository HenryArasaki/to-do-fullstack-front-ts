import { createContext, useContext, useState, useEffect } from "react";

import { api } from "../service/api";

export type ContextType = {
  signIn: (email: string, password: string) => void;
  data: Data;
  singOut: () => void;
};

export const AuthContext = createContext<ContextType | {}>({});

interface Data {
  user: any;
  authJwtToken: string;
}

function AuthProvider({ children }: { children: JSX.Element }) {
  const [data, setData] = useState<Data | {}>({});

  async function signIn(
    email:string,
    password:string

  ) {
    console.log(email,password)

    try {
      const response = await api.post("/api/login", { email, password });
      const { user, authJwtToken } = response.data;

      localStorage.setItem("@todo:user", JSON.stringify(user));
      localStorage.setItem("@todo:token", authJwtToken);

      api.defaults.headers.common["Authorization"] = `Bearer ${authJwtToken}`;
      setData({ user, authJwtToken });
    } catch (error: any) {
      alert(error.response.data.message);
    }
  }

  function signOut() {
    localStorage.removeItem("@todo:user");
    localStorage.removeItem("@todo:token");

    setData({});
  }

  useEffect(() => {
    const authJwtToken: string | null = localStorage.getItem("@todo:token");
    const user = localStorage.getItem("@todo:user");

    if (authJwtToken && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${authJwtToken}`;

      setData({
        authJwtToken,
        user: JSON.parse(user),
      });
    }
  }, []);

  // return(<AuthContext.Provider value={{signIn,user:data.user,signOut}}>
  return (
    <AuthContext.Provider value={{ signIn, data, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context as ContextType;
}

export { AuthProvider, useAuth };
