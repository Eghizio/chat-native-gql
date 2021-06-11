import styled from "styled-components/native";
import Colors from "../constants/Colors";

type FontWeight =
    | "100" | "200" | "300" | "400" | "500" 
    | "600" | "700" | "800" | "900" | "normal" | "bold";

interface Props {
    readonly weight?: FontWeight;
    readonly size?: number;
    readonly color?: string;
};

const Heading = styled.Text<Props>`
    font-weight: ${props => props.weight || "700"};
    font-size: ${props => (props.size || 36) + "px"};
    color: ${props => props.color || Colors.PLUM.NORMAL};
`;

export default Heading;
