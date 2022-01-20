import Link from "next/link";

const ProjectCardBtn = ({ page }) => {
  return (
    <Link href={`/${page}`}>
      <a className="text-md text-gray-900 text-opacity-100 text-right block pr-4 font-bold hover:underline">
        View more &#10141;
      </a>
    </Link>
  );
};
export default ProjectCardBtn;
