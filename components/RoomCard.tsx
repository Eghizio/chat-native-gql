import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import useRoom from "../hooks/useRoom";
import { UserRoom } from "../types/api";
import { limitText } from "../utils/limitText";

interface Props {
    room: UserRoom;
};

const RoomCard = ({ room }: Props) => {
    const { data: roomData } = useRoom(room.id); // for last message

    return (
        <View style={styles.roomCard}>
            <Image style={styles.roomImg} source={{ uri: room.roomPic }}/>
            <View>
                <View></View>
                <View style={styles.textContainer}>
                    <Text style={styles.roomName} numberOfLines={1}>
                        {/* {limitText(room.name, 32)} */}
                        {room.name}
                    </Text>
                    <Text style={styles.lastMessage} numberOfLines={1}>
                        {/* {roomData && limitText([...roomData.room.messages].pop()?.body, 32)} */}
                        {roomData && [...roomData.room.messages].pop()?.body}
                    </Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    roomCard: {
        width: Layout.window.width,
        flex: 1,
        padding: 15,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 12,
        backgroundColor: Colors.WHITE,
        marginVertical: 15, // temp
    },
    roomImg: {
        width: 64,
        height: 64,
        borderRadius: 50,
        backgroundColor: Colors.GREY.TINT_2
    },
    textContainer: {
        padding: 10,
        paddingLeft: 15,
    },
    roomName: {
        flex: 1,
        fontWeight: "500",
        fontSize: 15,
    },
    lastMessage: {
        flex: 1,
        fontSize: 14,
    },
});

export default RoomCard;