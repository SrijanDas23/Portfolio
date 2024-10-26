import { IoLogoJavascript } from "react-icons/io5";
import { SiFirebase, SiMongodb, SiTypescript } from "react-icons/si";
import { PiFileCpp } from "react-icons/pi";
import { DiNodejs } from "react-icons/di";
import { FaCss3Alt, FaGithub, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";

const icons = [
	IoLogoJavascript,
	SiTypescript,
	SiMongodb,
	PiFileCpp,
	DiNodejs,
	FaReact,
	FaGithub,
	FaHtml5,
	FaCss3Alt,
	RiTailwindCssFill,
	BsFiletypeSql,
	SiFirebase,
];

function LogoCarousel() {
	return (
		<div className="overflow-hidden py-10 mt-4 md:mx-[10rem] relative mx-10">
			<div className="flex animate-slide whitespace-nowrap w-max gap-10 hover:pause-animation">
				{Array.from({ length: 15 }).map((_, index) =>
					icons.map((IconComponent, idx) => (
						<IconComponent
							key={`${index}-${idx}`}
							size={70}
							className="transition-transform duration-300 ease-in-out hover:scale-125"
						/>
					))
				)}
			</div>
		</div>
	);
}

export default LogoCarousel;