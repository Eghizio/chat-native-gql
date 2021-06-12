import { ApolloClient, InMemoryCache } from "@apollo/client";
import { authLink, httpLink } from "./httpLink";
import { splitLink } from "./splitLink";

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    // link: splitLink, // doesnt work for some reason ¯\_(ツ)_/¯
    cache: new InMemoryCache()
});

