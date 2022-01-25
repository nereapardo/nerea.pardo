import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const ProjectsNavigationLinks = ({
  previousProjectPage,
  nextProjectPage,
  previous = false,
  next = false,
}) => {
  return (
    <div className="flex justify-center text-sm md:text-lg">
      <div className="w-1/2 flex justify-center">
        {previous && (
          <Link href={`/${previousProjectPage}`}>
            <a className="text-neon inline-flex justify-center items-center space-x-2">
              <span>
                <FontAwesomeIcon
                  icon={faChevronLeft}
                  className="text-sm w-4 h-4"
                ></FontAwesomeIcon>
              </span>
              Previous project
            </a>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-center">
        {next && (
          <Link href={`/${nextProjectPage}`}>
            <a className="text-neon inline-flex justify-center items-center space-x-2">
              Next project
              <span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-sm w-4 h-4"
                ></FontAwesomeIcon>
              </span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ProjectsNavigationLinks;
