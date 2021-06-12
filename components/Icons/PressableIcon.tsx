import React from "react";
import { GestureResponderEvent } from "react-native";
import styled from "styled-components/native";
import SearchIcon from "./SearchIcon";
import RoomsIcon from "./RoomsIcon";
import CallIcon from "./CallIcon";
import VideoIcon from "./VideoIcon";
import Colors from "../../constants/Colors";


const ICONS = {
    search: <SearchIcon/>,
    rooms: <RoomsIcon/>,
    call: <CallIcon/>,
    video: <VideoIcon/>,
} as const;

interface Props {
    onPress: (event: GestureResponderEvent) => void;
    iconName: keyof typeof ICONS;
};

const PressableIcon = ({ onPress, iconName }: Props) => {
    return (
        <Wrapper onPress={onPress} style={{borderRadius: 50}}>
            {ICONS[iconName]}
        </Wrapper>
    );
};

const Wrapper = styled.TouchableOpacity`
    width: 44px;
    height: 44px;
    background-color: ${Colors.WHITE};
    align-items: center;
    justify-content: center;
`;

export default PressableIcon;