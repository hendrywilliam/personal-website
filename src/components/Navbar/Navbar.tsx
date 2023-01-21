import { motion, useScroll } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 w-full h-[70px] bg-black z-10">
      <div className="h-full w-full p-5 pt-6 flex ">
        <p className="flex-auto w-3/4 font-extrabold tracking-wide">
          🗲 HENDRI WILLIAM
        </p>
        <ul className="flex flex-row flex-auto w-1/4 justify-evenly text-center">
          <li className="font-extrabold rounded-xl w-max">
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li className="font-extrabold rounded-xl w-max">
            <HashLink smooth to="/#projects">
              Projects
            </HashLink>
          </li>
          <li>
            <Link to={"/guestbook"} className={"font-extrabold rounded-xl w-4"}>
              Guestbook
            </Link>
          </li>
          <li className="font-extrabold rounded-xl w-max">
            <HashLink smooth to="/#connect">
              Connect
            </HashLink>
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
