import Project from "components/sections/project/Project";
import Technologies from "components/atoms/technologies/";
import Link from "components/atoms/link";
import Image from "next/image";
import moneyRainLaptop from "public/images/moneyRainLaptop.jpg";
import moneyRainGif from "public/images/moneyRainGif.gif";
import moneyRainHand from "public/images/moneyRainHand.png";
import ProjectsNavigationLinks from "components/molecules/projects-navigation-links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const MoneyRain = () => {
  return (
    <div className="bg-stone-900 py-12">
      <Project image={moneyRainLaptop} title="Money Rain">
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
          <Link
            href="https://nereapardo.github.io/money-rain-game/"
            type="secondary"
            external
          >
            Visit site &#10141;
          </Link>
          <Link
            href="https://github.com/nereapardo/money-rain-game"
            external
            type="unstyled"
          >
            <FontAwesomeIcon icon={faGithub} className="text-neon text-5xl" />
          </Link>
        </div>
      </Project>
      <Technologies technologies="CSS, HTML, JS, DOM" className="mb-32" />
      <Project image={moneyRainGif} title="Why?" reverse>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>lorem</p>
      </Project>
      <Project image={moneyRainHand} title="How?">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
          deleniti repellendus odit dignissimos voluptate illo non alias,
          exercitationem qui ipsam similique sint aspernatur modi consectetur
          itaque doloribus architecto, doloremque accusamus.
        </p>
        <p>lorem</p>
      </Project>
      <ProjectsNavigationLinks next nextProjectPage="home-connection" />
    </div>
  );
};
export default MoneyRain;
