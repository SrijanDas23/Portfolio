import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClassType } from "../../utils/types";
import { FiExternalLink } from "react-icons/fi";

type Props = {
	projects: Array<ClassType>;
};

const LargerScreens = ({ projects }: Props) => {
	const [selectedCard, setSelectedCard] = useState<number>(0);
	const [hasMounted, setHasMounted] = useState<boolean>(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	const handleCardSelect = (index: number) => {
		if (selectedCard !== index) {
			setSelectedCard(index);
		}
	};

	const containerVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "tween",
				duration: 0.6,
			},
		},
	};

	const expandedCardVariants = {
		expanded: {
			width: "65vw",
			transition: {
				type: "tween",
				duration: 1,
			},
		},
		collapsed: {
			width: "70px",
			transition: {
				type: "tween",
				duration: 1,
			},
		},
	};

	return (
		<motion.div
			className="h-[450px] xl:h-[500px] md:flex hidden"
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			viewport={{ once: true, amount: 0.1 }}
		>
			{projects.map((project, index) => (
				<motion.div
					key={index}
					className="relative mx-[10px] shadow-pink overflow-hidden bg-cover rounded-2xl bg-primary-200"
					onClick={() => handleCardSelect(index)}
					animate={
						hasMounted
							? selectedCard === index
								? "expanded"
								: "collapsed"
							: "collapsed"
					}
					variants={expandedCardVariants}
				>
					{selectedCard === index ? (
						<motion.li
							className="flex flex-col md:flex-row items-center p-10 rounded-lg w-[100%] h-[90%] mx-auto mb-16 gap-2"
							initial="hidden"
							animate="visible"
							variants={itemVariants}
						>
							{/* External Link Icon */}
							{project.link && (
								<motion.a
									href={project.link}
									target="_blank"
									aria-label="my project link"
									rel="noopener noreferrer"
									className="absolute top-4 right-4 text-2xl z-10"
									whileHover={{ scale: 1.1 }}
								>
									<FiExternalLink />
								</motion.a>
							)}
							<motion.div
								whileHover={{ scale: 1.05 }}
								className="w-full md:w-1/2"
							>
								<img
									height="300px"
									width="100%"
									src={project.image}
									alt={`${project.name} project`}
									title={`${project.name} project`}
									className="rounded-lg w-full h-[300px]"
									loading="lazy"
									style={{
										width: "100%",
										height: "300px",
										objectFit: "contain",
									}}
								/>
							</motion.div>
							<div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
								<h3 className="text-3xl font-bold">
									{project.name}
								</h3>
								<p className="text-lg mt-5">
									{project.description}
								</p>
								<motion.div
									className="flex flex-wrap gap-2 mt-10"
									initial="hidden"
									animate="visible"
									variants={{
										hidden: {},
										visible: {
											transition: {
												staggerChildren: 0.1,
											},
										},
									}}
									viewport={{
										once: false,
										amount: 1,
									}}
								>
									{project.skills.map((skill, index) => (
										<motion.span
											key={index}
											className="px-3 py-1 my-1 bg-primary-300 text-black rounded-full md:text-lg hover:shadow-pinkskills cursor-pointer"
											whileHover={{ scale: 1.07 }}
										>
											{skill}
										</motion.span>
									))}
								</motion.div>
							</div>
						</motion.li>
					) : (
						<div className="flex justify-center items-center h-full cursor-pointer">
							<div className="relative w-full h-full rounded-lg overflow-hidden">
								<img
									height="100%"
									width="100%"
									className="w-full h-full object-cover opacity-80"
									src={project.image}
									alt={project.name}
									loading="lazy"
									title={project.name}
									style={{ width: "100%", height: "100%" }}
								/>
								<div className="absolute inset-0 bg-black/70"></div>
							</div>
						</div>
					)}
				</motion.div>
			))}
		</motion.div>
	);
};

export default LargerScreens;
