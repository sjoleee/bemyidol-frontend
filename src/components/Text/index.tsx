import clsx from 'clsx';

import styles from '@/components/Text/index.module.css';

interface Props {
  className?: string;
  children: React.ReactNode;
}

export const H1 = ({ children, className }: Props) => {
  return <h1 className={clsx(styles.h1, [className])}>{children}</h1>;
};

export const H2 = ({ children, className }: Props) => {
  return <h2 className={clsx(styles.h2, [className])}>{children}</h2>;
};

export const T1 = ({ children, className }: Props) => {
  return <span className={clsx(styles.t1, [className])}>{children}</span>;
};

export const T2 = ({ children, className }: Props) => {
  return <span className={clsx(styles.t2, [className])}>{children}</span>;
};

export const T3 = ({ children, className }: Props) => {
  return <span className={clsx(styles.t3, [className])}>{children}</span>;
};

export const T4 = ({ children, className }: Props) => {
  return <span className={clsx(styles.t4, [className])}>{children}</span>;
};

export const T5 = ({ children, className }: Props) => {
  return <span className={clsx(styles.t5, [className])}>{children}</span>;
};
