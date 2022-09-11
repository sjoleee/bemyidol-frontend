interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="w-screen max-w-3xl m-auto border-2">{children}</div>;
};

export default Layout;
