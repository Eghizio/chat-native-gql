import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useCurrentUser from "../hooks/useCurrentUser";
import useUsersRooms from "../hooks/useUsersRooms";
import useRoom from "../hooks/useRoom";


interface Props {}

const Rooms = ({}: Props) => {
    const navigation = useNavigation();
    const { data: userData } = useCurrentUser();
    const { data: userRoomsData } = useUsersRooms();
    const { data: roomData } = useRoom("fec17ce6-6ec7-409e-b4fb-231c20e60017");

    userData && console.log(userData)
    userRoomsData && console.log(userRoomsData)
    roomData && console.log(roomData)
    return (
        <View>
            <Text>I am Rooms screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Text>Navigate to Chat screen.</Text>
            </TouchableOpacity>
            <Text>
                {userData
                ? `You are logged in as: ${userData.user.firstName} ${userData.user.lastName}.`
                : "Loading user..."
                }
            </Text>
            
        </View>
    );
};

export default Rooms;