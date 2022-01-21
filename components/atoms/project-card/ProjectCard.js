import { motion } from "framer-motion";

const ProjectCard = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: "all" }}
      className="order-1 bg-white rounded-lg lg:w-5/12 px-6 py-4 grayscale hover:grayscale-0"
    >
      {props.children}
    </motion.div>
  );
};
export default ProjectCard;
