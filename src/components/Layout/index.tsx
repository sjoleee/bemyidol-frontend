interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="relative w-screen h-screen m-auto scrollbar-hide">{children}</div>;
};

export default Layout;
