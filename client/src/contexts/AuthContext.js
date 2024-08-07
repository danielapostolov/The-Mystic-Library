import { createContext } from "react";

export const AuthContext = createContext({
    email: '',
    userId: '', 
    accessToken: '',
    isAuthenticated: false,
    changeAuthState: (authState = {}) => null ,
});