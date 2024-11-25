import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

type Props = {
	name: string;
	description: string;
	image: string;
	reverse: boolean;
	skills: string[];
	link?: string;
};

const skillVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 230,
			damping: 12,
		},
	},
};

const childVariant = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 230,
			damping: 12,
		},
	},
};

const Project = ({
	name,
	description,
	image,
	reverse,
	skills,
	link,
}: Props) => {
	return (
		<motion.li
			className={`relative flex flex-col md:flex-row items-center bg-primary-200 p-10 rounded-lg shadow-pink w-[85%] mx-auto mb-16 gap-2 ${
				reverse ? "md:flex-row-reverse" : ""
			}`}
			variants={childVariant}
			viewport={{ once: true, amount: 1 }}
		>
			<motion.div
				whileHover={{ scale: 1.05 }}
				className="relative w-full md:w-1/2"
			>
				{link && (
					<a
						href={link}
						target="_blank"
						rel="noopener noreferrer"
						aria-label="my project link"
						className="absolute top-4 right-4 text-2xl text-white z-10"
					>
						<FiExternalLink className="drop-shadow-black" />
					</a>
				)}
				<img
					height="auto"
					width="100%"
					src={image}
					alt={`${name} project`}
					className="rounded-lg w-full"
					loading="lazy"
					title={`${name} project`}
				/>
			</motion.div>
			<div className="w-full md:w-1/2 md:pl-10 mt-6 md:mt-0">
				<h3 className="text-3xl font-bold">{name}</h3>
				<p className="text-lg mt-5">{description}</p>
				<motion.div
					className="flex flex-wrap gap-2 mt-10"
					initial="hidden"
					animate="visible"
					variants={{
						hidden: {},
						visible: { transition: { staggerChildren: 0.1 } },
					}}
					viewport={{ once: false, amount: 1 }}
				>
					{skills.map((skill, index) => (
						<motion.span
							key={index}
							className="px-3 py-1 bg-primary-300 text-black rounded-full md:text-lg shadow-pinksm"
							variants={skillVariants}
							whileHover={{ scale: 1.07 }}
						>
							{skill}
						</motion.span>
					))}
				</motion.div>
			</div>
		</motion.li>
	);
};

export default Project;
