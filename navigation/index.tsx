import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import MainStackNavigator from "./MainStackNavigator";
import AuthStackNavigator from "./AuthStackNavigator";
import { useAuth } from "../context/AuthProvider";

const Navigation = () => {
	const { token  } = useAuth();

	return (
		<NavigationContainer>
			{token
			? <MainStackNavigator/>
			: <AuthStackNavigator/>
			}
		</NavigationContainer>
	);
};

export default Navigation;