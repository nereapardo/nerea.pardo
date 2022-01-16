import Project from "components/sections/project/Project";
import Technologies from "components/atoms/technologies/";
import Link from "components/atoms/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import homeHopperLaptop from "public/images/homeHopperLaptop.jpg";
import ProjectsNavigationLinks from "components/molecules/projects-navigation-links/ProjectsNavigationLinks";
import homeHopperCollaboration from "public/images/homeHopperCollaboration.png";
import homeHopperFilter from "public/images/homeHopperFilter.jpg";

const HomeHopper = () => {
  return (
    <div className="bg-stone-900 py-12">
      <Project image={homeHopperLaptop} title="Home Hopper">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iure
          inventore, numquam non magnam dignissimos ad consequuntur illum
          laborum aut adipisci saepe, culpa reprehenderit explicabo deserunt
          fuga, earum unde perferendis.
        </p>
        <div className="flex mt-8 justify-between ">
          <Link href="#" type="secondary" external>
            Visit site &#10141;
          </Link>
          <Link
            href="https://github.com/Home-Hopper/Home-Hopper"
            external
            type="unstyled"
            className="text-neon text-5xl"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </Project>
      <Technologies
        technologies="CSS, HTML, JS, Handlebars, Bootstrap, Mongo, Expres,Mongoose"
        className="mb-4"
      />
      <Project image={homeHopperCollaboration} title="Why?" reverse>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>lorem</p>
      </Project>
      <Project image={homeHopperFilter} title="Challenge">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>lorem</p>
      </Project>
      <ProjectsNavigationLinks previous previousProjectPage="home-connection" />
    </div>
  );
};
export default HomeHopper;
