export type User = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profilePic: string;
    role: string;
};

export type Room = {
    id: string;
    name: string;
    roomPic: string;
    messages: Message[];
};

export type Message = {
    id: string;
    insertedAt: string;
    body: string;
    user: User;
};

export type UserRoom = Pick<Room, "id" | "name" | "roomPic">;