import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/auth/LoginScreen";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { AuthStackParamList } from "../types/navigation";

const MainStack = createStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
    const { Navigator, Screen } = MainStack;

    return (
        <Navigator initialRouteName="Login">
            <Screen
                name="Login"
                component={LoginScreen}
            />
            <Screen
                name="Register"
                component={RegisterScreen}
            />
        </Navigator>
    );
};

export default AuthStackNavigator;