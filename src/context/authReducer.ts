import { User } from "../types/dataTypes";

export type AuthState = {
  status: "checking" | "authenticated" | "not-authenticated";
  token: string | null;
  user: User | null;
};

type AuthAction =
  | { type: "signin"; payload: { token: string; user: User } }
  | { type: "not-authenticated" }
  | { type: "logout" }
  | { type: "update"; payload: { user: User } };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case "signin":
      localStorage.setItem("admin-token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        status: "authenticated",
      };
    case "not-authenticated":
    case "logout":
      localStorage.removeItem("admin-token");
      return {
        ...state,
        user: null,
        token: null,
        status: "not-authenticated",
      };
    case "update":
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};
