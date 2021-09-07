import React from "react";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import ScrollBottom from "../components/ScrollBottom";
import Logo from "../components/Logo";
import CopyToClipboard from "react-copy-to-clipboard";
import SocialNetWork from "../components/SocialNetWork";
import ContactForm from "../components/ContactForm";
import { motion } from "framer-motion";

const Contact = () => {

  
  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: -800,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  return (
    <main>
      <Mouse />
      <motion.div 
       initial="initial"
       animate="visible"
       exit="exit"
       transition={transition}
       variants={variants}
        className="contact">
        <Navigation />
        <Logo />
        <ContactForm />
        <div className="contact-infos">
          <div className="address">
            <div className="content">
              <h4>🏚 Adresse</h4>
              <p>12 rue du Code</p>
              <p>59650 Villeneuve d'Ascq</p>
            </div>
          </div>

          <div className="phone">
            <div className="content">
              <h4>☎ Téléphone</h4>
              <CopyToClipboard text="0696069606" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Numéro de téléphone copié ✔")}
                >
                  0696069606
                </p>
              </CopyToClipboard>
            </div>
          </div>

          <div className="email">
            <div className="content">
              <h4>✉ Email</h4>
              <CopyToClipboard text="acm-showcase@pros.com" className="hover">
                <p
                  style={{ cursor: "pointer" }}
                  className="clipboard"
                  onClick={() => alert("Adresse mail copié ✔")}
                >
                  acm-showcase@pros.com
                </p>
              </CopyToClipboard>
            </div>
          </div>
          <SocialNetWork />
          <div className="credits">
            <p>
              <br />
              ACM - 2021
            </p>
          </div>
          
        </div>
        <ScrollBottom left={"/project-4"} />
      </motion.div>
    </main>
  );
};

export default Contact;
