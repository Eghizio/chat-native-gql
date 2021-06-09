import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RoomsList from "../components/RoomsList";
import useCurrentUser from "../hooks/useCurrentUser";
import useUsersRooms from "../hooks/useUsersRooms";
import { RoomsScreenProps } from "../types/navigation";


interface Props extends RoomsScreenProps {};


const Rooms = ({ navigation }: Props) => {
    const { data: userData } = useCurrentUser();
    const { data: userRoomsData } = useUsersRooms();

    return (
        <View>
            <Text>I am Rooms screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ChatRoom", { roomId: "" })}>
                <Text>Navigate to Chat screen.</Text>
            </TouchableOpacity>
            <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
        </View>
    );
};

export default Rooms;