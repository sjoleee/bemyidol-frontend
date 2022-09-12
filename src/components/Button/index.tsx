import style from '@/components/Button/index.module.css';

interface Props {
  children: React.ReactNode;
  className?: string;
  isFixed?: boolean;
}

const Button = ({ children }: Props) => {
  return <button className={style.container}>{children}</button>;
};

export default Button;
