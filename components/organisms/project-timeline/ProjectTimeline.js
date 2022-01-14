import ProjectCard from "components/atoms/project-card/ProjectCard";
import ProjectCardDescription from "components/atoms/project-card-description/ProjectCardDescription";
import ProjectCardHeader from "components/atoms/project-card-header";
import ProjectCardBtn from "components/atoms/project-card-btn/ProjectCardBtn";

const ProjectTimeline = () => {
  let moneyRain, homeConnection, homeHopper;
  return (
    <div className="container mx-auto w-full h-full m-12 px-12">
      <div className="relative wrap overflow-hidden h-full p-2">
        <div
          className="border-2-2 absolute border-opacity-20 border-neon h-full border"
          style={{ left: "50%" }}
        ></div>
        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
          <ProjectCard>
            <ProjectCardHeader project={"homeHopper"} />
            <ProjectCardDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </ProjectCardDescription>
            <ProjectCardBtn page={"home-hopper"} />
          </ProjectCard>
        </div>

        {/*  left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
          <ProjectCard>
            <ProjectCardHeader project={"homeConnection"} />
            <ProjectCardDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </ProjectCardDescription>
            <ProjectCardBtn page={"home-connection"} />
          </ProjectCard>
        </div>

        {/* right timeline */}
        <div className="flex justify-between items-center w-full right-timeline">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
          <ProjectCard>
            <ProjectCardHeader project={"moneyRain"} />
            <ProjectCardDescription>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </ProjectCardDescription>
            <ProjectCardBtn page={"money-rain"} />
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};
export default ProjectTimeline;
