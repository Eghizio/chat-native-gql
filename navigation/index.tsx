import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import MainStackNavigator from "./MainStackNavigator";

const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};

export default Navigation;