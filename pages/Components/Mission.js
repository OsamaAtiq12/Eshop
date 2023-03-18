import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Container from "react-bootstrap/Container";
const { heroContent, heroWrapper, imageWrapper } = styles;
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Mission() {
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
          Our Mission
        </h2>

        <div
          className="text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 100,
          }}
        >
          <p>
            We deliver innovative and cutting-edge software solutions that help
            our clients achieve their business goals. Our commitment to
            providing the highest quality of service and exceeding our clients'
            expectations sets us apart from the competition. We strive to create
            a culture of innovation, collaboration, and continuous learning that
            enables our team to stay at the forefront of the latest technology
            trends and industry best practices. Ultimately, our goal is to
            empower our clients to succeed and grow their businesses through the
            power of software.
          </p>
        </div>
      </Container>
  
  );
}

export default Mission;
