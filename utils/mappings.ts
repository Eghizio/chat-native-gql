import { User as IUser, IMessage } from "react-native-gifted-chat";
import { Message, User } from "../types/api";

// maps to match GiftedChat typings

export const mapUserToGifted = ({
    id: _id,
    firstName: name,
    profilePic: avatar
}: User): IUser => ({ _id, name, avatar });

export const mapMessageToGifted = ({
    id: _id,
    insertedAt: createdAt,
    body: text,
    user
}: Message): IMessage => ({
    _id,
    createdAt: new Date(createdAt),
    text,
    user: mapUserToGifted(user)
});


export const sortByMessageDate = (messages: IMessage[]) =>
    [...messages].sort((a ,b) =>
        (new Date(a.createdAt).getTime() >= new Date(b.createdAt).getTime())
        ? -1
        : 1
    );