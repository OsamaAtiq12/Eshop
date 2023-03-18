import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Container from "react-bootstrap/Container";
const { heroContent, heroWrapper, imageWrapper } = styles;
import { Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Typewriter from "typewriter-effect";
import { useRef } from "react";
import { Icon } from "@iconify/react";
import AboutSection from "./AboutSection";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const HeroSection = ({ direction }) => {
  const targetRef = useRef(null);
  const [ref, inView] = useInView();
  const variants = {
    hidden: {
      opacity: 0,
      x: "-50px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  
  const handleButtonClick = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className={styles.slogan}>
        <h1
          className="text-white position-relative text-center mb-5"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              typeSpeed: 1000,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("EXPERIENCE THE POWER OF SEAMLESS  TECHNOLOGY")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(100)
                .deleteAll()
                .callFunction(() => {
                  console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </h1>
      </div>
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center", height: "200px" }}
      >
        <Button
          onClick={handleButtonClick}
          size="sm"
          variant="dark"
          className={styles.mybtn1}
        >
          <Icon icon="ic:baseline-keyboard-double-arrow-down" fontSize={50} />
        </Button>
      </div>

      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <Container className={styles.navspace} ref={targetRef}>
          <div className={styles.banner} >
            <div className="d-flex align-items-center">
              <h1
                className="text-white"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700,
                  marginLeft:10
                }}
              >
                Better Solutions For Your <br /> Business
                <p className={styles.para}  style={{ fontSize: 24, marginTop: 20, fontWeight: 200 }}>
                  We help enterprises through <br /> custom business solutions
                  and provide IT <br />
                  outsourcing services to companies <br /> with agility,
                  quality, and commitment.
                </p>
                <Button size="sm" variant="dark" className={styles.mybtn2}>
                  Get a new business solution
                </Button>
              </h1>
            </div>

            <div>
              <Image
                className={styles.levitate}
                src="/hero-img.png"
                alt="My Image"
                width={400}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </Container>
      </motion.div>

     
    </>
  );
};

export default HeroSection;
