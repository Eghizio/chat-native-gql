import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import RoomsList from "../components/RoomsList";
import useCurrentUser from "../hooks/useCurrentUser";
import useUsersRooms from "../hooks/useUsersRooms";


interface Props {}

const Rooms = ({}: Props) => {
    const navigation = useNavigation();
    const { data: userData } = useCurrentUser();
    const { data: userRoomsData } = useUsersRooms();
    

    userRoomsData && console.log(userRoomsData)

    return (
        <View>
            <Text>I am Rooms screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("ChatRoom")}>
                <Text>Navigate to Chat screen.</Text>
            </TouchableOpacity>
            <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
        </View>
    );
};

export default Rooms;