import Image from "next/image";
import moneyRain from "public/images/moneyRain.jpg";
import homeConnection from "public/images/homeConnection.jpg";
import homeHopper from "public/images/homeHopper.jpg";

const photos = {
  moneyRain: moneyRain,
  homeConnection: homeConnection,
  homeHopper: homeHopper,
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
