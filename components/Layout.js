import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
