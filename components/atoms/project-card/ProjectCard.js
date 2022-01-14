const ProjectCard = (props) => {
  return (
    <div className="order-1 bg-white rounded-lg lg:w-5/12 px-6 py-4 grayscale hover:grayscale-0">
      {props.children}
    </div>
  );
};
export default ProjectCard;
