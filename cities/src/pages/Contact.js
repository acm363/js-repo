import React, { useState, useRef } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import "../styles/contact.css";

const Contact = () => {
  const nameRef = useRef(null);
  const commentRef = useRef(null);
  const [postsComponents, setPostsComponents] = useState([]); //la liste des posts

  const [showModal, setShowModal] = useState(false); //la visibilité du message d'alerte
  const date = new Date();
  const handleClose = () => {
    setShowModal(false);
  };

  /*message d'alerte pour demander de remplir tous les champs */
  const modal_ = (
    <Modal show={showModal} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Alerte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Veuillez remplir tous les champs pour laisser votre commentaire
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Fermer
        </Button>
      </Modal.Footer>
    </Modal>
  );
  /* le nom et le commentaire doivent être renseignés si le commentaire veut être poster */
  const handleButtonClick = () => {
    if (nameRef.current.value === "" || commentRef.current.value === "") {
      //si l'une des valeurs manque, on affiche le message d'alerte en le rendant visible
      setShowModal(true);
    } else {
      setShowModal(false);
      nameRef.current.value &&
        commentRef.current.value &&
        setPostsComponents([
          ...postsComponents,
          {
            id: postsComponents.length,
            name: nameRef.current.value,
            comment: commentRef.current.value,
            time : `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} à ${date.getHours()}h${date.getMinutes()}`
          },
        ]);
      // après un post les champs du formulaire sont vidés
      nameRef.current.value = "";
      commentRef.current.value = "";
    }
  };

  return (
    <div>
      <Navigation />
      <section className="container-fluid contact">
        <motion.h4
          initial={{
            opacity: 0,
            x: -1,
            y: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          Nos coordonnées{" "}
        </motion.h4>
        <motion.div
          className="contact-info"
          initial={{
            opacity: 0,
            x: -80,
            y: -1,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-telephone-inbound-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0z"
            />
          </svg>
          <span className="container text-dark">0605040600</span>
        </motion.div>
        <motion.div
          className="contact-info"
          initial={{
            opacity: 0,
            x: -90,
            y: -1,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-envelope-fill"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
          </svg>
          <span className="container text-dark"> visit_cities@pro_net.fr</span>
        </motion.div>

        <motion.div
          className="contact-info"
          initial={{
            opacity: 0,
            x: -100,
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
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-house-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
            <path
              fillRule="evenodd"
              d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
            />
          </svg>
          <span className="container text-dark">
            15 rue du père Combattant, 70000, VilleLouche
          </span>
        </motion.div>
      </section>

      <motion.section
        initial={{
          opacity: 0,
          x: -10,
          y: -10,
        }}
        animate={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="container-fluid section-form"
      >
        <div className="text-center mb-3">
          Laissez un commentaire sur le site :
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nom </Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrer votre nom"
              required
              ref={nameRef}
            />
            <Form.Text className="text-muted">
              Nous ne partagerons jamais vos données avec un tiers.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="floatingTextarea">
            <Form.Label>Votre commentaire </Form.Label>
            <Form.Control
              type="text"
              as="textarea"
              style={{ height: "250px" }}
              placeholder="Laisser un commentaire"
              ref={commentRef}
              required
            />
          </Form.Group>
          <Button
            variant="dark"
            // au clique sur le boutton de validation on affiche si les champs manque le message d'alerte
            onClick={handleButtonClick}
          >
            Publier
          </Button>
        </Form>
      </motion.section>
      {/* le message d'alerte qui s'affiche si tous les champs ne sont pas remplies(par défaut il n'est pas visible) */}
      {modal_}

      <div className="post-content">
        {postsComponents.map((post) => (
          <div className="container-md post" key={post.id}>
            <span className="poster-name">{post.name}</span>
            <div className="poster-time">{post.time}</div>
            <div className="poster-comment">{post.comment}</div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
