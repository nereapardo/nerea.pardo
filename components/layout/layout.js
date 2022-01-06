import Navbar from "./navbar";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
