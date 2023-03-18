import React from "react";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import styles from "../../styles/Footer.module.css";
import Contact from "./Contact";

function Footer() {
  return (
    <div className="position-relative"  style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", opacity: 0.9 }}>
         <Contact/>
      <footer className={styles.footer}>
     
        <div className={styles.footerBottom}>
          <Container >
            <p>
              Copyright © 2023
              <a className="px-2 text-dark" href="#">EShop</a>
              - All Rights Reserved -
              <a  className="text-dark" href="#">Privacy Policy</a>
            </p>
          </Container>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
