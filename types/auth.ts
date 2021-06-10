import { Token, User, Session } from "./api";

export type AuthContextValue = {
    token: Token;
    user: User | null;
    register: (payload: RegisterPayload) => Promise<User | null>;
    login: (payload: LoginPayload) => Promise<Session | null>;
    logout: () => void;
};

export type RegisterPayload = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    passwordConfirmation: string;
};

export type LoginPayload = {
    email: string;
    password: string;
};
