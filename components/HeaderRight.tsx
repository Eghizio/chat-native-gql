import React from "react";
import styled from "styled-components/native";
import PressableIcon from "./Icons/PressableIcon";
import { MainStackParamList } from "../types/navigation";

interface Props {
    screenName: keyof MainStackParamList;
};

// could make some map of screenName => iconName:handler
// but would have to make some TS gymnastics
// let's keep it simple

const HeaderRight = ({ screenName }: Props) => {
    if(screenName === "Rooms") return (
        <Wrapper>
            <Margin>
                <PressableIcon iconName="search" onPress={() => console.log("Search rooms.")}/>
            </Margin>
            <Margin>
                <PressableIcon iconName="rooms" onPress={() => console.log("Create rooms.")}/>
            </Margin>
        </Wrapper>
    );
    if(screenName === "ChatRoom") return (
        <Wrapper>
            <Margin>
                <PressableIcon iconName="call" onPress={() => console.log("Call somebody.")}/>
            </Margin>
            <Margin>
                <PressableIcon iconName="video" onPress={() => console.log("Video call somebody.")}/>
            </Margin>
        </Wrapper>
    );
    return null;
};

const Wrapper = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 14px;
`;

// could pass the same const to PressableIcon style (would require props modification)
// composition is the way to go
const Margin = styled.View`
    margin: 0 4px;
`;

export default HeaderRight;