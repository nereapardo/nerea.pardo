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
    <div className="py-12 overflow-y-auto">
      <Project image={moneyRainLaptop} title="Money Rain">
        <p className="mb-4">
          Simple game with a recognizable character where your reflexes are
          tested. The player&apos;s mission is to collect as many bills as
          possible. But you must be cautious, because collecting 3 bills of 500€
          in a row will make you automatically lose for being too greedy.
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
            <FontAwesomeIcon
              icon={faGithub}
              className="text-neon text-5xl h-12"
            />
          </Link>
        </div>
      </Project>
      <Technologies
        technologies="Javascript, HTML, CSS, DOM"
        className="mb-32"
      />
      <Project image={moneyRainGif} title="Why?" reverse>
        <p className="mb-4">
          This was my first project, and at that point, I only had learned HTML,
          CSS and Javascript, so my knowledge and possibilities were limited.
        </p>
        <p className="mb-4">
          Inspired by a classic game I loved playing as a child (whac-a-mole), I
          decided to to take this challenge as an opportunity to practice with
          DOM manipulation.
        </p>
      </Project>
      <Project image={moneyRainHand} title="Challenges">
        <p className="mb-4">
          The biggest challenges were managing the score and levels without
          having learned about asynchronous programming yet.
        </p>
        <p>
          After finding out one of my problems were related to event listeners,
          I finally solved the scoring system and came up with a different
          approach to increase game levels when the player had won.
        </p>
      </Project>
      <ProjectsNavigationLinks next nextProjectPage="home-connection" />
    </div>
  );
};
export default MoneyRain;
