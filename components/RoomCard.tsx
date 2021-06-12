import React from "react";
import styled from "styled-components/native";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import useRoom from "../hooks/useRoom";
import { UserRoom } from "../types/api";
// import { limitText } from "../utils/limitText";
import ProfileIcon from "./Icons/ProfileIcon";
import { parseMessageTime } from "../utils/parseMessageTime";


// fix length, make last message time, if read (last visited)
interface Props {
    room: UserRoom;
};

// fixes styled-components unit Warning, if units provided causes expo Error
const circle = { borderRadius: 50 };
const DEFAULT_LAST_MESSAGE = " " as const;
const TIMEZONE_ADJUSTMENT = 9; // server is GMT (-2h); 9*15 = 2h15min
const FIFTEEN_MIN_IN_MS = 900000*TIMEZONE_ADJUSTMENT; // 15*60*1000 * adjustment

const RoomCard = ({ room }: Props) => {
    const { data: roomData } = useRoom(room.id); // for last message

    // todo: are the dates sorted?
    const lastMessage = roomData && [...roomData.room.messages].pop();
    // kinda unsafe. what if the data format changes
    const lastMessageTime = lastMessage && new Date(lastMessage.insertedAt);
    const isActive = !!lastMessageTime
        && (lastMessageTime.getTime() > (Date.now() - FIFTEEN_MIN_IN_MS)); 

    // todo: is read, last time chatroom was opened.
    // needs context, would refactor all this logic there prolly

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
                    : <LastMessageTime>{lastMessageTime && parseMessageTime(lastMessageTime)}</LastMessageTime>
                    }
                </Activity>
                <CardContent>
                    <RoomName isActive={isActive} numberOfLines={1}>
                        {room.name}
                    </RoomName>
                    <LastMessage isActive={isActive} numberOfLines={1}>
                        {lastMessage?.body || DEFAULT_LAST_MESSAGE}
                    </LastMessage>
                </CardContent>
            </Wrapper>
        </Card>
    );
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
`;
const RoomImage = styled.Image`
    width: 64px;
    height: 64px;
    /* border-radius: 50; */
    background-color: ${Colors.GREY.TINT_2};
`;

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
`;
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