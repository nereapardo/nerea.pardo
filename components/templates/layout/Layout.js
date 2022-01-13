import Navbar from "components/organisms/navbar";
import Footer from "components/molecules/footer";

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
