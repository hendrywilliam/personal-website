import { motion, useScroll } from "framer-motion";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 w-full h-[70px] bg-black z-10">
      <div className="h-full w-full p-5 pt-6 flex ">
        <p className="flex-auto w-3/4 font-extrabold tracking-wide">
          🗲 HENDRI WILLIAM
        </p>
        <ul className="flex flex-row flex-auto w-1/4 justify-evenly text-center">
          <li>
            <a href="#about" className="font-extrabold rounded-xl w-4">
              About
            </a>
          </li>
          <li>
            <a href="" className="font-extrabold rounded-xl w-4">
              Projects
            </a>
          </li>
          <li>
            <a href="" className="font-extrabold rounded-xl w-4">
              Guestbook
            </a>
          </li>
          <li>
            <a href="" className="font-extrabold rounded-xl w-4">
              Connect
            </a>
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
