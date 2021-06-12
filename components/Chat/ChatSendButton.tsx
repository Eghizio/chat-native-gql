import React from "react";
import { Send, SendProps, IMessage } from "react-native-gifted-chat";
import SendIcon from "../Icons/SendIcon";

const ChatSendButton = (props: SendProps<IMessage>) => {
    return (
        <Send
            {...props}
            containerStyle={{
                position: "absolute",
                right: -60,
            }}
        >
            <SendIcon/>
        </Send>
    );
};



export default ChatSendButton;