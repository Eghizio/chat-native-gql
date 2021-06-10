import React from "react";
import styled from "styled-components/native";

import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import { LoginScreenProps } from "../../types/navigation";

// need to extract components for login/register reusability
interface Props extends LoginScreenProps {};

// validate form data
const LoginScreen = ({ navigation }: Props) => {
    const { login } = useAuth();

    const navigateToRegister = () => {
        navigation.navigate("Register");
    };

    const handleLogin = async () => {
        // validate
        const session = await login({ email: "gollum@mail.com", password: "IWasAHobbitOnce!123" });
        if(session === null) return console.log("Failed to log in!"); //some toast or smthin
        // AuthStack takes care of navigating to MainStack
    };

    return (
        <Screen>
            <Heading>Welcome back</Heading>
            <SubHeading>Log in and stay in touch with everyone!</SubHeading>
            <Form>
                <FieldSet>
                    <Label>e-mail address</Label>
                    <Input/>
                </FieldSet>
                <FieldSet>
                    <Label>password</Label>
                    <Input/>
                </FieldSet>

                <SubmitButton onPress={() => handleLogin()}>
                    <SubmitButonText>Log in</SubmitButonText>
                </SubmitButton>

                <FormFooter>
                    <FormFooterText>
                        Not a member? <Link onPress={navigateToRegister}><LinkText>Create account now</LinkText></Link>
                    </FormFooterText>
                </FormFooter>
            </Form>
        </Screen>
    );
};

const Screen = styled.View`
    flex: 1;
    flex-direction: column;
    background-color: ${Colors.BLUE.TINT_1}; //todo
`;

const Heading = styled.Text`
    font-weight: 700;
    font-size: 36px;
    color: ${Colors.PLUM.NORMAL};
`;
const SubHeading = styled.Text`
    font-weight: 700;
    font-size: 22px;
    color: ${Colors.WHITE};
`;

const Form = styled.View`
    align-items: center;
`;
// or maybe shall i name it Row?
const FieldSet = styled.View``;
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

const SubmitButton = styled.TouchableOpacity`
    background-color: ${Colors.PLUM.NORMAL};
    padding: 17px 88px;
    border-radius: 10px;
`;
const SubmitButonText = styled.Text`
    color: ${Colors.WHITE};
`;

const FormFooter = styled.View``;
const FormFooterText = styled.Text``;
const Link = styled.TouchableOpacity``;
const LinkText = styled.Text`
    color: ${Colors.BLUE.NORMAL};
`;



export default LoginScreen;