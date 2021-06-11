import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RoomsScreen from "../screens/main/RoomsScreen";
import ChatRoomScreen from "../screens/main/ChatRoomScreen";
import { MainStackParamList } from "../types/navigation";
import Colors from "../constants/Colors";

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    const { Navigator, Screen } = MainStack;

    // header mode = screen for custom header?
    // add icons to the right
    return (
        <Navigator
            initialRouteName="Rooms"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.BLUE.TINT_1,
                    borderBottomRightRadius: 24,
                    borderBottomLeftRadius: 24,
                },
                headerTitleStyle: {
                    color: Colors.PLUM.NORMAL,
                    fontWeight: "700",
                    fontSize: 36,
                },
                // headerLeft: () => null, //im developin on web so i need a way to nav back XD
                headerRight: () => null, //make icons here
                // headerTintColor
            }}
        >
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