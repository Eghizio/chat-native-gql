import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { UserRoom } from "../types/api";

interface Props {
    room: UserRoom;
};

const RoomCard = ({ room }: Props) => {
    return (
        <View style={styles.roomCard}>
            <Image style={styles.roomImg} source={{ uri: room.roomPic }}/>
            <Text style={styles.roomName}>
                {room.name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    roomsList: {
        backgroundColor: Colors.BLUE.TINT_2,
        paddingVertical: 100, // temp
    },
    roomCard: {
        padding: 15,
        flexDirection: "row",
        borderRadius: 12,
        backgroundColor: Colors.WHITE,
        marginVertical: 15, // temp
    },
    roomImg: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    roomName: {
        padding: 5
    }
});

export default RoomCard;