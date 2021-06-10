import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import RoomsList from "../components/RoomsList";
import Colors from "../constants/Colors";
import useCurrentUser from "../hooks/useCurrentUser";
import useUsersRooms from "../hooks/useUsersRooms";
import { RoomsScreenProps } from "../types/navigation";


interface Props extends RoomsScreenProps {};


const RoomsScreen = ({ navigation }: Props) => {
    const { data: userData } = useCurrentUser();
    const { data: userRoomsData } = useUsersRooms();

    return (
        <Screen>
            <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
        </Screen>
    );
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${Colors.BLUE.TINT_2};
`;

export default RoomsScreen;