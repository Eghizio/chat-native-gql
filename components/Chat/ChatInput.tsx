import React from "react";
import { View, Text } from "react-native";
import { InputToolbar, InputToolbarProps } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import ChatSendButton from "./ChatSendButton";

const ChatInput = (props: InputToolbarProps) => {
    return (
        <InputToolbar
            {...props}
            containerStyle={{
                borderRadius: 12,
                borderBottomRightRadius: 0,
                width: Layout.window.width-80,
                backgroundColor: Colors.WHITE,
            }}
        />
    );
};

export default ChatInput;