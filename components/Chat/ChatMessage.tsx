import React from "react";
import { Bubble, BubbleProps, IMessage } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";

// according to the design, dates should be off,
// tho im keeping them for better UX
const ChatMessage = (props: BubbleProps<IMessage>) => {
    return (
        <Bubble
            {...props}
            textStyle={{
                left: { color: Colors.BLACK },
                right: { color: Colors.WHITE }
            }}
            wrapperStyle={{
                left: {
                    backgroundColor: Colors.WHITE,
                    borderBottomLeftRadius: 0
                },
                right: {
                    backgroundColor: Colors.PLUM.TINT_1,
                    borderBottomRightRadius: 0
                }
            }}
        />
    );
};

export default ChatMessage;