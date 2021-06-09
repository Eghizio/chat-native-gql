import { gql } from "@apollo/client";

export const SUB_TYPING_USER = gql`
    subscription SubTypingUser($roomId: String!) {
        typingUser(roomId: $roomId) {
            id
            firstName
            lastName
        }
    }
`;

export const SUB_MESSAGE_ADDED = gql`
    subscription SubMessageAdded($roomId: String!) {
        messageAdded(roomId: $roomId) {
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
