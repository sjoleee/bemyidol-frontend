import style from '@/components/Button/index.module.css';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return <button className={style.buttonprimary}>{children}</button>;
};

export default Button;
