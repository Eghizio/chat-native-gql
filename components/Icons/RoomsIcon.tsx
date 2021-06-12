import * as React from "react";
import { View } from "react-native";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";


const RoomsIcon = (props: SvgProps) => {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Svg
                width={44}
                height={44}
                viewBox="0 0 44 44"
                fill="none"
                {...props}
            >
                <Circle cx={22} cy={22} r={22} fill="#fff" />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.526 14.476a4.478 4.478 0 018.094-2.632c-2.34.923-4.412 3.842-3.527 7.105a.256.256 0 00-.042.005c-.014.002-.028.005-.043.005a4.481 4.481 0 01-4.482-4.483zm14.992 3.014a4.482 4.482 0 11-8.965 0 4.482 4.482 0 018.965 0zM34 30.179c0 5.226-17.92 5.226-17.92 0 0-9.238 17.92-9.144 17.92 0zm-14.388-9.874c-8.277-1.134-13.598 8.47-5.829 10.11.076-4.413 3.428-7.096 7.529-8.085a6.09 6.09 0 01-1.7-2.025z"
                    fill="#5603AD"
                />
            </Svg>
        </View>
    );
};

export default RoomsIcon;