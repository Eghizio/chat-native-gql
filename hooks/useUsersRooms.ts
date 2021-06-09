import { useQuery } from "@apollo/client";
import { GET_USERS_ROOMS } from "../graphql/queries";
import { UserRoom } from "../types/api";


type Data = {
    usersRooms: {
        rooms: UserRoom[];
    }
};

const useUsersRooms = () => useQuery<Data>(GET_USERS_ROOMS);

export default useUsersRooms;