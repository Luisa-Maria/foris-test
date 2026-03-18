import "./Layaout.css";
type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="auth-layout">{children}</div>;
};

export default Layout;
