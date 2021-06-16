// From https://hexdocs.pm/absinthe/apollo.html#using-a-websocket-link

import { split } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { authLink, httpLink } from './httpLink';
import { wsLink } from './wsLink';

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
export const splitLink = split(
    ({ query }) => {
        const definition = getMainDefinition(query);
        return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
        );
    },
    // @ts-ignore
    wsLink, //  ¯\_(ツ)_/¯
    authLink.concat(httpLink),
);
