import ThemeContext from "../Contexts/theme-context";
import { useContext } from "react";

function ButtonJ({ children }) {
    const theme = useContext(ThemeContext);
    const className = 'button-' + theme;
    return (
      <button className={className}>
        {children}
      </button>
    );
  }


export default ButtonJ;