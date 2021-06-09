import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rooms from "../screens/Rooms";
import ChatRoom from "../screens/ChatRoom";

const Stack = createStackNavigator();

const ScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Rooms">
            <Stack.Screen
                name="Rooms"
                component={Rooms}
            />
            <Stack.Screen
                name="ChatRoom"
                component={ChatRoom}
            />
        </Stack.Navigator>
    );
};

export default ScreenNavigator;