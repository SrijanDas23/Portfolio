import { motion } from "framer-motion";

type Props = {
  name: string;
  description: string;
  image: string;
  reverse: boolean;
  skills: string[];
};
const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ name, description, image, reverse, skills }: Props) => {
  return (
    <motion.li
      className={`flex flex-col md:flex-row items-center bg-primary-200 p-10 rounded-lg shadow-lg w-[85%] mx-auto mb-16 gap-2 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      // whileHover={{ scale: 1.05 }}
      variants={childVariant}
    >
      <motion.div whileHover={{ scale: 1.05 }} className="w-full md:w-1/2">
        <img
          src={image}
          alt={`${name} project`}
          className="rounded-lg w-full"
        />
      </motion.div>
      <div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
        <h3 className="text-3xl font-bold">{name}</h3>
        <p className="text-lg mt-5">{description}</p>
        <div className="flex flex-wrap gap-2 mt-10">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-primary-300 text-black rounded-full md:text-lg"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.li>
  );
};

export default Project;
