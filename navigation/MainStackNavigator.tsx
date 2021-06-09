import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rooms from "../screens/Rooms";
import ChatRoom from "../screens/ChatRoom";
import { MainStackParamList } from "../types/navigation";

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    const { Navigator, Screen } = MainStack;

    return (
        <Navigator initialRouteName="Rooms">
            <Screen
                name="Rooms"
                component={Rooms}
            />
            <Screen
                name="ChatRoom"
                component={ChatRoom}
            />
        </Navigator>
    );
};

export default MainStackNavigator;