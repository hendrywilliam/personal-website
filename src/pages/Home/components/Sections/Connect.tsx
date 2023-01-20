import { Container } from "../Elements";
import { motion } from "framer-motion";
import { MainCard } from "../Elements";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "../Elements";
import { FaSpotify, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export const Connect = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        transition: {
          duration: 1,
        },
        opacity: 1,
        y: 0,
      });
    }

    if (!inView) {
      animation.start({ opacity: 0, y: -100 });
    }
  }, [inView]);

  return (
    <>
      <Container
        styles="min-h-screen h-screen w-full flex flex-col items-center justify-center"
        id="connect-section"
      >
        <motion.div ref={ref} className="w-1/4 h-max">
          <motion.p className="text-6xl font-extrabold" animate={animation}>
            Lets connect!
          </motion.p>
          <div className="flex flex-row gap-3 mt-5 h-max">
            <MainCard title="Github" />
            <div className="basis-1/2 h-64 grid grid-rows-2 grid-flow-col gap-2">
              <Card
                title="Spotify"
                uri="https://open.spotify.com/user/greendayaddicted"
              >
                <FaSpotify size={25} />
              </Card>
              <Card
                title="Instagram"
                uri="https://www.instagram.com/yrdnehwilliamms/"
              >
                <FaInstagramSquare size={25} />
              </Card>
              <Card title="Email" uri="mailto:hendriwilliam29@gmail.com">
                <MdEmail size={25} />
              </Card>
              <Card
                title="Linkedin"
                uri="https://www.linkedin.com/in/hendri-william-tinambunan-4192431b5/"
              >
                <FaLinkedin size={25} />
              </Card>
            </div>
          </div>
        </motion.div>
      </Container>
    </>
  );
};
