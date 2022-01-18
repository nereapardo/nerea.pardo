import ProjectCard from "components/atoms/project-card/ProjectCard";
import ProjectCardDescription from "components/atoms/project-card-description/ProjectCardDescription";
import ProjectCardHeader from "components/atoms/project-card-header";
import ProjectCardBtn from "components/atoms/project-card-btn/ProjectCardBtn";

const ProjectTimeline = () => {
  let moneyRain, homeConnection, homeHopper;
  return (
    <div className="container mx-auto w-full h-full m-12 px-12 ">
      <div className="relative wrap overflow-hidden h-full p-2 ">
        <div
          className="invisible lg:visible border-2-2 absolute border-opacity-20 border-neon h-full border"
          style={{ left: "50%" }}
        ></div>
        {/* right timeline */}
        <div className="mb-8 flex justify-between items-center w-full right-timeline">
          <div className="order-1 lg:w-5/12"></div>
          <div className="hidden lg:flex z-20 items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
          <ProjectCard>
            <ProjectCardHeader project={"homeHopper"} />
            <ProjectCardDescription>
              3rd project of Ironhack&apos;s bootcamp - Improved version of
              previous project where landlords can post their rooms for rent and
              people can save the ones they are interested in.
            </ProjectCardDescription>
            <ProjectCardBtn page={"home-hopper"} />
          </ProjectCard>
        </div>

        {/*  left timeline */}
        <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
          <div className="order-1 lg:w-5/12"></div>
          <div className="hidden lg:flex z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
          <ProjectCard>
            <ProjectCardHeader project={"homeConnection"} />
            <ProjectCardDescription>
              2nd project of Ironhack&apos;s bootcamp - Platform where landlords
              can post their houses for rent so people can contact them.
            </ProjectCardDescription>
            <ProjectCardBtn page={"home-connection"} />
          </ProjectCard>
        </div>

        {/* right timeline */}
        <div className="flex justify-between items-center w-full right-timeline">
          <div className="order-1 lg:w-5/12"></div>
          <div className="hidden lg:flex z-20 flex items-center order-1 bg-neon shadow-xl w-8 h-8 rounded-full"></div>
          <ProjectCard>
            <ProjectCardHeader project={"moneyRain"} />
            <ProjectCardDescription>
              1st project of Ironhack&apos;s bootcamp - Computer game based on
              the well-known whac-a-mole game but with a twist.
            </ProjectCardDescription>
            <ProjectCardBtn page={"money-rain"} />
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};
export default ProjectTimeline;
