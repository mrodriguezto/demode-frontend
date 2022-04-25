import { createContext, useEffect, useReducer } from "react";
import demodeApi from "../api/axios";
import { User, LoginData, LoginResponse } from "../types/dataTypes";
import { authReducer, AuthState } from "./authReducer";

type AuthContextProps = {
  user: User | null;
  status: "authenticated" | "not-authenticated" | "checking";
  token: string | null;
  signin: (data: LoginData) => Promise<void>;
  logout: () => void;
  updateUser: (data: User) => void;
};

export const AuthContext = createContext({} as AuthContextProps);

const authInitialState: AuthState = {
  status: "checking",
  token: null,
  user: null,
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const token = localStorage.getItem("admin-token");

    if (!token) {
      dispatch({ type: "not-authenticated" });
      console.log("No token");
      return;
    }

    getUser(token);
  }, []);

  const getUser = async (token: string) => {
    try {
      const res = await demodeApi.get<User>("/auth/");
      dispatch({ type: "signin", payload: { token, user: res.data } });
      console.log("Logged");
    } catch (error) {
      dispatch({ type: "not-authenticated" });
      console.log("Not logged");
    }
  };

  const signin = async (data: LoginData) => {
    const res = await demodeApi.post<LoginResponse>("/auth/login", data);

    dispatch({
      type: "signin",
      payload: { token: res.data.token, user: res.data.user },
    });
  };

  const logout = () => {
    dispatch({ type: "logout" });
  };

  const updateUser = (data: User) => {
    dispatch({ type: "update", payload: { user: data } });
  };

  return (
    <AuthContext.Provider value={{ ...state, signin, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
