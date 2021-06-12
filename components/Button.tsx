import React from "react";
import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";


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
`;

const Label = styled.Text`
    text-align: center;
    color: ${Colors.WHITE};
    font-family: ${Fonts.Poppins_600SemiBold};
`;

export default Button;