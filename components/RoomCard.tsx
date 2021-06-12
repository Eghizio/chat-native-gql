import React from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import useRoom from "../hooks/useRoom";
import { UserRoom } from "../types/api";
// import { limitText } from "../utils/limitText";
import ProfileIcon from "./Icons/ProfileIcon";

// fix length, make last message time, if read (last visited)
interface Props {
    room: UserRoom;
};

// fixes styled-components unit Warning, if units provided causes expo Error
const circle = { borderRadius: 50 };

const RoomCard = ({ room }: Props) => {
    const { data: roomData } = useRoom(room.id); // for last message


    // isActive, then parse to some pleasant format.
    const lastMessageTime = Math.random() > 0.5;
    const isActive = lastMessageTime; // todo: if less than 15min

    const lastMessage = roomData
        ? ([...roomData.room.messages].pop()?.body || " ")
        : " ";

    return (
        <Card isActive={isActive}>
            {room.roomPic
            ? <RoomImage source={{ uri: room.roomPic }} style={circle}/>
            : <RoomImagePlaceholder style={circle}/>
            }
            <Wrapper>
                <Activity>
                    {isActive
                    ? <ActiveIndicator style={circle}/>
                    : <LastMessageTime>24 m ago</LastMessageTime>
                    }
                </Activity>
                <CardContent>
                    <RoomName isActive={isActive} numberOfLines={1}>
                        {room.name}
                    </RoomName>
                    <LastMessage isActive={isActive} numberOfLines={1}>
                        {lastMessage}
                    </LastMessage>
                </CardContent>
            </Wrapper>
        </Card>
    );

    // return (
    //     <View style={styles.roomCard}>
    //         <Image style={styles.roomImg} source={{ uri: room.roomPic }}/>
    //         <View>
    //             <View></View>
    //             <View style={styles.textContainer}>
    //                 <Text style={styles.roomName} numberOfLines={1}>
    //                     {limitText(room.name, MAX_TEXT_LENGTH)}
    //                 </Text>
    //                 <Text style={styles.lastMessage} numberOfLines={1}>
    //                     {limitText(lastMessage, MAX_TEXT_LENGTH)}
    //                 </Text>
    //             </View>
    //         </View>
    //     </View>
    // );
};

interface ActiveProps {
    readonly isActive: boolean;
};

const Card = styled.View<ActiveProps>`
    width: ${`${Layout.window.width}px`};
    padding: 15px;
    flex-direction: row;
    align-items: center;
    border-radius: 12px;
    background-color: ${props => props.isActive ? Colors.PLUM.NORMAL : Colors.WHITE};
    margin: 15px 0; 
`; // temp margin, gotta move it to list spacing/separator
const RoomImage = styled.Image`
    width: 64px;
    height: 64px;
    /* border-radius: 50; */
    background-color: ${Colors.GREY.TINT_2};
`;
// image uri shouldnt be an empty string
const RoomImagePlaceholder = styled(ProfileIcon)`
    width: 64px;
    height: 64px;
    /* border-radius: 50; */
    background-color: ${Colors.GREY.TINT_2};
`;

const Wrapper = styled.View`
    flex: 1;
`;

const Activity = styled.View`
    align-items: flex-end;
`;
const ActiveIndicator = styled.View`
    width: 12px;
    height: 12px;
    /* border-radius: 50; */
    background-color: ${Colors.ACTIVE};
`; // could be gray if inactive for longer period of time
const LastMessageTime = styled.Text`
    font-weight: 400;
    font-size: 12px;
    color: ${Colors.GREY.NORMAL};
`;

const CardContent = styled.View`
    padding: 10px;
    padding-left: 15px;
`;

const StyledText = styled.Text<ActiveProps>`
    color: ${props => props.isActive ? Colors.WHITE : Colors.BLACK};
    flex-shrink: 1;
`;
const RoomName = styled(StyledText)`
    font-weight: 500;
    font-size: 15px;
`;
const LastMessage = styled(StyledText)`
    font-size: 14px;
`;

export default RoomCard;