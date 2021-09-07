import React from "react";
import "../styles/components/footer.css";
import {motion} from "framer-motion";

const Footer = () => {
  const date = new Date();
  return (
    <motion.footer 
    initial={{
      opacity:0,
      x : 500,
      y : 1000
    }}
    animate={{
      opacity : 1,
      x : 0,
      y: 0
  }}
  transition={{
    duration : 0.6
  }}
    className="footer-b text-center  bg-dark text-light mt-5">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          {/* facebook */}
          <a
            className="btn btn-outline-light btn-floating m-1 ico"
            href="https://www.facebook.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          {/* twitter */}
          <a
            className="btn btn-outline-light btn-floating m-2 ico"
            href="https://www.twitter.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          {/*instagram */}
          <a
            className="btn btn-outline-light btn-floating m-2 ico "
            href="https://www.instagram.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          {/*Google */}
          <a
            className="btn btn-outline-light btn-floating m-2 ico"
            href="https://www.google.com/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
        
          >
            <i className="fab fa-google"></i>
          </a>
          {/* Linkedin */}
          <a
            className="btn btn-outline-light btn-floating m-2 ico"
            href="https://www.linkedin.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          {/* Gitlab */}
          <a
            className="btn btn-outline-light btn-floating m-2 ico"
            href="https://www.gitlab.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-gitlab"></i>
          </a>
        </section>

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          © {date.getFullYear()} Copyright :
          <a className=" text-decoration-none text-white" href="/">
            {" "}
            Visit Cities
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
