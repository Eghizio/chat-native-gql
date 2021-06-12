import React from "react";
import styled from "styled-components/native";
import { Send, SendProps, IMessage } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";
import SendIcon from "../Icons/SendIcon";

const ChatSendButton = (props: SendProps<IMessage>) => {
    return (
        <Send
            {...props}
            containerStyle={{
                // justifyContent: "center",
                // alignItems: "center",
                position: "absolute",
                right: -60,
            }}
        >
            <SendIcon/>
        </Send>
    );
};



export default ChatSendButton;