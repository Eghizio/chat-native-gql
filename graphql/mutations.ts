import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation LoginUser($email: String!, $password: String!) {
        loginUser(email: $email, password: $password) {
            token
            user {
                id
                email
                firstName
                lastName
                profilePic
                role
            }
        }
    }
`;

export const REGISTER_USER = gql`
    mutation RegisterUser(
        $email: String!,
        $firstName: String!,
        $lastName: String!,
        $password: String!,
        $passwordConfirmation: String!
    ) {
        registerUser(
            email: $email,
            firstName: $firstName,
            lastName: $lastName,
            password: $password,
            passwordConfirmation: $passwordConfirmation
        ) {
            id
            email
            firstName
            lastName
            profilePic
            role
        }
    }
`;

export const SET_TYPING_USER = gql`
    mutation SetTypingUser($roomId: String!) {
        typingUser(roomId: $roomId) {
            id
            firstName
            lastName
        }
    }
`;

export const SEND_MESSAGE = gql`
    mutation SendMessage($body: String!, $roomId: String!) {
        sendMessage(body: $body, roomId: $roomId) {
            id
            insertedAt
            body
            user {
                id
                firstName
                lastName
                profilePic
            }
        }
    }
`;
