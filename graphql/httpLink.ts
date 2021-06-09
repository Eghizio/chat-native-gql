import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GQL_HTTP_URI, TOKEN } from "./env";


export const httpLink = createHttpLink({
    uri: GQL_HTTP_URI
});

export const authLink = setContext((_, { headers }) => {
    // const token = localStorage.getItem("token"); // need asyncStorage
    const token = TOKEN;

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    };
});