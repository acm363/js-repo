import React from "react";
import Navigation from "../components/Navigation";
import SocialNetWork from "../components/SocialNetWork";
import DynamicText from "../components/DynamicText";
import ScrollBottom from "../components/ScrollBottom";
import Mouse from "../components/Mouse";
import { motion } from "framer-motion";

const Home = () => {
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -100,
    },
  };
  return (
    <main>
      <Mouse />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation />
        <SocialNetWork />
        <div className="home-main">
          <div className="main-content">
            <motion.h1
              drag
              OnDragEnd
              dragConstraints={{
                left: -250,
                right: 750,
                top: -100,
                bottom: 250,
              }}
            >
              {" "}
              ACM SHOWCASE
            </motion.h1>
            <motion.h2 drag OnDragEnd>
              <DynamicText />
            </motion.h2>
          </div>
        </div>
        <ScrollBottom right={"/project-1"} />
      </motion.div>
    </main>
  );
};

export default Home;
