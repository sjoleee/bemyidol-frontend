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

export const H3 = ({ children }: Props) => {
  return <h3 className={style.h3}>{children}</h3>;
};

export const H4 = ({ children }: Props) => {
  return <h4 className={style.h4}>{children}</h4>;
};
