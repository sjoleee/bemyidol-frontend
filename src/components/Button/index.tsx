import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

import styles from './index.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  rounded?: boolean;
  isFixed?: boolean;
  isWhite?: boolean;
}

const Button = ({
  children,
  fullWidth = false,
  rounded = false,
  isFixed = false,
  isWhite = false,
  ...rest
}: Props) => {
  return (
    <button
      className={clsx(styles.baseStyle, {
        [styles.fullWidth]: fullWidth,
        [styles.rounded]: rounded,
        [styles.isFixed]: isFixed,
        [styles.white]: isWhite,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
