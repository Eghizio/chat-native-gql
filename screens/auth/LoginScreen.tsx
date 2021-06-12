import React, { useState } from "react";
import { Alert, View } from "react-native";
import styled from "styled-components/native";
import ScreenLayout from "../../components/ScreenLayout";
import Heading from "../../components/Heading";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import Link from "../../components/Link";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import { LoginScreenProps } from "../../types/navigation";
import { mockLoginPayload } from "../../utils/mocks";
import { isEmail } from "../../utils/validators";


interface Props extends LoginScreenProps {};

const LoginScreen = ({ navigation }: Props) => {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = async () => {
        // could be a Toast
        if(!email || !password){
            console.log("Please fill all of the fields.");
            Alert.alert("Oopsie", "Please fill all of the fields.");
            return;
        }
        if(!isEmail(email)){
            console.log("Please enter a valid email.");
            Alert.alert("Oopsie", "Please enter a valid email.");
            return;
        }
        
        // const session = await login(mockLoginPayload());
        const session = await login({ email, password });

        if(session === null){
            // could be a Toast
            console.log("Invalid credentials.");
            Alert.alert("Oopsie", "Invalid credentials.");
            return;
        }
        // AuthStack takes care of navigating to MainStack
    };

    const navigateToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <ScreenLayout>
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
                    validation={{
                        validator: isEmail(email),
                        message: "Please enter a valid email."
                    }}
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
        </ScreenLayout>
    );
};

const FormHeader = styled.View`
    padding-top: 24px;
`;

const TitleHeading = styled(Heading)`
    padding-bottom: 18px;
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

const BottomNotice = styled.View`
    padding-top: 15px;
`;

const NoticeText = styled.Text`
    text-align: center;
`;

export default LoginScreen;