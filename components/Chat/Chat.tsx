import { useMutation } from "@apollo/client";
import React, { useState, useCallback } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { SEND_MESSAGE, SET_TYPING_USER } from "../../graphql/mutations";
import { Room, User } from "../../types/api";
import { mapMessageToGifted, mapUserToGifted } from "../../utils/mappings";
import ChatMessage from "./ChatMessage";
import ChatFooter from "./ChatFooter";
import ChatInput from "./ChatInput";
import ChatSendButton from "./ChatSendButton";
import { View, Text } from "react-native";


interface Props {
    room: Room;
    user: User | undefined;
};

const Chat = ({ room, user }: Props) => {
    const [messages, setMessages] = useState(room.messages.map(mapMessageToGifted));
    const [sendMessage] = useMutation(SEND_MESSAGE);
    const [isTyping, setIsTyping] = useState(false);
    const [setTyping] = useMutation(SET_TYPING_USER);

    const handleSendMessage = useCallback((messages: IMessage[] = []) => {
        messages.forEach(msg => {
            sendMessage({ variables: { body: msg.text, roomId: room.id } });
        });
        
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, [sendMessage, room]);

    const handleTyping = (text: string) => {
        if(!text){
            setIsTyping(false);
            return;
        }
        setIsTyping(true);
        setTyping({ variables: { roomId: room.id }}); //needs debounce
    };

    return (
        <GiftedChat
            messages={messages}
            inverted={false}
            
            user={user ? mapUserToGifted(user) : { _id: "42" }}
            onSend={msgs => handleSendMessage(msgs)}
            renderBubble={props => <ChatMessage {...props}/>}
            
            isTyping={isTyping}
            onInputTextChanged={handleTyping}
            renderFooter={() => isTyping ? <ChatFooter/> : null}
            // renderChatFooter={() => null}
            renderInputToolbar={props => <ChatInput {...props}/>}

            alwaysShowSend
            renderSend={props => <ChatSendButton {...props}/>}
        />
    );
};

export default Chat;