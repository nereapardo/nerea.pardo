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
        <p className="mb-4">
          MERN Web App. Based on a previous project I developed, this website is
          focused both on the needs of landlords and tenants.
        </p>
        <p>
          Landlords in more than +2000 cities of Spain can post their available
          rooms so people can contact them.
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
            <FontAwesomeIcon icon={faGithub} className="text-neon text-5xl" />
          </Link>
        </div>
      </Project>
      <Technologies
        technologies="Javascript, ReactJS, NodeJS, MongoDB, Mongoose, Express, Tailwind"
        className="mb-32"
      />
      <Project image={homeHopperCollaboration} title="Why?" reverse>
        <p>
          This project was a collaboration with one of my colleagues at
          Ironhack. We both shared bad experiences trying to find new a house
          when we were only planning to stay in that places for only few months.
          That&apos;s why we decided to start from my previous project in order
          to adapt and improve it and after defining which features we wanted to
          add we dived into work.
        </p>
      </Project>
      <Project image={homeHopperFilter} title="Challenges">
        <p className="mb-4">
          Since this was our first project in collaboration, we decided to
          organize our work based on the SCRUM methodology. We started
          developing our MVP to which we would add more desired features later.
        </p>
        <p className="mb-4">
          One of the added and most challenging feature was searching filters.
          At the end, not only we improve the autocompleted location filter from
          the last version but added new price range and room type filters to
          our searchbar.
        </p>
        <p className="mb-4">
          Since this idea wasn&apos;t new for me, I also had to adapt and find
          new ways to develop this platform since we were now using new
          technologies such as React and Tailwind. I personally think this
          helped me to understand better how to refactor existing code and
          translate it to other programming languages.
        </p>
      </Project>
      <ProjectsNavigationLinks previous previousProjectPage="home-connection" />
    </div>
  );
};
export default HomeHopper;
