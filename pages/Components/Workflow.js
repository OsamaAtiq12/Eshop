import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Container } from "react-bootstrap";
import { createTheme } from "@mui/material/styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
function Workflow() {
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
  const theme = createTheme({
    palette: {
      customColor: {
        main: "#ffffff", // Replace with your custom color value
        contrastText: "#ffffff", // Replace with your custom contrast text value
      },
    },
  });
  return (
    <Container className="position-relative m-0 pb-5 pt-5">
      <h2
        className="text-white"
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
        }}
      >
        Our Workflow
      </h2>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Project Kickoff / Initiation
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Requirements Gathering
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Analysis
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Design
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Development
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Testing
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot
              sx={{ width: 20, height: 20 }}
              style={{
                backgroundColor: theme.palette.customColor.main,
                color: theme.palette.customColor.contrastText,
              }}
            />
          </TimelineSeparator>
          <TimelineContent
            style={{
              fontSize: 24,
              color: theme.palette.customColor.contrastText,
            }}
          >
            Deployment
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}

export default Workflow;
