import { Carousel, Container, Image } from "react-bootstrap";
import React from "react";
import "../styles/components/diaporama.css";
import images from "../data/dataForDiapo";
import { motion } from "framer-motion";

const Diaporama = () => {
  const variants = {
    initial: {
      opacity: 0.1,
      transition: { duration: 0.6 },
      x: 500,
      y: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.4 },
      x: -800,
      y: -200,
    },
  };

  const elements = images.map((image) => {
    return (
      <Carousel.Item key={image.id}>
        <Image
          thumbnail
          className="img-diapo"
          src={image.src}
          alt={image.title}
        />
        <Carousel.Caption>
          <motion.h2
            initial={{
              x: -500,
              opacity: 0,
              transition: { type: "spring", stiffness: 100, duration: 0.4 },
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              opacity: 0.5,
              x: -500,
            }}
            transition={{ delay: 1 }}
          >
            {image.title}
          </motion.h2>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <motion.div
      initial="initial"
      animate="visible"
      exit="exit"
      variants={variants}
    >
      <Container fluid="md" className="diapo">
        <Carousel fade>{elements}</Carousel>
      </Container>
    </motion.div>
  );
};

export default Diaporama;
