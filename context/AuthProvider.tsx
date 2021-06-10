import React, { createContext, useContext, useEffect, useState } from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useMutation } from "@apollo/client";
import useCurrentUser from "../hooks/useCurrentUser";
import { LOGIN_USER, REGISTER_USER } from "../graphql/mutations";
import { AuthContextValue } from "../types/auth";
import { Session } from "../types/api";


const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(context === undefined){
        throw new Error("useAuth must be used within a AuthProvider");
    }

    return context;
};


const mockedToken = "string";
const mockedUser = {
    id: "string",
    email: "string",
    firstName: "string",
    lastName: "string",
    profilePic: "string",
    role: "string"
};

// could use some reducer tbh
const AuthProvider: React.FC = ({ children }) => {
    const { getItem, setItem } = useAsyncStorage("token");
    const [token, setToken] = useState("");
    const [user, setUser] = useState<AuthContextValue["user"]>(null);
    // loading for spinner?
    const { data: userData, refetch } = useCurrentUser();
    const [registerUser] = useMutation<{registerUser: Session["user"]}>(REGISTER_USER);
    const [loginUser] = useMutation<{loginUser: Session}>(LOGIN_USER);

    useEffect(() => {
        (async () => {
            if(userData === undefined) return; //means no token
            setUser(userData.user);

            const token = await getItem();
            if(!token) return;
            setToken(token);
        })();
        
    }, []);

    const register: AuthContextValue["register"] = async (registerPayload) => {
        //messy casting tbh
        const registerResponse = await registerUser({ variables: { ...registerPayload } });
        if(!registerResponse.data) return null;
        return registerResponse.data.registerUser;
    };

    const login: AuthContextValue["login"] = async ({ email, password }) => {
        const sessionResponse = await loginUser({ variables: { email, password } });
        // temp validation, could be better
        if(!sessionResponse.data) return null;

        const { token, user } = sessionResponse.data.loginUser;
        // yuck
        setItem(token);
        setToken(token);
        setUser(user);
        return sessionResponse.data.loginUser;
    };

    const logout: AuthContextValue["logout"] = async () => {
        await setItem(""); // or clear item?
        setToken("");
        setUser(null);
    };

    const value: AuthContextValue = { token, user, login, logout, register };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;