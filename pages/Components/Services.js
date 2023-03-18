import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Service } from "./constants/service";
import { Service2 } from "./constants/service";
import styles from "../../styles/HeroSection.module.css";
import Container from "react-bootstrap/Container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Services() {
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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const [ref2, inView2] = useInView();
  const variants2 = {
    hidden: {
      opacity: 0,
      x: "50px",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
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
        Our Services
      </h2>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="d-flex justify-content-evenly flex-wrap gap-3 pt-3">
          {Service.map((item, index) => {
            console.log(item);
            return (
              <Card style={{ width: "18rem" ,backgroundColor: '#000000'  }} text="white"  >
                <Card.Img
                  variant="top"
                  src={item.src}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title
                    
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                      
                    }}
                  >
                    {" "}
                    {item.name}
                  </Card.Title>
                  <Card.Text  style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 100,
                      
                    }}>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        variants={variants2}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="d-flex justify-content-evenly flex-wrap gap-3 pt-3">
          {Service2.map((item, index) => {
            console.log(item);
            return (
                <Card style={{ width: "18rem" ,backgroundColor: '#000000'  }} text="white"  >
                <Card.Img
                  variant="top"
                  src={item.src}
                  style={{ height: "200px", width: "100%", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title
                    
                    style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 800,
                    }}
                  >
                    {item.name}
                  </Card.Title>
                  <Card.Text style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 100,
                      
                    }}>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </motion.div>
    </Container>
  );
}

export default Services;
