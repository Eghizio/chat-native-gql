import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RoomsList from "../components/RoomsList";
import useCurrentUser from "../hooks/useCurrentUser";
import useUsersRooms from "../hooks/useUsersRooms";
import { RoomsScreenProps } from "../types/navigation";


interface Props extends RoomsScreenProps {};


const RoomsScreen = ({ navigation }: Props) => {
    const { data: userData } = useCurrentUser();
    const { data: userRoomsData } = useUsersRooms();

    return (
        <View style={{flex: 1}}>
            <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
        </View>
    );
};

export default RoomsScreen;