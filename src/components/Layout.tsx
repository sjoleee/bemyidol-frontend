interface AppLayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: AppLayoutProps) {
  return <div className="w-screen max-w-3xl m-auto">{children}</div>;
}
export default Layout;
