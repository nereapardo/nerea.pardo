const Technologies = ({ technologies, className = "" }) => {
  return (
    <div className={`flex h-16 lg:h-10 ${className}`}>
      <div className="bg-neon w-9/12 min-h-fit lg:w-1/2 lg:min-w-fit pl-9 flex items-center text-md md:text-xl">
        Technologies: {technologies}
      </div>
      <div className="w-16 lg:w-11  overflow-hidden inline-block">
        <div className="h-32 lg:h-16  bg-neon rotate-45 transform origin-top-right"></div>
      </div>
    </div>
  );
};
export default Technologies;
