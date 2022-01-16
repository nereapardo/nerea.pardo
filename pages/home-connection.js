import Project from "components/sections/project/Project";
import Technologies from "components/atoms/technologies/";
import Link from "components/atoms/link/";
import Image from "next/image";
import map from "public/images/map.png";
import homeConnectionLaptop from "public/images/homeConnectionLaptop.jpg";
import ProjectsNavigationLinks from "components/molecules/projects-navigation-links";
import homeConnectionResponsive from "public/images/homeConnectionResponsive.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
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
        <div className="flex mt-8 justify-between ">
          <Link
            href="https://home-connection-app.herokuapp.com/"
            type="secondary"
            external
          >
            Visit site &#10141;
          </Link>
          <Link
            href="https://github.com/nereapardo/home-connection"
            external
            type="unstyled"
          >
            <FontAwesomeIcon icon={faGithub} className="text-neon text-5xl" />
          </Link>
        </div>
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
      <Project image={homeConnectionResponsive} title="Challenge">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
          doloremque deserunt recusandae, aut aspernatur aliquid repellat quae
          ratione nostrum beatae ea nesciunt, sed nihil, similique impedit.
          Placeat et nulla iure?
        </p>
      </Project>
      <ProjectsNavigationLinks
        previous
        next
        previousProjectPage="money-rain"
        nextProjectPage="home-hopper"
      />
    </div>
  );
};
export default HomeConnection;
