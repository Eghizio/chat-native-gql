import React from "react";
import { View } from "react-native";
import Svg, { SvgProps, Circle, Mask, G, Path, EMaskUnits } from "react-native-svg";

const ProfileIcon = (props: SvgProps) => {
  return (
    <View style={{
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Svg
        width={64}
        height={64}
        viewBox="0 0 64 64"
        fill="none"
        {...props}
        >
        <Circle cx={32} cy={32} r={32} fill="#E9EAEE" />
        <Mask
            id="prefix__a"
            maskUnits={EMaskUnits.USER_SPACE_ON_USE}
            x={0}
            y={0}
            width={64}
            height={64}
        >
            <Circle cx={32} cy={32} r={32} fill="#E9EAEE" />
        </Mask>
        <G mask="url(#prefix__a)" fill="#BFC1CC">
            <Path d="M32 32c6.627 0 12-5.373 12-12S38.627 8 32 8s-12 5.373-12 12 5.373 12 12 12zM32 32c19.33 0 35 15.67 35 35s-15.67 35-35 35S-3 86.33-3 67s15.67-35 35-35z" />
        </G>
        </Svg>
    </View>
  );
};

export default ProfileIcon;
