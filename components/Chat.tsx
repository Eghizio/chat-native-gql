import { useMutation } from "@apollo/client";
import React, { useState, useCallback } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { SEND_MESSAGE, SET_TYPING_USER } from "../graphql/mutations";
import { Room, User } from "../types/api";
import { mapMessageToGifted, mapUserToGifted } from "../utils/mappings";


interface Props {
    room: Room;
    user: User | undefined;
};

const Chat = ({ room, user }: Props) => {
    const [messages, setMessages] = useState(room.messages.map(mapMessageToGifted));
    const [sendMessage] = useMutation(SEND_MESSAGE);
    // const [setTyping] = useMutation(SET_TYPING_USER);

    const handleSendMessage = useCallback((messages: IMessage[] = []) => {
        messages.forEach(msg => {
            sendMessage({ variables: { body: msg.text, roomId: room.id } });
        });
        
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, []);

    return (
        <GiftedChat
            messages={messages}
            user={user ? mapUserToGifted(user) : { _id: "42" }}
            onSend={msgs => handleSendMessage(msgs)}
        />
    );
};

export default Chat;