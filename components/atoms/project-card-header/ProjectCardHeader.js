import Image from "next/image";
import moneyRain from "/public/images/moneyRain";
import HomeConnection from "/public/images/homeConnection";
import HomeHopper from "/public/images/homeHopper";

const photos = {
  moneyRain: moneyRain,
  homeConnection: homeConnection,
  homeHopper: HomeHopper,
};
const ProjectCardHeader = ({ project }) => {
  return (
    <div className="h-32 relative">
      <Image
        src={photos[project]}
        alt={project}
        layout="fill"
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
};
export default ProjectCardHeader;
