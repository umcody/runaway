import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export function ResGradient(props) {
  return (
    <Svg width={26} height={26} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M31.324.488a1.708 1.708 0 00-.706-.39A1.588 1.588 0 0029.83.09L16 3.584 2.17.049a1.588 1.588 0 00-.801.005A1.71 1.71 0 00.65.453C.44.645.274.889.16 1.165a2.21 2.21 0 00-.16.881v24.363c-.01.461.122.913.375 1.277.253.364.61.618 1.011.72L15.61 32h.782l14.222-3.595a1.768 1.768 0 001.011-.72c.253-.363.386-.815.376-1.276V2.046a2.202 2.202 0 00-.18-.865 1.97 1.97 0 00-.496-.693zM3.556 4.542l10.666 2.696v20.269L3.556 24.81V4.542zm24.888 20.269l-10.666 2.696V7.238l10.666-2.696v20.269z"
        fill="url(#prefix__paint0_linear)"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={16}
          y1={0}
          x2={16}
          y2={32}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#ACDAFF" />
          <Stop offset={1} stopColor="#FF9EDA" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
};

export function ResGray(props) {
    return (
      <Svg width={26} height={26} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M31.324.488a1.708 1.708 0 00-.706-.39A1.588 1.588 0 0029.83.09L16 3.584 2.17.049a1.588 1.588 0 00-.801.005A1.71 1.71 0 00.65.453C.44.645.274.889.16 1.165a2.21 2.21 0 00-.16.881v24.363c-.01.461.122.913.375 1.277.253.364.61.618 1.011.72L15.61 32h.782l14.222-3.595a1.768 1.768 0 001.011-.72c.253-.363.386-.815.376-1.276V2.046a2.202 2.202 0 00-.18-.865 1.97 1.97 0 00-.496-.693zM3.556 4.542l10.666 2.696v20.269L3.556 24.81V4.542zm24.888 20.269l-10.666 2.696V7.238l10.666-2.696v20.269z"
        fill="#DADADA"
      />
    </Svg>
    )
  };

