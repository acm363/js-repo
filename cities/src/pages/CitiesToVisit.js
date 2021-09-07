import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { motion } from "framer-motion";
import cities from "../data/dataForCities";
import CardCity from "../components/CardCity";
import "../styles/citiesToVisit.css";

const CitiesToVisit = () => {
  const citiesElements = cities.map((city) => {
    return <CardCity key={city.id} name={city.name} country={city.country} image={city.image} />;
  });
  return (
    <>
      <Navigation />
      <div className="container mt-5">
        <motion.h3
          initial={{
            opacity: 0,
            x: -1,
            y: -1,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="display-5 text-center mt-4"
        >
          Une ville vous intéresse ?
        </motion.h3>
        <div className="city-grid">{citiesElements}</div>
      </div>
      <Footer />
    </>
  );
};

export default CitiesToVisit;
