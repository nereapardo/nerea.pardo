import Navbar from "./navbar";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div className="grid grid-rows-layout h-full">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
