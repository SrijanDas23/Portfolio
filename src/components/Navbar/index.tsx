import { useState } from "react";
import Link from "./Link";
import { SelectedPage } from "../../utils/types";
import { motion } from "framer-motion";
import {
  createLinkVariants,
  endVariants,
  midVariants,
  topVariants,
} from "../../utils/framer-variants";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  // isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  // const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const links = [
    { page: "Home", key: "home" },
    { page: "About", key: "about" },
    { page: "Projects", key: "projects" },
    { page: "Contact", key: "contact" },
  ];
  const header = "Home";
  const headerPage = header.toLowerCase().replace(/ /g, "") as SelectedPage;

  return (
    <nav className={`${flexBetween} fixed top-0 w-full py-6 z-50`}>
      <div className={`${flexBetween} mx-auto w-5/6`}>
        <div className={`${flexBetween} w-full gap-16`}>
          {/* LEFT SIDE */}
          <AnchorLink
            className="text-2xl font-bold"
            href="#home"
            onClick={() => {
              setSelectedPage(headerPage);
            }}
          >
            SrijanDas
          </AnchorLink>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex md:items-center md:justify-between w-full">
            <div className={`${flexBetween} gap-8 text-lg`}>
              {links.map((link, index) => (
                <Link
                  key={index}
                  page={link.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              ))}
            </div>
            <div className={`${flexBetween} gap-8`}>
              <a href="./SrijanDas_resume.pdf" download="SrijanDas_resumee.pdf">
                <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                  Download CV
                </button>
              </a>
            </div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <div className="md:hidden flex items-center">
            <button
              className="w-10 h-8 flex flex-col justify-between z-50 relative"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <motion.div
                variants={topVariants}
                animate={isMenuToggled ? "opened" : "closed"}
                className="w-10 h-1 bg-gray-500 rounded origin-left"
              ></motion.div>
              <motion.div
                variants={midVariants}
                animate={isMenuToggled ? "opened" : "closed"}
                className="w-10 h-1 bg-gray-500 rounded"
              ></motion.div>
              <motion.div
                variants={endVariants}
                animate={isMenuToggled ? "opened" : "closed"}
                className="w-10 h-1 bg-gray-500 rounded origin-left"
              ></motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-full bg-primary-100 drop-shadow-xl">
          {/* MENU ITEMS */}
          <motion.div
            className="flex flex-col justify-center gap-10 text-2xl items-center top-0 left-0 w-screen h-screen"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2 }}
          >
            {links.map((link, index) => (
              <motion.div key={index} variants={createLinkVariants(index)}>
                <Link
                  page={link.page}
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  onClick={() => setIsMenuToggled(false)} // Close the menu when a link is clicked
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
