import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import Button from "../../components/Button";
import Loader from "../../components/Loader";
import RoomsList from "../../components/RoomsList";
import ScreenLayout from "../../components/ScreenLayout";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import useUsersRooms from "../../hooks/useUsersRooms";
import { RoomsScreenProps } from "../../types/navigation";


interface Props extends RoomsScreenProps {};


const RoomsScreen = ({}: Props) => {
    const { logout } = useAuth();
    const { data: userRoomsData, loading } = useUsersRooms();

    return (
        <ScreenLayout lightBackground>
            {loading
            ? <Loader />
            : <RoomsList rooms={userRoomsData?.usersRooms.rooms}/>
            }
            <Button label="Logout" onPress={logout} size="small" variant="danger"/>
        </ScreenLayout>
    );
};

export default RoomsScreen;