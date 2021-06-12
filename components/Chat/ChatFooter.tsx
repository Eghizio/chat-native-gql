import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const ChatFooter = () => <Footer><Text>User is typing...</Text></Footer>;

const Footer = styled.View`
    align-items: center;
    padding: 15px 0;
`;

export default ChatFooter;