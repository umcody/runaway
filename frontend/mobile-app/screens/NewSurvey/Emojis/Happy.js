import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Happy(props) {
  return (
    <Svg width={48} height={48} viewBox="0 0 48 48" fill="none" {...props}>
      <Path
        d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"
        fill="#FFCC4D"
      />
      <Path
        d="M24 28c-4.83 0-8.036-.563-12-1.333-.905-.175-2.667 0-2.667 2.666 0 5.334 6.127 12 14.667 12 8.539 0 14.667-6.666 14.667-12 0-2.666-1.762-2.842-2.667-2.666-3.964.77-7.17 1.333-12 1.333z"
        fill="#664500"
      />
      <Path
        d="M12 29.333s4 1.334 12 1.334 12-1.334 12-1.334-2.667 5.334-12 5.334-12-5.334-12-5.334z"
        fill="#fff"
      />
      <Path
        d="M16 22.667c1.841 0 3.333-2.09 3.333-4.667S17.841 13.333 16 13.333c-1.84 0-3.333 2.09-3.333 4.667s1.492 4.667 3.333 4.667zM32 22.667c1.84 0 3.333-2.09 3.333-4.667S33.841 13.333 32 13.333c-1.841 0-3.334 2.09-3.334 4.667S30.16 22.667 32 22.667z"
        fill="#664500"
      />
    </Svg>
  );
}

export default Happy;
