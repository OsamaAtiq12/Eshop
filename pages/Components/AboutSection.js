import Image from "next/image";
import styles from "../../styles/HeroSection.module.css";
import Container from "react-bootstrap/Container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function AboutSection() {
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

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <Container className="position-relative m-0 pb-5">
        <h2
          className="text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 700,
          }}
        >
          About Our Company
        </h2>

        <div
          className="text-white"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 100,
          }}
        >
          <p>
            We are a software company that specializes in developing custom
            software solutions for businesses. Our team of experienced
            developers, designers, and project managers work together to create
            software that meets the unique needs of each client.
          </p>
          <p>
            Our mission is to help businesses succeed by providing them with the
            tools they need to operate efficiently and effectively. We believe
            that software should be user-friendly, reliable, and scalable, and
            we work tirelessly to ensure that our products meet these criteria.
          </p>
          <p>
            We have experience working with clients in a variety of industries,
            including healthcare, finance, and e-commerce. Our clients range
            from small startups to large corporations, and we are proud to have
            helped each and every one of them achieve their goals.
          </p>

          <p>
            If you are interested in learning more about our services, please
            don't hesitate to contact us. We would be happy to answer any
            questions you may have and provide you with a free consultation.
          </p>
        </div>
      </Container>

    
    </motion.div>
  );
}

export default AboutSection;
