import * as React from "react";
import { View } from "react-native";
import Svg, { SvgProps, Path } from "react-native-svg";

interface Props extends SvgProps {
    low?: boolean;
};

const Vision = ({ low, ...props }: Props) => {
    return (
        <View style={{
            justifyContent: "center",
            alignItems: "center"
        }}>
            {low
            ? (
                <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    {...props}
                >
                    <Path
                        d="M6.367 11.106C4.324 8.399 6.76 4.866 9.98 5.78c-2.644 1.585.615 4.918 2.24 2.236 1.019 3.94-3.836 5.734-5.854 3.09z"
                        fill="#BFC1CC"
                    />
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.814 9.605C13.353 16.239 4.648 16.358.18 9.608c-.243-.369-.24-.861.007-1.223 4.468-6.582 13.123-6.775 17.63-.007.243.365.243.861-.003 1.227zM2.24 8.993c4.247-4.845 9.362-4.908 13.517 0-4.155 4.841-9.292 4.778-13.517 0z"
                        fill="#BFC1CC"
                    />
                </Svg>
            ) : (
                <Svg
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                    {...props}
                >
                    <Path
                    d="M10.473 2.26L9.471 3.967C6.026 3.818 2.531 5.48.187 8.936c-.247.363-.25.855-.007 1.228 1.03 1.557 2.288 2.735 3.663 3.561l-.496.896c-.703 1.322 1.157 2.388 1.948 1.129L12.42 3.389c.682-1.128-1.002-2.496-1.948-1.128zM17.817 8.93c-1.15-1.73-2.573-3-4.123-3.829L12.66 6.894c1.069.608 2.113 1.484 3.097 2.65-2.07 2.416-4.384 3.611-6.708 3.611l-1.132 1.966c3.639.39 7.422-1.277 9.897-4.964.246-.362.246-.862.003-1.227z"
                    fill="#BFC1CC"
                    />
                    <Path
                    d="M9.18 12.916c3.416-.351 3.54-3.66 2.819-4.886l-2.82 4.886z"
                    fill="#5c617a"
                    />
                </Svg>
            )}
        </View>
    );
};


export default Vision;
