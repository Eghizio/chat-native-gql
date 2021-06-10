import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Chat from "../../components/Chat";
import Colors from "../../constants/Colors";
import useCurrentUser from "../../hooks/useCurrentUser";
import useRoom from "../../hooks/useRoom";
import { ChatRoomScreenProps } from "../../types/navigation";


interface Props extends ChatRoomScreenProps {};

const ChatRoomScreen = ({ navigation, route }: Props) => {
    const { data: userData } = useCurrentUser();
    const { data: roomData } = useRoom(route.params.roomId); // "fec17ce6-6ec7-409e-b4fb-231c20e60017"

    if(roomData === undefined) return <View><Text>Loading...</Text></View>;
    return <Chat room={roomData.room} user={userData?.user}/>;
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${Colors.BLUE.TINT_2}; //todo
`;

export default ChatRoomScreen;