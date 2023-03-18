import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Container from "react-bootstrap/Container";
const { heroContent, heroWrapper, imageWrapper } = styles;

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Vision() {
  const [ref, inView] = useInView();
  const variants = {
    hidden: {
      opacity: 0,
      x: "50px",
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
  return (
    <Container className="position-relative m-0 pb-5 pt-5">
      <h2
        className="text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
        }}
      >
        Our Vision
      </h2>

      <div
        className="text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 100,
        }}
      >
        <p>
          Our vision is to revolutionize the world of technology by creating
          innovative software solutions that simplify complex processes, empower
          individuals and businesses, and enhance the quality of life for people
          worldwide. We strive to be the leading provider of cutting-edge
          software products and services, leveraging the latest technologies and
          trends to deliver exceptional value to our customers. We envision a
          world where technology is intuitive, accessible, and empowering, and
          we are committed to driving this transformation through our unwavering
          focus on innovation, excellence, and customer satisfaction. Our
          ultimate goal is to inspire positive change and make a lasting impact
          on the world through our technology.
        </p>
      </div>
    </Container>
  );
}

export default Vision;
