import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GQL_HTTP_URL, TOKEN } from "./env";


export const httpLink = createHttpLink({
    uri: GQL_HTTP_URL
});

export const authLink = setContext(async (_, { headers }) => {
    // retrieves token from storage with each request
    const token = await AsyncStorage.getItem("token");

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    };
});