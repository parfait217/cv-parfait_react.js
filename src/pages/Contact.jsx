// src/pages/Contact.js
import React, { useState, useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { motion } from 'framer-motion';
import contactAudio from '../assets/audio/contact.mp3';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the form data to a server
    console.log('Form submitted:', formData);
    
    // Simulate a successful form submission
    setFormStatus('success');
    
    // Reset the form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Clear the success message after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AudioPlayer audioFile={contactAudio} pageName="Contact" />
      
      <motion.section 
        className="rouge"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Contactez-moi !</h1>
        <div className="sec">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p>Mon site vous intéresse ?</p>
            <p>
              Si oui n'hésitez pas à me contacter à l'adresse suivante :   
              <strong> parfaitloic217@gmail.com</strong>
            </p>
            <p>
              Ou alors via mon numéro WhatsApp suivant : 
              <strong>(+237) - 683-63-92-32</strong>
            </p>
            <p>Je vous répondrai dans les meilleurs délais !</p>
          </motion.div>
          
          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h2>Formulaire de contact</h2>
            
            {formStatus === 'success' && (
              <div className="form-success-message">
                Votre message a été envoyé avec succès !
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div 
            className="social-media"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h2>Mes réseaux sociaux</h2>
            <div className="social-icons">
              <a href="#" className="social-icon" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="social-icon" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="social-icon" title="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default Contact;