import Image from "next/image";
const Project = ({ children, title, image, reverse = false }) => {
  let flexDirection = "lg:flex-row";
  if (reverse) {
    flexDirection = "lg:flex-row-reverse";
  }
  return (
    <div
      className={`flex flex-col-reverse justify-end ${flexDirection} mb-32 px-4`}
    >
      <div className="py-6 lg:pr-16 flex flex-col justify-center mx-auto w-4/5 lg:w-2/5 lg:px-16">
        <h1 className="text-white text-3xl lg:text-5xl mb-6">{title}</h1>
        <div className="text-stone-300 font-light text-justify text-lg">
          {children}
        </div>
      </div>
      <div className="w-full lg:w-3/5 flex justify-center items-center">
        <div className="rounded-lg overflow-hidden">
          <Image
            src={image}
            alt="section image"
            objectFit="cover"
            className="rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default Project;
