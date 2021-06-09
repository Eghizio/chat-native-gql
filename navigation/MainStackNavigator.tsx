import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RoomsScreen from "../screens/RoomsScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import { MainStackParamList } from "../types/navigation";

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    const { Navigator, Screen } = MainStack;

    return (
        <Navigator initialRouteName="Rooms">
            <Screen
                name="Rooms"
                component={RoomsScreen}
            />
            <Screen
                name="ChatRoom"
                component={ChatRoomScreen}
            />
        </Navigator>
    );
};

export default MainStackNavigator;