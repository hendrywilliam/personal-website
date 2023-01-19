import { motion, useScroll } from "framer-motion";

export const Navbar = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div>
        <p>Iloveyou</p>
      </div>
      <motion.div style={{ scaleX: scrollYProgress }} />
    </>
  );
};
