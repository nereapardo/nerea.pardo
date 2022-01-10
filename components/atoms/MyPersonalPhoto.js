import Image from "next/image";
import me from "./../../public/images/me.jpg";
const MyPersonalPhoto = () => {
  return (
    <div>
      <Image src={me} alt="Nerea Pardo Cundíns" />
    </div>
  );
};
export default MyPersonalPhoto;
