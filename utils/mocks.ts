import { LoginPayload, RegisterPayload } from "../types/auth";

export const mockRegisterPayload = (): RegisterPayload => {
    const rnd = Math.floor(Math.random()*3000).toString();

    return {
        email: `test${rnd}@mail.com`,
        firstName: "Tony",
        lastName: "Stark",
        password: "ILoveYou3000",
        passwordConfirmation: "ILoveYou3000"
    };
};

export const mockLoginPayload = (): LoginPayload => ({
    email: "gollum@mail.com",
    password: "IWasAHobbitOnce!123"
});