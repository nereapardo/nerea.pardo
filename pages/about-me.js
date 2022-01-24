import Image from "next/image";
import aboutMe from "public/images/aboutMe.jpeg";
const AboutMe = () => {
  return (
    <div className="bg-stone-900">
      <div className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row py-6 h-full justify-end lg:justify-center">
        <div className="lg:w-1/2 text-white flex flex-col justify-center text-justify px-6">
          <h1 className="text-neon text-2xl mb-4">About me</h1>
          <p className="mb-4">
            I&apos;m Nerea, a Junior Full-Stack Web Developer. I have a degree
            in Biology and a Master&apos;s degree in Microbiology and even
            though biology will always have a spot in my heart, in my last job I
            discovered my true passion: Web Development.
          </p>
          <p className="mb-4">
            Last year I decided to dive into the code world and enroll myself in
            an intensive remote Web Development Bootcamp at Ironhack. In this
            bootcamp I acquired great knowledge and became familiar with
            technologies such as HTML, CSS, Bootstrap, Tailwind, JavaScript,
            ReactJS, NextJs, NodeJS, ExpressJS, MongoDB, and Mongoose, among
            others.
          </p>
          <p>
            Nowadays, my passion for development has grown even bigger and I
            continue to learn more day by day. I am currently working on new
            projects, at the same time that I am expanding my knowledge.
          </p>
        </div>
        <div className="lg:w-1/3 flex items-center justify-center ">
          <div className="h-80 w-80 relative mb-6 md:mb-0">
            <Image
              src={aboutMe}
              alt="Photo about me"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
