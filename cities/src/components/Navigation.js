import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../styles/components/navigation.css";
import {motion } from "framer-motion";


const Navigation = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.8 },
      y: -200,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      y: -200,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <Navbar bg="dark" expand="md" variant="dark" >
        <Container>
          <Navbar.Brand href="/">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1,
              }}
            >
              <img
                src="favicon.png"
                alt="favicon"
                height="30"
                width="30"
                className="d-inline-block align-top"
              />
              <span className="text-light nav-title">Visit Cities</span>
            </motion.div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="v-link" href="/cities">
                Villes à visiter
              </Nav.Link>
              {/* <Nav.Link className="v-link" href="/wishlist">
                Listes des souhaits
              </Nav.Link> */}
              <Nav.Link className="v-link" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="v-link" href="#">
                Suggestions(TODO)
                </Nav.Link>
            </Nav>
          
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </motion.div>
  );
};

export default Navigation;
