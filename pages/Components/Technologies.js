import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Technology } from "../../constants/technologies";
import { Technology2 } from "../../constants/technologies";
import { Technology3 } from "../../constants/technologies";

import styles from "../../styles/HeroSection.module.css";
import Container from "react-bootstrap/Container";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Technologies() {
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
        Our Technologies
      </h2>

      <div className="d-flex justify-content-evenly flex-wrap gap-3 pt-3">
        {Technology.map((item, index) => {
          console.log(item);
          return (
            <Card
              style={{ width: "18rem", backgroundColor: "#000000" }}
              text="white"
            >
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
                <Card.Text
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 100,
                  }}
                >
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="d-flex justify-content-evenly flex-wrap gap-3 pt-3">
        {Technology2.map((item, index) => {
          console.log(item);
          return (
            <Card
              style={{ width: "18rem", backgroundColor: "#000000" }}
              text="white"
            >
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
                <Card.Text
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 100,
                  }}
                >
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>

      <div className="d-flex justify-content-evenly flex-wrap gap-3 pt-3">
        {Technology3.map((item, index) => {
          console.log(item);
          return (
            <Card
              style={{ width: "18rem", backgroundColor: "#000000" }}
              text="white"
            >
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
                <Card.Text
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 100,
                  }}
                >
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default Technologies;
