import style from '@/components/Text/index.module.css';

interface Props {
  children: React.ReactNode;
}

export const H1 = ({ children }: Props) => {
  return <button className={style.h1}>{children}</button>;
};

export const H2 = ({ children }: Props) => {
  return <button className={style.h2}>{children}</button>;
};

export const H3 = ({ children }: Props) => {
  return <button className={style.h3}>{children}</button>;
};

export const H4 = ({ children }: Props) => {
  return <button className={style.h4}>{children}</button>;
};
