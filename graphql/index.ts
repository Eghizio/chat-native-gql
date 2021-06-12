import { ApolloClient, InMemoryCache } from "@apollo/client";
import { splitLink } from "./splitLink";

export const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache()
});

