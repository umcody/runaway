import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Meh(props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M48 24c0 13.255-10.745 24-24 24C10.747 48 0 37.255 0 24 0 10.747 10.747 0 24 0c13.255 0 24 10.747 24 24z"
        fill="#FFCC4D"
      />
      <Path
        d="M33.333 34.667H14.667a1.333 1.333 0 110-2.667h18.666a1.332 1.332 0 110 2.667zM20 24h-9.333a1.334 1.334 0 010-2.667H20A1.334 1.334 0 0120 24zm17.333 0H28a1.333 1.333 0 110-2.667h9.333a1.333 1.333 0 110 2.667z"
        fill="#664500"
      />
    </Svg>
  );
}

export default Meh;
