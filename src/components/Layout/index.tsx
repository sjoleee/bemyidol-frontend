interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="w-screen h-screen m-auto shadow-md p-4 overflow-y-scroll">{children}</div>;
};

export default Layout;
