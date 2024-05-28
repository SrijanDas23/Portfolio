import { ClassType, SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import HText from "../../utils/HText";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import Project from "./Project";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.4 },
  },
};

const projects: Array<ClassType> = [
  {
    name: "Real Estate Website",
    description: "Place to find and list real estate properties for sale/rent",
    image: image1,
    skills: [
      "Chakra UI",
      "ReactJS 18",
      "MongoDB",
      "Firebase",
      "Redux Toolkit",
      "JavaScript",
      "Express.js",
    ],
  },
  {
    name: "E-commerce Website",
    description: "Place to buy and sell stuff (future project)",
    image: image2,
    skills: [
      "Chakra UI",
      "ReactJS 18",
      "MongoDB",
      "Firebase",
      "Redux Toolkit",
      "JavaScript",
      "Express.js",
    ],
  },
];

const Projects = ({ setSelectedPage }: Props) => {
  return (
    <section className="w-full bg-primary-100 py-40" id="projects">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -75 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>My Projects</HText>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.15, duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: -65 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mt-10 w-full"
        >
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            variants={container}
            className="space-y-16"
          >
            {projects.map((item: ClassType, index) => (
              <Project
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                skills={item.skills}
                reverse={index % 2 !== 0}
              />
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
