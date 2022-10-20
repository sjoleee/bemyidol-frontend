import clsx from 'clsx';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import styles from './index.module.css';

export enum ButtonSize {
  XS = 'x-small',
  SM = 'small',
  MD = 'medium',
  LG = 'large',
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  fullWidth?: boolean;
  fullRounded?: boolean;
  isFixed?: boolean;
  isWhite?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      size = ButtonSize.LG,
      fullWidth = false,
      fullRounded = false,
      isFixed = false,
      isWhite = false,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        className={clsx(
          styles.container,
          styles[size],
          {
            [styles.fullWidth]: fullWidth,
            [styles.rounded]: fullRounded,
            [styles.isFixed]: isFixed,
            [styles.white]: isWhite,
          },
          className,
        )}
        ref={ref}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

export default Button;

Button.displayName = 'Button';
