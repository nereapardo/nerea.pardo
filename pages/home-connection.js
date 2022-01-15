import Project from "components/sections/project/Project";
import Technologies from "components/atoms/technologies/";
import Image from "next/image";
import map from "public/images/map.png";
import homeConnectionLaptop from "public/images/homeConnectionLaptop.jpg";

const HomeConnection = () => {
  return (
    <div className="bg-stone-900 py-12">
      <Project image={homeConnectionLaptop} title="Home Connection">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>lorem</p>
      </Project>
      <Technologies technologies="CSS, HTML, JS, DOM" className="mb-4" />
      <Project image={map} title="Why?" reverse>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>lorem</p>
      </Project>
    </div>
  );
};
export default HomeConnection;
