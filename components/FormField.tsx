import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import Vision from "./Icons/Vision";


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

    const validationMessage = isTouched
        && validation
        && (validation.validator ? "" : validation.message);

    const togglePwdVisibility = () => {
        setPasswordVisible(prev => !prev);
    };

    return (
        <Field>
            <Label>{label}</Label>
            <InputRow>
                <Input
                    value={value}
                    onChangeText={onChangeText}
                    secureTextEntry={passwordVisible}
                    onBlur={() => setIsTouched(true)}
                />
                {secureTextEntry &&
                    <TouchableOpacity onPress={togglePwdVisibility}>
                        <VisibilityIcon low={!passwordVisible}/>
                    </TouchableOpacity>
                }
            </InputRow>
            <ValidationMessage>
                {validationMessage}
            </ValidationMessage>
        </Field>
    );
};

const Field = styled.KeyboardAvoidingView`
    align-self: stretch;
    flex-shrink: 1;
`;

const Label = styled.Text`
    font-weight: 500;
    font-size: 16px;
    color: ${Colors.BLUE.TINT_2};
`;

const Input = styled.TextInput`
    background-color: ${Colors.WHITE};
    border-radius: 10px;
    padding: 12px 16px;
`;

const InputRow = styled.View``;

const VisibilityIcon = styled(Vision)`
    position: absolute;
    right: 8px;
    bottom: 12px;
`;

const ValidationMessage = styled.Text`
    align-self: flex-end;
    padding-right: 4px;
    font-size: 10px;
    color: ${Colors.ERROR};
`;

export default FormField;