import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


interface Props {}

const Rooms = ({}: Props) => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>I am Rooms screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Text>Navigate to Chat screen.</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Rooms;