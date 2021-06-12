import styled from "styled-components/native";
import Colors from "../constants/Colors";
import Fonts from "../constants/Fonts";

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
    font-family: ${Fonts.Poppins_700Bold};
`;

export default Heading;
