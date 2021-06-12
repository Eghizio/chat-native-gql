import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RoomsScreen from "../screens/main/RoomsScreen";
import ChatRoomScreen from "../screens/main/ChatRoomScreen";
import { MainStackParamList } from "../types/navigation";
import Colors from "../constants/Colors";
import HeaderRight from "../components/HeaderRight";
import Fonts from "../constants/Fonts"; // probably should move header styles

const MainStack = createStackNavigator<MainStackParamList>();

const MainStackNavigator = () => {
    const { Navigator, Screen } = MainStack;

    // header mode = screen for custom header?
    // add icons to the right
    return (
        <Navigator
            initialRouteName="Rooms"
            screenOptions={({ route, navigation }) => ({
                headerStyle: {
                    backgroundColor: Colors.BLUE.TINT_1,
                    borderBottomRightRadius: 24,
                    borderBottomLeftRadius: 24,
                },
                headerTitleStyle: {
                    color: Colors.PLUM.NORMAL,
                    fontWeight: "700",
                    fontSize: 36,
                    fontFamily: Fonts.Poppins_700Bold,
                },
                headerLeft: () => null, //im developin on web so i need a way to nav back XD
                headerRight: () => <HeaderRight screenName={route.name}/>, // todo: ChatRoom header left
                // headerTintColor
            })}
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