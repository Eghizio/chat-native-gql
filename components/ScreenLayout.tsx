import styled from "styled-components/native";
import Colors from "../constants/Colors";

interface Props {
    readonly lightBackground?: boolean;
    readonly noPadding?: boolean;
};

const ScreenLayout = styled.View<Props>`
    flex: 1;
    flex-direction: column;
    background-color: ${props => props.lightBackground ? Colors.BLUE.TINT_2 : Colors.BLUE.TINT_1};
    padding: ${props => props.noPadding ? "0" : "12px"};
`;

export default ScreenLayout;