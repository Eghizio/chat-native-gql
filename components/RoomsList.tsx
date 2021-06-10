import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { UserRoom } from "../types/api";
import RoomCard from "./RoomCard";


interface Props {
    rooms: UserRoom[] | undefined;
};

const RoomsList = ({ rooms }: Props) => {
    const navigation = useNavigation(); //could pass typed nav from Rooms Screen

    const navigateToChatRoom = (roomId: UserRoom["id"]) => {
        navigation.navigate("ChatRoom", { roomId });
    };

    if(rooms === undefined || rooms.length === 0) return <View><Text>No rooms found.</Text></View>;
    return (
        <List>
            {rooms.map(room =>
                <TouchableOpacity key={room.id} onPress={() => navigateToChatRoom(room.id)}>
                    <RoomCard room={room}/>
                </TouchableOpacity>
            )}
        </List>
    );
};

const List = styled.View`
    background-color: ${Colors.BLUE.TINT_2}; //it should be in the room bg
`;

export default RoomsList;