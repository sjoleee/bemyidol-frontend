import {ButtonHTMLAttributes, forwardRef} from 'react';
import styles from './index.module.css';
import clsx from 'clsx';

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
};

const Button = forwardRef<HTMLButtonElement, Props>(
    (
        {
            children,
            className,
            size = ButtonSize.SM,
            fullWidth = false,
            fullRounded = false,
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
