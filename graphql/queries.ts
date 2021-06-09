  
import { gql } from "@apollo/client";

export const GET_CURRENT_USER = gql`
    query GetCurrentUser {
        user {
            id
            email
            firstName
            lastName
            profilePic
            role
        }
    }
`;

export const GET_USERS_ROOMS = gql`
    query GetUsersRooms {
        usersRooms {
            rooms {
                id
                name
                roomPic
            }
        }
    }
`;

export const GET_ROOM_BY_ID = gql`
    query GetRoomById($id: ID!) {
        room(id: $id){
            id
            name
            roomPic
            messages {
                id
                insertedAt
                body
                user{
                    id
                    firstName
                    lastName
                    profilePic
                }
            }
        }
    }
`;