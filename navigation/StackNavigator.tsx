import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Rooms from "../screens/Rooms";
import Chat from "../screens/Chat";

const Stack = createStackNavigator();

const ScreenNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Rooms">
            <Stack.Screen
                name="Rooms"
                component={Rooms}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
            />
        </Stack.Navigator>
    );
};

export default ScreenNavigator;