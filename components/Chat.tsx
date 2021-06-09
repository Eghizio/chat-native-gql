import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { Room } from "../types/api";


type Props = {
    room: Room;
};

const Chat = ({ room }: Props) => {
    return (
        <View style={styles.messages}>
            {room && room.messages.map(msg =>
                <View key={msg.id} style={styles.message}>
                    <Image style={styles.avatar} source={{ uri: msg.user.profilePic }}/>
                    <Text style={styles.messageBody}>{msg.body}</Text>
                </View>
            )}
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