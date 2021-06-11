import React from "react";
import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";


interface Props {
    onPress: (event: GestureResponderEvent) => void;
    label: string;
    size?: "large" | "small";
    variant?: "normal" | "danger";
};

const Button = ({ onPress, label, size = "large", variant = "normal" }: Props) => {
    return (
        <Wrapper onPress={onPress} size={size} variant={variant}>
            <Label>{label}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.TouchableOpacity<Pick<Props, "size" | "variant">>`
    background-color: ${props =>
        (props.variant === "danger")
        ? Colors.ERROR
        : Colors.PLUM.NORMAL
    };
    padding: ${props =>
        (props.size === "small")
        ? "8px 16px"
        : "17px 88px"
    };
    border-radius: 10px;
    text-align: center;
`;

const Label = styled.Text`
    color: ${Colors.WHITE};
`;

export default Button;