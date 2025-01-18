import { useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiMongodb, SiTypescript } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";

const icons = [
	{ component: IoLogoJavascript, label: "JavaScript" },
	{ component: SiTypescript, label: "TypeScript" },
	{ component: SiMongodb, label: "MongoDB" },
	{ component: PiFileCpp, label: "C++" },
	{ component: DiNodejs, label: "Node.js" },
	{ component: FaReact, label: "React.js" },
	{ component: FaGithub, label: "GitHub" },
	{ component: FaHtml5, label: "HTML5" },
	{ component: FaCss3Alt, label: "CSS3" },
	{ component: RiTailwindCssFill, label: "Tailwind CSS" },
	{ component: BsFiletypeSql, label: "SQL" },
	{ component: SiFirebase, label: "Firebase" },
];

function LogoCarousel() {
	const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

	return (
		<div className="overflow-hidden py-10 mt-4 md:mx-[10rem] relative mx-10">
			<div className="flex animate-slide whitespace-nowrap w-max gap-10 hover:pause-animation">
				{Array.from({ length: 15 }).map((_, index) =>
					icons.map(({ component: IconComponent, label }, idx) => (
						<div
							key={`${index}-${idx}`}
							className="relative flex justify-center items-center"
							onMouseEnter={() => setHoveredSkill(label)}
							onMouseLeave={() => setHoveredSkill(null)}
						>
							<IconComponent
								size={70}
								className="transition-transform duration-300 ease-in-out hover:scale-125"
							/>
							{hoveredSkill === label && (
								<p
									className="absolute bottom-[5.2rem] left-1/2 transform -translate-x-1/2 text-sm px-2 py-1 rounded-lg"
									style={{
										zIndex: 10,
										backgroundColor: "rgb(255,204,201,0.8)",
									}}
								>
									{label}
								</p>
							)}
						</div>
					))
				)}
			</div>
		</div>
	);
}

export default LogoCarousel;
