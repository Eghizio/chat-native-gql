import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useCurrentUser from "../hooks/useCurrentUser";
import useUsersRooms from "../hooks/useUsersRooms";
import Colors from "../constants/Colors";


interface Props {}

const Rooms = ({}: Props) => {
    const navigation = useNavigation();
    const { data: userData } = useCurrentUser();
    const { data: userRoomsData } = useUsersRooms();
    

    userRoomsData && console.log(userRoomsData)

    return (
        <View>
            <Text>I am Rooms screen.</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
                <Text>Navigate to Chat screen.</Text>
            </TouchableOpacity>
            <View style={styles.roomsList}>
                {userRoomsData && userRoomsData.usersRooms.rooms.map(room =>
                    <View key={room.id} style={styles.roomCard}>
                        <Image style={styles.roomImg} source={{ uri: room.roomPic }}/>
                        <Text style={styles.roomName}>{room.name}</Text>
                    </View>
                )}
            </View>
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

export default Rooms;