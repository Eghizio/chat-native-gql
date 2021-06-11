import React from "react";
import { View, Text } from "react-native";
import { Send, SendProps, IMessage } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";

const ChatSendButton = (props: SendProps<IMessage>) => {
    return (
        <Send {...props}>
            
        </Send>
    );
};

export default ChatSendButton;