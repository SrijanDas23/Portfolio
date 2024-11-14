import { useForm } from "react-hook-form";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "../../assets/ContactPageGraphic.png";
import HText from "../../utils/HText";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import GradientText from "../../utils/GradientText";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
	const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 outline-none px-5 py-3 placeholder-white shadow-pinkdark`;

	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const onSubmit = async (e: any) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	// Variants for the staggered animation
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: 40 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 230,
				damping: 12,
			},
		},
	};

	return (
		<section id="contact" className="mx-auto w-5/6 pb-32 pt-24">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
			>
				{/* HEADER */}
				<motion.div
					className="md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -80 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<HText>
						<GradientText text="SEND Me" /> An Email!
					</HText>
				</motion.div>

				{/* FORM AND IMAGE */}
				<div className="mt-10 justify-between gap-8 md:flex">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: 100 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<form
							target="_blank"
							onSubmit={onSubmit}
							action="https://formsubmit.co/6491446829158848150e84c549bf6c2d"
							method="POST"
						>
							<input
								className={inputStyles}
								type="text"
								placeholder="NAME"
								{...register("name", {
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className="mt-1 text-primary-500">
									{errors.name.type === "required" &&
										"This field is required."}
									{errors.name.type === "maxLength" &&
										"Max length is 100 char."}
								</p>
							)}

							<input
								className={inputStyles}
								type="text"
								placeholder="EMAIL"
								{...register("email", {
									required: true,
									pattern:
										/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="mt-1 text-primary-500">
									{errors.email.type === "required" &&
										"This field is required."}
									{errors.email.type === "pattern" &&
										"Invalid email address."}
								</p>
							)}

							<textarea
								className={inputStyles}
								placeholder="MESSAGE"
								rows={4}
								cols={50}
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>
							{errors.message && (
								<p className="mt-1 text-primary-500">
									{errors.message.type === "required" &&
										"This field is required."}
									{errors.message.type === "maxLength" &&
										"Max length is 2000 char."}
								</p>
							)}

							<button
								type="submit"
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:shadow-pink hover:text-white hover:bg-primary-500 hover-up"
							>
								SUBMIT
							</button>
						</form>

						<div className="mt-10">
							<strong>You can also contact me through:</strong>
							<motion.div
								className="flex gap-6 flex-row mt-3"
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.5 }}
								variants={containerVariants}
							>
								<motion.a
									href="https://github.com/SrijanDas23"
									target="_blank"
									rel="noopener noreferrer"
									variants={itemVariants}
									whileHover={{ scale: 1.2 }}
									aria-label="github-link"
								>
									<FaGithub style={{ fontSize: "28px" }} />
								</motion.a>
								<motion.a
									href="https://www.facebook.com/profile.php?id=100079036040325"
									target="_blank"
									rel="noopener noreferrer"
									variants={itemVariants}
									whileHover={{ scale: 1.2 }}
									aria-label="facebook-link"
								>
									<FaFacebook style={{ fontSize: "28px" }} />
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/srijan-das-219797227/"
									target="_blank"
									rel="noopener noreferrer"
									variants={itemVariants}
									whileHover={{ scale: 1.2 }}
									aria-label="linkedin-link"
								>
									<FaLinkedin style={{ fontSize: "28px" }} />
								</motion.a>
							</motion.div>
						</div>
					</motion.div>

					<motion.div
						className="relative mt-16 basis-2/5 md:mt-0"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						variants={{
							hidden: { opacity: 0, y: -100 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<div className="w-full">
							<img
								width="auto"
								height="auto"
								className="w-full drop-shadow-black"
								alt="contact-me-page-graphic"
								src={ContactUsPageGraphic}
								loading="lazy"
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</section>
	);
};

export default Contact;
