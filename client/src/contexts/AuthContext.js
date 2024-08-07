import { createContext } from "react";

export const AuthContext = createContext({
    email: '',
    userId: authState._id, 
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null ,
});