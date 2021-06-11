import React from "react";
import { View, Text } from "react-native";
import { InputToolbar, InputToolbarProps } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";

const ChatInput = (props: InputToolbarProps) => {
    return (
        <InputToolbar
            {...props}
            containerStyle={{
                borderRadius: 12,
                borderBottomRightRadius: 0,
                width: 200,
            }}
        />
    );
};

export default ChatInput;