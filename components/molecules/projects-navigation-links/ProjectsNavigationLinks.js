import Link from "next/link";

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
            <a className="text-neon text-center">&#11160; Previous project</a>
          </Link>
        )}
      </div>
      <div className="w-1/2 flex justify-center">
        {next && (
          <Link href={`/${nextProjectPage}`}>
            <a className="text-neon">Next project &#11162;</a>
          </Link>
        )}
      </div>
    </div>
  );
};
export default ProjectsNavigationLinks;
