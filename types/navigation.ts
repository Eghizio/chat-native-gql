import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/core";
import { Room } from "./api";

// custom nav hook?

export type MainStackParamList = {
    Rooms: undefined;
    ChatRoom: ChatRoomParams;
    // NotFoundScreen
};

export type RoomsScreenProps = StackScreenProps<MainStackParamList, "Rooms">;
export type RoomsScreenNavigationProp = StackNavigationProp<MainStackParamList, "Rooms">;
export type RoomsScreenRouteProp = RouteProp<MainStackParamList, "Rooms">;

export type ChatRoomScreenProps = StackScreenProps<MainStackParamList, "ChatRoom">;
export type ChatRoomScreenNavigationProp = StackNavigationProp<MainStackParamList, "ChatRoom">;
export type ChatRoomScreenRouteProp = RouteProp<MainStackParamList, "ChatRoom">;

export type ChatRoomParams = {
    roomId: Room["id"];
};



