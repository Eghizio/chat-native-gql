import React, { useState } from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";


interface Props {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
};

const FormField = ({ label, value, onChangeText, secureTextEntry }: Props) => {
    const [passwordVisible, setPasswordVisible] = useState(!!secureTextEntry);

    const togglePwdVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    return (
        <Field>
            <Label>{label}</Label>
            <Input
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={passwordVisible}
            />
            {/* toggle pwd visibility */}
            {/* input validation error */}
        </Field>
    );
};

const Field = styled.KeyboardAvoidingView``;

const Label = styled.Text`
    font-weight: 500;
    font-size: 16px;
    color: ${Colors.BLUE.TINT_2};
`;

const Input = styled.TextInput`
    background-color: ${Colors.WHITE};
    padding: 12px 16px;
    border-radius: 10px;
`;

// todo: input validation error message

export default FormField;