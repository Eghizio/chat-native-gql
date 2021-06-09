import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";
import { UserRoom } from "../types/api";
import RoomCard from "./RoomCard";


interface Props {
    rooms: UserRoom[] | undefined;
};

const RoomsList = ({ rooms }: Props) => {
    const navigation = useNavigation();

    const navigateToChatRoom = (roomId: UserRoom["id"]) => {
        navigation.navigate("ChatRoom", { roomId });
    };

    if(rooms === undefined || rooms.length === 0) return <View><Text>No rooms found.</Text></View>;
    return (
        <View style={styles.roomsList}>
            {rooms.map(room =>
                <TouchableOpacity key={room.id} onPress={() => navigateToChatRoom(room.id)}>
                    <RoomCard room={room}/>
                </TouchableOpacity>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    roomsList: {
        backgroundColor: Colors.BLUE.TINT_2,
        paddingVertical: 100, // temp
    },
});

export default RoomsList;