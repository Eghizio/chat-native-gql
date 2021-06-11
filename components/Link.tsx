import React from "react";
import { TouchableOpacity, GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";


interface Props {
    onPress: (event: GestureResponderEvent) => void;
    label: string;
};

const Link = ({ onPress, label }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <LinkText>{label}</LinkText>
        </TouchableOpacity>
    );
};

const LinkText = styled.Text`
    color: ${Colors.BLUE.NORMAL};
    text-decoration: underline;
    text-decoration-color: ${Colors.BLUE.NORMAL};
`;

export default Link;