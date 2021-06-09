import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Chat from "../components/Chat";
import useRoom from "../hooks/useRoom";
import { ChatRoomScreenProps } from "../types/navigation";

type RouteProps = {
    params: {
        roomId: string;
    }
};

interface Props extends ChatRoomScreenProps {};

const ChatRoom = ({ navigation, route }: Props) => {
    const { data: roomData } = useRoom(route.params.roomId || "fec17ce6-6ec7-409e-b4fb-231c20e60017"); // "fec17ce6-6ec7-409e-b4fb-231c20e60017"

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