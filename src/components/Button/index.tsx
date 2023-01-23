import clsx from "clsx";
import { ButtonHTMLAttributes, forwardRef } from "react";

import styles from "./index.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  halfWidth?: boolean;
  rounded?: boolean;
  isFixed?: boolean;
  isWhite?: boolean;
}

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      fullWidth = false,
      halfWidth = false,
      rounded = false,
      isFixed = false,
      isWhite = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        className={clsx(styles.baseStyle, {
          [styles.fullWidth]: fullWidth,
          [styles.halfWidth]: halfWidth,
          [styles.rounded]: rounded,
          [styles.isFixed]: isFixed,
          [styles.white]: isWhite,
        })}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
