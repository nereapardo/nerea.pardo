const ProjectCardDescription = (props) => {
  return (
    <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100 my-4 text-justify">
      {props.children}
    </p>
  );
};
export default ProjectCardDescription;
