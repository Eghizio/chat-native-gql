import React from "react";
import { View, ActivityIndicator } from "react-native";
import Colors from "../constants/Colors";


const Loader = () => {
    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <ActivityIndicator
                size="large"
                color={Colors.PLUM.SHADE_1}
                style={{paddingVertical: 15}}
            />
        </View>
    );
};

export default Loader;