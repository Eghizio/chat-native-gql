import React, { useState } from "react";
import { Linking, View } from "react-native";
import styled from "styled-components/native";
import Heading from "../../components/Heading";
import FormField from "../../components/FormField";
import Link from "../../components/Link";
import Button from "../../components/Button";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import { RegisterScreenProps } from "../../types/navigation";

// why is that button style messed up?
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
        // const rnd = Math.floor(Math.random()*3000).toString();
        // const mockedInputs = {
        //     email: `test${rnd}@mail.com`,
        //     firstName: "Tony",
        //     lastName: "Stark",
        //     password: "ILoveYou3000",
        //     passwordConfirmation: "ILoveYou3000"
        // };

        // validate
        //is password matching passwordConfirmation, valid email etc.
        if(password !== passwordConfirmation) return console.log("Passwords do not match");

        const user = await register({ email, firstName, lastName, password, passwordConfirmation });

        if(user === null) return console.log("Failed to register!"); //some toast or smthin
        navigation.navigate("Login");
    };

    const openTOS = () => { Linking.openURL("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); };
    const openPrivacyPolicy = () => { Linking.openURL("https://thewidlarzgroup.com/privacy-policy"); };

    return (
        <Screen>
            <Heading>Create account</Heading>
            <Form>
                <View>
                    <FormField
                        label="e-mail address"
                        value={email}
                        onChangeText={setEmail}
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
                    />
                </View>
                <View>
                    <Button label="Sign up" onPress={handleRegister}/>
                    <FormFooter>
                        <FormFooterText>
                            By clicking sign up button you agree with
                            <Link label="the terms and conditions" onPress={openTOS}/> and <Link label="the privacy policy." onPress={openPrivacyPolicy}/>
                        </FormFooterText>
                    </FormFooter>
                </View>
            </Form>
        </Screen>
    );
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${Colors.BLUE.TINT_1}; //todo
`;

const Form = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 36px 0;
`;

//Side note/notice
const FormFooter = styled.View`
    padding-top: 15px;
`;
const FormFooterText = styled.Text`
    text-align: center;
`;

export default RegisterScreen;