import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function ChatGradient(props) {
  return (
    <Svg width={26} height={26} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M28.444 0H3.556C1.595 0 0 1.479 0 3.297v19.78c0 1.817 1.595 3.296 3.556 3.296H9.93L16 32l6.07-5.627h6.374c1.961 0 3.556-1.479 3.556-3.297V3.296C32 1.48 30.405 0 28.444 0zm0 23.076h-7.847L16 27.34l-4.597-4.263H3.556V3.296h24.888v19.78z"
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

export function ChatGray(props) {
    return (
      <Svg width={26} height={26} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M28.444 0H3.556C1.595 0 0 1.479 0 3.297v19.78c0 1.817 1.595 3.296 3.556 3.296H9.93L16 32l6.07-5.627h6.374c1.961 0 3.556-1.479 3.556-3.297V3.296C32 1.48 30.405 0 28.444 0zm0 23.076h-7.847L16 27.34l-4.597-4.263H3.556V3.296h24.888v19.78z"
        fill="#DADADA"
      />
    </Svg>
    )
  };

