import React from "react";
import styled from "styled-components/native";
import RoomsList from "../../components/RoomsList";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import useUsersRooms from "../../hooks/useUsersRooms";
import { RoomsScreenProps } from "../../types/navigation";


interface Props extends RoomsScreenProps {};


const RoomsScreen = ({ navigation }: Props) => {
    const { logout } = useAuth();
    const { data: userRoomsData } = useUsersRooms();

    return (
        <Screen>
            <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
            <LogoutButton onPress={logout}>
                <LogoutButtonText>Logout</LogoutButtonText>
            </LogoutButton>
        </Screen>
    );
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${Colors.BLUE.TINT_2};
`;

const LogoutButton = styled.TouchableOpacity``;
const LogoutButtonText = styled.Text``;

export default RoomsScreen;