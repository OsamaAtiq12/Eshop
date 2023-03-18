import React from "react";
import { Container } from "react-bootstrap";
import { Icon } from "@iconify/react";
import styles from "../../styles/Contact.module.css";

function Contact() {
  return (
    <div className="position-relative">
      <div className={styles.contact}>
        <Container fluid>
          <h2 style={{ fontFamily: "Montserrat, sans-serif" }}>Contact Us</h2>
          <div className="row">
            <div className="col-lg-6">
              <form action="https://formspree.io/f/mnqybaqa" method="POST">
                <div className="mb-3">
                  <label
                    htmlFor="name"
                    className="form-label"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="form-label"
                    style={{ fontFamily: "Montserrat, sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark"
                  style={{ fontFamily: "Montserrat, sans-serif" }}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="col-lg-6 px-5">
              <div className="mt-3">
                <h3 style={{ fontFamily: "Montserrat, sans-serif" }}>
                  Get in Touch
                </h3>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <Icon icon="carbon:location-filled" /> 123 Main St, New York,
                  NY 10001
                </p>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <Icon icon="ic:round-phone" /> (555) 555-1212
                </p>
                <p style={{ fontFamily: "Montserrat, sans-serif" }}>
                  <Icon icon="eos-icons:mail" /> info@example.com
                </p>
                <p>
                  <Icon icon="uil:clock" /> Mon-Fri: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Contact;
