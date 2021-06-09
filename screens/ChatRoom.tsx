import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import useRoom from "../hooks/useRoom";
import Colors from "../constants/Colors";
import Chat from "../components/Chat";

type RouteProps = {
    params: {
        roomId: string;
    }
};

interface Props {}

const ChatRoom = ({}: Props) => {
    const navigation = useNavigation();
    const route = useRoute(); // gotta fix typings 
    //(route as RouteProps).params.roomId ||
    const { data: roomData } = useRoom("fec17ce6-6ec7-409e-b4fb-231c20e60017");

    return (
        <View>
            <Text>I am Chat screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Rooms")}>
                <Text>Navigate to Rooms screen.</Text>
            </TouchableOpacity>
            {roomData
            ? <Chat room={roomData.room}/>
            : <View><Text>Loading...</Text></View>
            }
        </View>
    );
};

export default ChatRoom;