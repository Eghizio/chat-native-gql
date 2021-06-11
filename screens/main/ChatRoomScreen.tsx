import React from "react";
import { View, Text } from "react-native";
import ScreenLayout from "../../components/ScreenLayout";
import Chat from "../../components/Chat/Chat";
import useCurrentUser from "../../hooks/useCurrentUser";
import useRoom from "../../hooks/useRoom";
import { ChatRoomScreenProps } from "../../types/navigation";


interface Props extends ChatRoomScreenProps {};

const ChatRoomScreen = ({ route }: Props) => {
    const { data: userData } = useCurrentUser();
    const { data: roomData } = useRoom(route.params.roomId);

    if(roomData === undefined) return <View><Text>Loading...</Text></View>;
    return (
        <ScreenLayout lightBackground noPadding>
            <Chat room={roomData.room} user={userData?.user}/>
        </ScreenLayout>
    );
};

export default ChatRoomScreen;