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
    <div className="py-12 overflow-y-auto">
      <Project image={homeConnectionLaptop} title="Home Connection">
        <p className="mb-4">
          Web app developed to make the process of renting a house easier. This
          simple interface allows landlords to post adds in order to find the
          perfect tenant for their properties.
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
            <FontAwesomeIcon
              icon={faGithub}
              className="text-neon text-5xl h-12"
            />
          </Link>
        </div>
      </Project>
      <Technologies
        technologies="Javascript, Handlebars, NodeJS, MongoDB"
        className="mb-32"
      />
      <Project image={map} title="Why?" reverse>
        <p className="mb-4">
          In the last few years I had to move quite often so I am kind of
          familiar with different housing search platforms.
        </p>
        <p className="mb-4">
          On the other hand, I also had experienced the process of posting a
          house for rent and being contacted by possible tenants.
        </p>
        <p>
          That is why I decided to develop a web app where landlords can easily
          post their houses and people can directly contact them without relying
          on the platform as an intermediary.
        </p>
      </Project>
      <Project image={homeConnectionResponsive} title="Challenge">
        <p className="mb-4">
          Nowadays around half of the website traffic is generated by mobile
          devices. Therefore it was really import to develop a user-friendly
          platform available for all devices.
        </p>
        <p>
          My biggest mistake was trying to create a design that met all devices
          needs at once. After failing at this task, I soon realized I should
          had put my efforts into designing different layouts based on different
          devices requirements.
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
