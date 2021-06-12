import * as AbsintheSocket from "@absinthe/socket";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
// import { Socket as PhoenixSocket } from "phoenix";
import AsyncParamsPhoenixSocket from "./AsyncParamsPhoenixSocket";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GQL_WS_URL } from "./env";


const phoenixSocket = new AsyncParamsPhoenixSocket(GQL_WS_URL, {
    params: async () => {
        const token = await AsyncStorage.getItem("token") || "";
        return { token };
    }
});

const absintheSocket = AbsintheSocket.create(phoenixSocket);

export const wsLink = createAbsintheSocketLink(absintheSocket);