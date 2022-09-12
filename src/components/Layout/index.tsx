interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="w-screen max-w-3xl m-auto">{children}</div>;
};

export default Layout;
