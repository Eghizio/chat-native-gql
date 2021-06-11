import React from "react";
import styled from "styled-components/native";
import Button from "../../components/Button";
import RoomsList from "../../components/RoomsList";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import useUsersRooms from "../../hooks/useUsersRooms";
import { RoomsScreenProps } from "../../types/navigation";


interface Props extends RoomsScreenProps {};


const RoomsScreen = ({}: Props) => {
    const { logout } = useAuth();
    const { data: userRoomsData } = useUsersRooms();

    
    return (
        <Screen>
            <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
            <Button label="Logout" onPress={logout} size="small" variant="danger"/>
        </Screen>
    );
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    background-color: ${Colors.BLUE.TINT_2};
`;

const LogoutButton = styled.TouchableOpacity`
    padding: 8px 16px;
    border-radius: 10px;
    background-color: ${Colors.ERROR};
`;
const LogoutButtonText = styled.Text`
    color: ${Colors.WHITE}
`;

export default RoomsScreen;