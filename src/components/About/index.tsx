import AboutPageGraphic from "../../assets/AboutPageGraphic.jpg";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import HText from "../../utils/HText";
import GradientText from "../../utils/GradientText";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

function About({ setSelectedPage }: Props) {
	return (
		<section id="about" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.About)}
			>
				{/* Header */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -105 },
						visible: { opacity: 1, x: 0 },
					}}
					className="md:my-5 md:w-3/5"
				>
					<HText>
						Let's learn more <GradientText text="about" /> me!
					</HText>
				</motion.div>

				{/* Image and description */}
				<div className="mt-5 items-center justify-between gap-20 md:mt-2 md:flex">
					{/* Image */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.2, duration: 0.75 }}
						variants={{
							hidden: { opacity: 0, x: -95 },
							visible: { opacity: 1, x: 0 },
						}}
						className="flex basis-4/5 justify-center md:z-10 md:mr-auto md:mt-10 md:h-[30rem] md:justify-items-end"
					>
						<div className="flex w-full flex-col justify-between gap-12 md:flex-row">
							<div className="flex justify-center md:order-first md:justify-end">
								<div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
									<img
										height="360px"
										width="320px"
										src={AboutPageGraphic}
										alt="AboutPageGraphic"
										title="AboutPageGraphic"
										loading="eager"
										className="absolute z-10 border-8 border-white max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
										style={{ objectFit: "cover", height:"360px", width:"280px" }}
									/>
									<div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-primary-100 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Description */}
					<div>
						{/* title */}
						<div className="relative">
							<div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.5 }}
									variants={{
										hidden: { opacity: 0, x: 105 },
										visible: { opacity: 1, x: 0 },
									}}
								>
									<p className="my-8">
										Hi, I'm <strong>Srijan Das</strong> 👋.
										I'm a 20-year-old aspiring full-stack
										developer, born on January 23, 2004. My
										educational journey began at Holy Child
										School, where I studied from
										kindergarten through 12th grade. During
										my school years, I achieved 88.8% in my
										10th grade exams and 90% in my 12th
										grade exams.
									</p>
									<p className="my-2">
										Currently, I'm pursuing a Bachelor's
										degree in Information Technology at
										Netaji Subhash Engineering College and a
										CGPA of 8.41/10 (till 6th sem) and will
										graduate in 2025
									</p>
									<p className="mt-8">
										My technical skill set includes:
									</p>
									<ul>
										<li className="my-2">
											<strong>Languages</strong>: C, C++,
											JavaScript, Typescript
										</li>
										<li className="my-2">
											<strong>
												Frameworks and Libraries
											</strong>
											: HTML, CSS, Tailwind CSS, ReactJS,
											Express, NodeJS, Mongoose, Firebase,
											UI libraries (Material UI, Shadcn
											UI, Chakra UI)
										</li>
										<li className="my-2">
											<strong>Databases</strong>: MongoDB,
											SQL
										</li>
										<li className="my-2">
											<strong>Dev Tools</strong>: GitHub,
											GitHub Desktop, Visual Studio Code
										</li>
									</ul>
								</motion.div>
							</div>
						</div>

						{/* button */}
						<div className="relative mt-8">
							<div className="before:absolute before:-bottom-40 before:right-40 before:z-[-1] before:content-sparkles">
								<p>
									I am passionate about creating exceptional
									digital experiences that are fast,
									accessible, visually appealing, and
									responsive. I am available for new projects
									and am eager to collaborate and bring
									innovative ideas to life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</section>
	);
}

export default About;
