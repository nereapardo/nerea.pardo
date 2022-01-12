import Navbar from "../../organisms/navbar";
import Footer from "../../molecules/footer";

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
