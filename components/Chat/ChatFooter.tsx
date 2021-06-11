import React from "react";
import styled from "styled-components/native";
// import {  } from "react-native-gifted-chat";
import Colors from "../../constants/Colors";

const ChatFooter: React.FC = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
};

const Wrapper = styled.View`
    background-color: ${Colors.BLUE.TINT_1};
`;

export default ChatFooter;