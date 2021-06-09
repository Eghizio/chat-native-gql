import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";


interface Props {}

const Chat = ({}: Props) => {
    const navigation = useNavigation();

    return (
        <View>
            <Text>I am Chat screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Rooms")}>
                <Text>Navigate to Rooms screen.</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Chat;