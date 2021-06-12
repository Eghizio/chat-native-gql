import React from "react";
import { View, Text } from "react-native";
import { InputToolbar, InputToolbarProps } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";
import ChatSendButton from "./ChatSendButton";

const ChatInput = (props: InputToolbarProps) => {
    return (
        <InputToolbar
            {...props}
            containerStyle={{
                borderRadius: 12,
                borderBottomRightRadius: 0,
                width: 200,
                backgroundColor: Colors.WHITE,
            }}
            renderSend={props => <ChatSendButton {...props}/>}
        />
    );
};

export default ChatInput;