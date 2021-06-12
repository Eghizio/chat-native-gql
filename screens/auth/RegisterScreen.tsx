import React, { useState } from "react";
import { Alert, Linking } from "react-native";
import styled from "styled-components/native";
import ScreenLayout from "../../components/ScreenLayout";
import Heading from "../../components/Heading";
import FormField from "../../components/FormField";
import Link from "../../components/Link";
import Button from "../../components/Button";
import { useAuth } from "../../context/AuthProvider";
import { RegisterScreenProps } from "../../types/navigation";
// import { mockRegisterPayload } from "../../utils/mocks";
import { isEmail, passwordsMatch } from "../../utils/validators";


interface Props extends RegisterScreenProps {};

const RegisterScreen = ({ navigation }: Props) => {
    const { register } = useAuth();
    // Form state
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");


    const handleRegister = async () => {
        // could be handled with better Inputs logic and Toast components
        // could be extracted to platform specific function
        if(!(email && firstName && lastName && password && passwordConfirmation)){
            console.log("Please fill all of the fields.");
            Alert.alert("Oopsie", "Please fill all of the fields.");
            return;
        }
        if(!isEmail(email)){
            console.log("Please enter a valid email.");
            Alert.alert("Oopsie", "Please enter a valid email.");
            return;
        }
        if(!passwordsMatch(password, passwordConfirmation)){
            console.log("Passwords do not match.");
            Alert.alert("Oopsie", "Passwords do not match.");
            return;
        }

        // const user = await register(mockRegisterPayload());
        const user = await register({ email, firstName, lastName, password, passwordConfirmation });

        if(user === null){
            //some toast or smthin
            console.log("Failed to register."); 
            Alert.alert("Oopsie", "Failed to register.")
            return;
        }
        navigation.navigate("Login");
    };

    const openTOS = () => { Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); };
    const openPrivacyPolicy = () => { Linking.openURL("https://thewidlarzgroup.com/privacy-policy"); };

    return (
        <ScreenLayout>
            <FormHeader>
                <Heading>Create account</Heading>
            </FormHeader>
            <Fields>
                <FormField
                    label="e-mail address"
                    value={email}
                    onChangeText={setEmail}
                    validation={{
                        validator: isEmail(email),
                        message: "Please enter a valid email."
                    }}
                />
                <FormField
                    label="first name"
                    value={firstName}
                    onChangeText={setFirstName}
                />
                <FormField
                    label="last name"
                    value={lastName}
                    onChangeText={setLastName}
                />
                <FormField
                    label="password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <FormField
                    label="password confirmation"
                    value={passwordConfirmation}
                    onChangeText={setPasswordConfirmation}
                    secureTextEntry
                    validation={{
                        validator: passwordsMatch(password, passwordConfirmation),
                        message: "Passwords do not match."
                    }}
                />
            </Fields>
            <FormFooter>
                <Button label="Sign up" onPress={handleRegister}/>
                <BottomNotice>
                    <NoticeText>
                        By clicking sign up button you agree with
                        <Link label="the terms and conditions" onPress={openTOS}/> and <Link label="the privacy policy." onPress={openPrivacyPolicy}/>
                    </NoticeText>
                </BottomNotice>
            </FormFooter>
        </ScreenLayout>
    );
};

const FormHeader = styled.View`
    padding-top: 24px;
`;

const Fields = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 0 24px;
`;

const FormFooter = styled.View`
    align-items: center;
`;

//Side note/notice
const BottomNotice = styled.View`
    padding-top: 15px;
`;
const NoticeText = styled.Text`
    text-align: center;
`;

export default RegisterScreen;