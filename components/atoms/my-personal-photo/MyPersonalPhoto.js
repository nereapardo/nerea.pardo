import Image from "next/image";
import me from "public/images/me.jpg";

const MyPersonalPhoto = () => {
  return (
    <div className="border-8 border-double border-neon rounded-full w-fit h-fit">
      <div className="h-64 w-64 relative rounded-full">
        <Image
          src={me}
          alt="Photo about me"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  );
};
export default MyPersonalPhoto;
