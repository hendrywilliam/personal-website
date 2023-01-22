import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <div className="fixed top-0 w-screen h-max xl:h-[70px] bg-black z-10">
      <div className="h-full w-full p-5 pt-6 flex flex-col xl:flex-row">
        <div className="flex flex-row w-full">
          <p className="w-full text-xl xl:text-base font-extrabold tracking-wide">
            🗲 HENDRI WILLIAM
          </p>
          <button
            className="flex xl:hidden justify-end w-max"
            onClick={() => {
              setExpand(!expand);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="flex h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            expand ? "inline" : "hidden"
          } xl:flex flex-col xl:flex-row flex-auto w-full lg:w-1/4 lg:justify-evenly xl:text-center gap-3 mt-2`}
        >
          <li className="font-extrabold rounded-xl">
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li className="font-extrabold rounded-xl ">
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li className="font-extrabold rounded-xl">
            <HashLink smooth to="/#connect">
              Connect
            </HashLink>
          </li>
          <li className={"font-extrabold rounded-xl"}>
            <Link to={"/guestbook"}>Guestbook</Link>
          </li>
        </ul>
      </div>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress, background: "#fff", height: 3 }}
      />
    </div>
  );
};
