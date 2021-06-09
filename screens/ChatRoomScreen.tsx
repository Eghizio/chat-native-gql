import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Chat from "../components/Chat";
import useRoom from "../hooks/useRoom";
import { ChatRoomScreenProps } from "../types/navigation";


interface Props extends ChatRoomScreenProps {};

const ChatRoomScreen = ({ navigation, route }: Props) => {
    const { data: roomData } = useRoom(route.params.roomId); // "fec17ce6-6ec7-409e-b4fb-231c20e60017"

    return (
        <View>
            {roomData
            ? <Chat room={roomData.room}/>
            : <View><Text>Loading...</Text></View>
            }
        </View>
    );
};

export default ChatRoomScreen;