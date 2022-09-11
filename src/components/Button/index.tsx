import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

export enum ButtonSize {
  XS = 'x-small',
  SM = 'small',
  MD = 'medium',
  LG = 'large',
}

export enum ButtonColor {
  PRIMARY = 'primary',
  SUB = 'sub',
  MONO = 'mono',
  WARNING = 'warning',
  INFO = 'info',
  /**
   * fixed color : black/white 는 테마 변경에 반영되지 않음
   */
  BLACK = 'black',
  /**
   * fixed color : black/white 는 테마 변경에 반영되지 않음
   */
  WHITE = 'white',
  ELEVATED = 'elevated',
}

export enum ButtonVariant {
  CONTAINED = 'contained',
  OUTLINED = 'outlined',
  TEXT = 'text',
}

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  fullWidth?: boolean;
  fullRounded?: boolean;
  color?: ButtonColor;
  variant?: ButtonVariant;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  icon?: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      className,
      size = ButtonSize.SM,
      fullWidth = false,
      fullRounded = false,
      color = ButtonColor.PRIMARY,
      variant = ButtonVariant.CONTAINED,
      prefixIcon,
      suffixIcon,
      icon,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        className={clsx(
          styles.container,
          styles[size],
          styles[variant],
          styles[color],
          {
            [styles.fullWidth]: fullWidth,
            [styles.withPrefixIcon]: prefixIcon,
            [styles.withSuffixIcon]: suffixIcon,
            [styles.iconOnly]: icon && !children,
            [styles.rounded]: fullRounded,
          },
          className,
        )}
        ref={ref}
        {...rest}
      >
        {prefixIcon && <div className={styles.prefixIcon}>{prefixIcon}</div>}
        {icon}
        {children}
        {suffixIcon && <div className={styles.suffixIcon}>{suffixIcon}</div>}
      </button>
    );
  },
);

export default Button;

Button.displayName = 'Button';
