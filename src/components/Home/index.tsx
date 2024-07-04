import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageGraphic from "../../assets/HomePageGraphic.jpg";
import ActionButton from "../../utils/ActionButton";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import { MdLocationOn } from "react-icons/md";
import HText from "../../utils/HText";
import DownloadButton from "../../utils/DownloadButton";
import GradientText from "../../utils/GradientText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function Home({ setSelectedPage }: Props) {
  return (
    <section
      id="home"
      className="gap-16 bg-primary-100 py-10 md:h-full md:pb-0 mb-10"
    >
      {/* image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center flex md:h-5/6 flex-col md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* main header */}
        <div className="z-10 md:mt-32 md:basis-3/5 mt-16 order-2 md:order-1">
          {/* headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              Hi, I&apos;m <GradientText text="Srijan" />{" "}
              <span className="inline-block animate-waving-hand">👋</span>
            </HText>
            <p className="mt-8 text-lg">
              I'm a full stack developer (React.js & Node.js) with a focus on
              creating (and occasionally designing) exceptional digital
              experiences that are fast, accessible, visually appealing, and
              responsive.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.25, duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="flex flex-col gap-2 mt-6">
              <div className="flex gap-2">
                <MdLocationOn size={22} className="animate-jumping-icon" />
                <p>Kolkata, India</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                  </span>
                </div>
                <p>Available for new projects</p>
              </div>
            </div>
          </motion.div>
          {/* actions */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.4, duration: 0.75 }}
            variants={{
              hidden: { opacity: 0, x: -90 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="md:flex hidden">
              <ActionButton setSelectedPage={setSelectedPage}>
                Hire Me!
              </ActionButton>
            </div>

            <div className="flex items-center justify-between md:hidden">
              <DownloadButton />
            </div>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.About)}
              href={`#${SelectedPage.About}`}
            >
              <p>Learn More About Me</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.75 }}
          variants={{
            hidden: { opacity: 0, x: 80 },
            visible: { opacity: 1, x: 0 },
          }}
          className="flex basis-4/5 justify-center md:z-10 md:ml-40 md:mt-10 md:h-[30rem] md:justify-items-end order-1 md:order-2 mt-10"
        >
          <div className="flex items-center justify-center md:order-last md:flex-grow md:justify-end">
            <div className="relative h-[300px] w-[280px] md:h-[360px] md:w-[320px]">
              <img
                src={HomePageGraphic}
                alt="home-page-graphic"
                className="absolute z-10 h-[280px] w-[240px] border-8 border-primary-100 max-md:left-5 md:left-0 md:top-0 md:h-[320px] md:w-[280px]"
                style={{ objectFit: "cover" }}
              />
              <div className="absolute h-[280px] w-[280px] border-8 border-transparent bg-primary-300 max-md:top-5 md:bottom-0 md:right-0 md:h-[320px] md:w-[280px]"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
