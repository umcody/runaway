import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function HomeGradient(props) {
  return (
    <Svg width={28} height={28} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M1.6 17.6h1.6v11.2c0 1.765 1.435 3.2 3.2 3.2h19.2c1.765 0 3.2-1.435 3.2-3.2V17.6h1.6a1.6 1.6 0 001.132-2.731l-14.4-14.4a1.598 1.598 0 00-2.263 0l-14.4 14.4a1.6 1.6 0 001.13 2.731zm11.2 11.2v-8h6.4v8h-6.4zM16 3.863l9.6 9.6V20.8l.002 8H22.4v-8c0-1.765-1.435-3.2-3.2-3.2h-6.4a3.203 3.203 0 00-3.2 3.2v8H6.4V13.463l9.6-9.6z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={16}
          y1={-6.5}
          x2={16}
          y2={39}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.266} stopColor="#ACDAFF" />
          <Stop offset={1} stopColor="#FF9EDA" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
};

export function HomeGray(props) {
    return (
        <Svg width={28} height={28} viewBox="0 0 32 32" fill="none" {...props}>
        <Path
          d="M1.6 17.6h1.6v11.2c0 1.765 1.435 3.2 3.2 3.2h19.2c1.765 0 3.2-1.435 3.2-3.2V17.6h1.6a1.6 1.6 0 001.132-2.731l-14.4-14.4a1.598 1.598 0 00-2.263 0l-14.4 14.4a1.6 1.6 0 001.13 2.731zm11.2 11.2v-8h6.4v8h-6.4zM16 3.863l9.6 9.6V20.8l.002 8H22.4v-8c0-1.765-1.435-3.2-3.2-3.2h-6.4a3.203 3.203 0 00-3.2 3.2v8H6.4V13.463l9.6-9.6z"
          fill="#DADADA"
        />
      </Svg>
    )
  };

