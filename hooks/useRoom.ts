import { useQuery } from "@apollo/client";
import { GET_ROOM_BY_ID } from "../graphql/queries";
import { Room } from "../types/api";


type Data = {
    room: Room;
};

const useRoom = (roomId: Room["id"]) => useQuery<Data>(GET_ROOM_BY_ID, {
    variables: {
        id: roomId
    },
    pollInterval: 1000,
});

export default useRoom;