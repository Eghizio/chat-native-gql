import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import Colors from "../../constants/Colors";
import { useAuth } from "../../context/AuthProvider";
import { RegisterScreenProps } from "../../types/navigation";


interface Props extends RegisterScreenProps {};

const RegisterScreen = ({ navigation }: Props) => {
    const { register } = useAuth();

    const handleRegister = async () => {
        // validate
        const rnd = Math.floor(Math.random()*3000).toString();
        const user = await register({
            email: `test${rnd}@mail.com`,
            firstName: "Tony",
            lastName: "Stark",
            password: "ILoveYou3000",
            passwordConfirmation: "ILoveYou3000"
        });
        if(user === null) return console.log("Failed to register!"); //some toast or smthin
        console.log(user)
        navigation.navigate("Login");
    };

    return (
        <Screen>
            <Heading>Create account</Heading>
            <Form>
                <View>
                    <FieldSet>
                        <Label>e-mail address</Label>
                        <Input/>
                    </FieldSet>
                    <FieldSet>
                        <Label>first name</Label>
                        <Input/>
                    </FieldSet>
                    <FieldSet>
                        <Label>last name</Label>
                        <Input/>
                    </FieldSet>
                    <FieldSet>
                        <Label>password</Label>
                        <Input/>
                    </FieldSet>
                    <FieldSet>
                        <Label>password confirmation</Label>
                        <Input/>
                    </FieldSet>
                </View>

                <View>
                    <SubmitButton onPress={() => handleRegister()}>
                        <SubmitButonText>Sign up</SubmitButonText>
                    </SubmitButton>

                    <FormFooter>
                        <FormFooterText>
                            By clicking sign up button you agree with
                            <Link><LinkText>the terms and conditions</LinkText></Link> and <Link><LinkText>the privacy policy.</LinkText></Link>
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

const Heading = styled.Text`
    font-weight: 700;
    font-size: 36px;
    color: ${Colors.PLUM.NORMAL};
`;

const Form = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-between;
    padding: 36px 0;
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

//Side note
const FormFooter = styled.View`
    padding-top: 15px;
`;
const FormFooterText = styled.Text`
    text-align: center;
`;
const Link = styled.TouchableOpacity``;
const LinkText = styled.Text`
    color: ${Colors.BLUE.NORMAL};
    text-decoration: underline;
    text-decoration-color: ${Colors.BLUE.NORMAL};
`;


export default RegisterScreen;