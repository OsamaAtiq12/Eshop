import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "../../styles/Nav.module.css";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import HeroSection from "./Hero";
import AboutSection from "./AboutSection";
import Vision from "./Vision";
import Mission from "./Mission";
import Services from "./Services";
import Technologies from "./Technologies";
import Workflow from "./Workflow";
import Footer from "./Footer";
import { useRouter } from "next/router";
function navbar(props) {
  const router = useRouter();
  function handleClick() {
    router.push("/blog");
  }
  const aboutRef = useRef(null);
  const handleAboutClick = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const serviceRef = useRef(null);
  const handleserviceClick = () => {
    if (serviceRef.current) {
      serviceRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const ContactRef = useRef(null);
  const handleContactClick = () => {
    if (ContactRef.current) {
      ContactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        className={styles.heroSection}
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", opacity: 0.8 }}
      >
        <Navbar
          bg="light"
          expand="lg"
          className="pb-1 pt-0 animated-navbar "
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
          }}
        >
          <Container>
            <Navbar.Brand href="#">
              <Image src="/logo1.png" alt="My Image" width={80} height={80} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="me-auto px-3 justify-content-end"
                style={{ width: "100%" }}
              >
                <Nav.Link
                  href="#"
                  className={styles.hover}
                  onClick={handleAboutClick}
                >
                  <Icon icon="mdi:about" fontSize={25} /> About us
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className={styles.hover}
                  onClick={handleserviceClick}
                >
                  <Icon icon="ic:baseline-medical-services" fontSize={25} />{" "}
                  Services
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className={styles.hover}
                  onClick={handleContactClick}
                >
                  <Icon icon="material-symbols:phone-forwarded" fontSize={25} />{" "}
                  Contact Us
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className={styles.hover}
                  onClick={handleClick}
                >
                  <Icon icon="jam:blogger" fontSize={25} /> Blog
                </Nav.Link>
                <Button size="sm" variant="dark" className={styles.mybtn}>
                  Getting Started
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      <HeroSection />
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div>
        <Mission />
        <Vision />
      </div>

      <div ref={serviceRef}></div>
      <Services />
      <Workflow />
      <Technologies />

      <div ref={ContactRef}></div>
      <Footer />
    </>
  );
}

export default navbar;
