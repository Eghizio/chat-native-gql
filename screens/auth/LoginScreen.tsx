import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Heading from "../../components/Heading";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import { LoginScreenProps } from "../../types/navigation";

// gotta fix spacing n layout
interface Props extends LoginScreenProps {};

const LoginScreen = ({ navigation }: Props) => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = async () => {
        // sample validate (could validate onchange with FormField component)
        if(!email || !password) return console.log("Email or password missing.");

        // const session = await login({ email, password });
        const session = await login({ email: "gollum@mail.com", password: "IWasAHobbitOnce!123" }); //temp
        if(session === null) return console.log("Failed to log in!"); //some toast or smthin
        // AuthStack takes care of navigating to MainStack
    };

    const navigateToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <Screen>
            <Heading>Welcome back</Heading>
            <Heading
                size={22}
                color={Colors.WHITE}
            >Log in and stay in touch with everyone!</Heading>
            <Form>
                <View>
                    <FormField
                        label="e-mail address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <FormField
                        label="password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View>
                    <Button label="Log in" onPress={handleLogin}/>
                    <FormFooter>
                        <FormFooterText>
                            Not a member? <Link label="Create account now" onPress={navigateToRegister}/>
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
    background-color: ${Colors.BLUE.TINT_1};
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

export default LoginScreen;