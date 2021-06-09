import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useRoom from "../hooks/useRoom";
import Colors from "../constants/Colors";


interface Props {}

const Chat = ({}: Props) => {
    const navigation = useNavigation();
    const { data: roomData } = useRoom("fec17ce6-6ec7-409e-b4fb-231c20e60017");

    return (
        <View>
            <Text>I am Chat screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Rooms")}>
                <Text>Navigate to Rooms screen.</Text>
            </TouchableOpacity>
            <View style={styles.messages}>
                {roomData && roomData.room.messages.map(msg =>
                    <View key={msg.id} style={styles.message}>
                        <Image style={styles.avatar} source={{ uri: msg.user.profilePic }}/>
                        <Text style={styles.messageBody}>{msg.body}</Text>
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    messages: {
        backgroundColor: Colors.BLUE.TINT_2,
        paddingVertical: 100, // temp
    },
    message: {
        backgroundColor: Colors.WHITE,
        flexDirection: "row",
        padding: 12,
        borderRadius: 12,
        // depends if its sent/received = bottomRight/bottomLeft
        // borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        marginVertical: 15, // temp
    },
    avatar: {
        width: 24,
        height: 24,
        borderRadius: 50,
    },
    messageBody: {
        padding: 12,
    },
});

export default Chat;