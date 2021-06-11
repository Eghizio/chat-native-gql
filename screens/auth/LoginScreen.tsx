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
import { mockLoginPayload } from "../../utils/mocks";

// gotta fix spacing n layout
interface Props extends LoginScreenProps {};

const LoginScreen = ({ navigation }: Props) => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = async () => {
        // sample validate (could validate onchange with FormField component)
        if(!email || !password) return console.log("Email or password missing.");

        const session = await login(mockLoginPayload());
        // const session = await login({ email, password });

        if(session === null) return console.log("Failed to log in!"); //some toast or smthin
        // AuthStack takes care of navigating to MainStack
    };

    const navigateToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <Screen>
            <FormHeader>
                <TitleHeading>Welcome back</TitleHeading>
                <Heading
                    size={22}
                    color={Colors.WHITE}
                >Log in and stay in touch with everyone!</Heading>
            </FormHeader>
            <Fields>
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
            </Fields>
            <FormFooter>
                <Button label="Log in" onPress={handleLogin}/>
                <BottomNotice>
                    <NoticeText>
                        Not a member? <Link label="Create account now" onPress={navigateToRegister}/>
                    </NoticeText>
                </BottomNotice>
            </FormFooter>
        </Screen>
    );
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${Colors.BLUE.TINT_1};
    padding: 16px;
`;

const FormHeader = styled.View``;

const TitleHeading = styled(Heading)`
    padding-top: 24px;
    padding-bottom: 18px;
`;

const Fields = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const FormFooter = styled.View`
    align-items: center;
`;

const BottomNotice = styled.View`
    padding-top: 15px;
`;

const NoticeText = styled.Text`
    text-align: center;
`;

export default LoginScreen;