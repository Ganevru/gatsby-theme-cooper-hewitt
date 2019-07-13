import merge from "lodash.merge";
import typography from "./typography";
import colors from "./colors";
import styles from "./styles";
import prism from "./prism";

console.log({ typography });

export default merge({}, typography, {
  initialColorMode: `light`,
  colors,
  fonts: {
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`
  },
  sizes: {
    container: 672
  },
  styles,
  prism
});
