import { ClassType, SelectedPage } from "../../utils/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.jpg";
import { motion } from "framer-motion";
import HText from "../../utils/HText";
import Project from "./Project";
import "./styles.css";
import GradientText from "../../utils/GradientText";
import LargerScreens from "./LargerScreens";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const projects: Array<ClassType> = [
	{
		name: "Real Estate Website",
		description:
			"Place to find and list real estate properties for sale/rent",
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
		link: "https://real-estate-2-fak2.onrender.com/",
	},
	{
		name: "Chat App",
		description: "Place to add and talk to your friends in realtime.",
		image: image2,
		skills: [
			"ReactJS 18",
			"Firebase",
			"Firestore",
			"Redux Toolkit",
			"Vanilla CSS"
		],
		link: "https://chatt-app23.netlify.app/",
	},
	{
		name: "Food Delivery Website",
		description: "Place to order food online (future project)",
		image: image3,
		skills: [
			"Shadcn/ui",
			"ReactJS 18",
			"Supabase",
			"Redux Toolkit",
			"TypeScript",
			"SpringBoot",
			"Java",
		],
		link: "https://github.com/SrijanDas23/Food-Delivery",
	},
];

const Projects = ({ setSelectedPage }: Props) => {
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
							Lets take a look at{" "}
							<GradientText text="My Projects" />
						</HText>
					</div>
				</motion.div>
				<motion.div
					className="flex items-center justify-center"
					viewport={{ amount: 0.1 }}
					transition={{ duration: 1.5 }}
					variants={{
						hidden: { opacity: 0, x: -250 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					{/* larger screens */}
					<LargerScreens projects={projects} />
				</motion.div>

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
								link={item.link}
							/>
						))}
					</motion.ul>
				</div>
			</motion.div>
		</section>
  );
};

export default Projects;
