import { useState } from "react";
import { ClassType, SelectedPage } from "../../utils/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.jpg";
import { motion } from "framer-motion";
import HText from "../../utils/HText";
import Project from "./Project";
import "./styles.css";
import GradientText from "../../utils/GradientText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
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
  {
    name: "Food Delivery Website",
    description: "Place to order food online (future project)",
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
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleCardSelect = (index: number) => {
    setSelectedCard(index === selectedCard ? 0 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.1,
      },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 1.5 },
    },
  };

  return (
    <section className="w-full bg-primary-100 py-24" id="projects">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
      >
        <motion.div
          className="mx-auto w-5/6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.5 }}
          variants={{
            hidden: { opacity: 0, x: -250 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>
              Lets take a look at <GradientText text="My Projects" />
            </HText>
          </div>
        </motion.div>
        <div className="flex items-center justify-center">
          {/* larger screens */}
          <motion.div
            className="h-[500px] xl:h-[550px] md:flex hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
          >
            {projects.map((project, index) => (
              <motion.div
                variants={itemVariants}
                key={index}
                className={`relative mx-[10px] shadow-pink overflow-hidden bg-cover rounded-2xl cursor-pointer transition-all duration-[0.8s] cubic-bezier-[.28,-0.03,0,.99] ${
                  selectedCard === index
                    ? "md:w-[700px] lg:w-[900px] xl:w-[1200px]"
                    : "md:w-[70px] lg:w-[90px]"
                }`}
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
                onClick={() => handleCardSelect(index)}
              >
                <div className="image-overlay"></div>
                <div
                  className={`project-info absolute bottom-0 left-0 right-0 p-4 text-white z-10 my-6 ${
                    selectedCard === index ? "" : "hidden"
                  }`}
                >
                  <h4 className="uppercase text-2xl font-bold my-5">
                    {project.name}
                  </h4>
                  <p className="pt-1">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/*smaller screens */}
        <div className=" w-full md:hidden">
          <motion.ul
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
            variants={container}
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
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
