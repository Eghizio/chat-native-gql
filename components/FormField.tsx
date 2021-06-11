import React, { useState } from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";

type Validation = {
    message: string;
    validator: boolean;
};

interface Props {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
    validation?: Validation;
};

const FormField = ({ label, value, onChangeText, secureTextEntry, validation }: Props) => {
    const [passwordVisible, setPasswordVisible] = useState(!!secureTextEntry);
    const [isTouched, setIsTouched] = useState(false);

    // should start displaying onblur, done
    // to offset or not to offset, that is the question
    const validationMessage = isTouched && validation
        ? (validation.validator ? " " : validation.message)
        : " ";

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
                onBlur={() => setIsTouched(true)}
            />
            {/* toggle pwd visibility */}
            {validation && 
                <ValidationMessage>
                    {validationMessage}
                </ValidationMessage>
            }
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

const ValidationMessage = styled.Text`
    text-align: end;
    padding-right: 4px;
    font-size: 10px;
    color: ${Colors.ERROR};
`;

// todo: input validation error message

export default FormField;