import style from '@/components/Text/index.module.css';

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  return <h1 className={style.h1}>{children}</h1>;
};

export const H2 = ({ children }: Props) => {
  return <h2 className={style.h2}>{children}</h2>;
};

export const T1 = ({ children }: Props) => {
  return <span className={style.t1}>{children}</span>;
};

export const T2 = ({ children }: Props) => {
  return <span className={style.t2}>{children}</span>;
};

export const T3 = ({ children }: Props) => {
  return <span className={style.t3}>{children}</span>;
};

export const T4 = ({ children }: Props) => {
  return <span className={style.t4}>{children}</span>;
};
