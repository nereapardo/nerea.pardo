import Image from "next/image";
const Project = ({ children, title, image, reverse = false }) => {
  let flexDirection = "lg:flex-row";
  if (reverse) {
    flexDirection = "lg:flex-row-reverse";
  }
  return (
    <div className={`flex flex-col-reverse justify-end ${flexDirection} mb-32`}>
      <div className="py-6 lg:pr-16 flex flex-col justify-center mx-auto w-4/5 lg:w-2/5 lg:px-16">
        <h1 className="text-white text-3xl lg:text-5xl text-center lg:text-left mb-6">
          {title}
        </h1>
        <div className="text-stone-400 font-light text-justify">{children}</div>
      </div>
      <div className="w-full lg:w-3/5 flex justify-center">
        <Image src={image} alt="section image" objectFit="contain" />
      </div>
    </div>
  );
};
export default Project;
