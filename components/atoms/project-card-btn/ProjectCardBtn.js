import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

const ProjectCardBtn = ({ page }) => {
  return (
    <Link href={`/${page}`}>
      <a className="text-md text-gray-900 text-opacity-100 text-right inline-flex justify-end  items-center w-full pr-4 font-bold hover:underline">
        View more
        <span>
          <FontAwesomeIcon
            icon={faLongArrowAltRight}
            className="text-md w-4 h-4 inline-flex items-center ml-2"
          ></FontAwesomeIcon>
        </span>
      </a>
    </Link>
  );
};
export default ProjectCardBtn;
