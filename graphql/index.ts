import { ApolloClient, InMemoryCache } from "@apollo/client";
import { GQL_HTTP_URI } from "./env";

export const client = new ApolloClient({
    uri: GQL_HTTP_URI,
    cache: new InMemoryCache()
});

