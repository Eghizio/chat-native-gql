import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
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

    if(rooms === undefined || rooms.length === 0) return <View><Text style={{textAlign: "center"}}>No rooms found.</Text></View>;
    return (
        <Wrapper>
            <FlatList
                data={rooms}
                renderItem={({ item: room }) =>
                    <TouchableOpacity
                        key={(room as UserRoom).id}
                        onPress={() => navigateToChatRoom((room as UserRoom).id)}
                    >
                        <RoomCard room={(room as UserRoom)}/>
                    </TouchableOpacity>
                }
                contentContainerStyle={{flex: 1, alignItems: "center"}}
                ItemSeparatorComponent={() => <Separator/>}
            />
        </Wrapper>
    );
};

const Wrapper = styled.View`
    flex: 1;
    align-items: center;
`;

const Separator = styled.View`
    height: 15px;
`;

export default RoomsList;