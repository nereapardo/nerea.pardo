import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "components/atoms/link";
const Footer = () => {
  return (
    <div className="bg-stone-800 text-neon border-t-2 border-neon ">
      <div className="mx-auto max-w-7xl w-full flex justify-between">
        <div className="space-x-3">
          <span>Nerea Pardo Cundins</span>
          <span>|</span>
          <span>2022</span>
        </div>
        <div className="inline-flex items-center space-x-3">
          <Link href="https://github.com/nereapardo" external type="unstyled">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-neon text-base w-4"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nereapardo/"
            external
            type="unstyled"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-neon text-base w-4"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
