interface Props {
    children: React.ReactNode;
}

const Layout = ({children}: Props) => {
    return <div className="w-screen h-screen max-w-3xl m-auto shadow-md p-4">{children}</div>;
};

export default Layout;
