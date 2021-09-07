import React, { useState} from 'react';
import Diaporama from '../components/Diaporama';
import Navigation from '../components/Navigation';
import {motion} from 'framer-motion';
import Footer from '../components/Footer';
import { Modal, Button } from 'react-bootstrap';
const Home = () => {

    const [showModal, setShowModal] = useState(true);

    const handleClose = () => {setShowModal(false)};
    
    return (
        <div>
             <Modal show={showModal} onHide={handleClose} centered>
                 <Modal.Header closeButton>
                     <Modal.Title>Bienvenue</Modal.Title>
                 </Modal.Header>
                 <Modal.Body>
                    <span className="fs-6 text-info">Visit Cities</span> est un site web qui vous permet de découvrir des villes du monde entier et de les noter si possible
                    si vous avez aimé les visiter ; mais par dessus tout, il reste un site où on vous présente les plus belles villes du monde.

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={handleClose}>Fermer</Button>
                    </Modal.Footer>
             </Modal>
            <Navigation/>
            <motion.h1
            initial={{
                opacity: 0,
                x : -1,
                y : -1
            }} 
            animate={{
                opacity : 1,
                x : 0,
                y: 0
            }}
            transition={{
                duration : 0.8
            }}
             className="display-5 text-center mt-4 home-title">Prêt(e) pour votre nouvelle destination ? </motion.h1>
          
            <Diaporama/>
                
            <Footer/>
        </div>
    );
};

export default Home;