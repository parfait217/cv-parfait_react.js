// src/pages/Experience.js
import React, { useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { motion } from 'framer-motion';
import cImg from '../assets/images/c.jpeg';
import pythonImg from '../assets/images/mages.jpeg';
import experienceAudio from '../assets/audio/experience.mp3';

function Experience() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <AudioPlayer audioFile={experienceAudio} pageName="Experience" />
      
      <motion.section 
        className="parcour"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1>Parcours et expérience</h1>
        <div className="sec">
          <h2>Expérience professionnelle</h2>
          
          <motion.div 
            className="exp"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="left">
              <h3>2023 - 2024</h3>
            </div>
            <div className="right">
              <h3>Créateur - Nkongmenock Loic Parfait</h3>
              <p>
                Créateur du site Nkongmenock-loic.com et de jeux en différents 
                langages de programmation
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="exp"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="left">
              <h3>2024-2025</h3>
            </div>
            <div className="right">
              <h3>Configuration du réseau WiFi d'une entreprise (Cyber café) de la place "TrustWiFi"</h3>
              <p>
                J'ai participé à la mise en place d'un réseau WiFi dans un cyber café de la place où nous avons configuré 
                divers équipements réseau tels que les outdoor, indoor, TP-Link, 
                et nous avons aussi appliqué des politiques de sécurité sur ce réseau qui jusqu'à maintenant fonctionne à merveille.
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="sec">
          <h2>Compétences techniques</h2>
          
          <div className="skills-container">
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-name">Développement Web notamment avec des technologie comme réact js , dotnet , django ,php </div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '95%' }}></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-name">Programmation C/C++</div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '90%' }}></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-name">Python</div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '85%' }}></div>
              </div>
            </motion.div>
            
            <motion.div 
              className="skill-item"
              whileHover={{ scale: 1.05 }}
            >
              <div className="skill-name">Développement Mobile notamment avec des technologie comme flutter , réact native , kyvi</div>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: '80%' }}></div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="sec">
          <h2>Formations complémentaires</h2>
          
          <motion.div 
            className="exp"
            whileHover={{ scale: 1.02 }}
          >
            <div className="left">
              <h3>2023-2024</h3>
            </div>
            <div className="right">
              <h3>Formation en développement Web</h3>
              <p>HTML, CSS, JavaScript, React</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="exp"
            whileHover={{ scale: 1.02 }}
          >
            <div className="left">
              <h3>2024-2025</h3>
            </div>
            <div className="right">
              <h3>Formation en HACKING ETHIQUE</h3>
              <p>Pentesting , sécurisation des reseaux sans file</p>
            </div>
          </motion.div>
        </div>
      </motion.section>
      <motion.section 
        className="recomandation"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ delay: 0.6 }}
      >
        <h1>Recommandations (projets)</h1>
        <div className="sec">
          <div className="reco">
            <h2>Projet de gestion de stock en langage C</h2>
            <div className="left">
              <a href="#projet-c" className="project-link">
                <img src={cImg} width="200" height="150" alt="Projet en langage C" />
                <span className="view-project">Voir le projet</span>
              </a>
            </div>
            <div className="right">
              <p>
                J'ai participé à un projet de gestion de stock en groupe dans ma salle de classe
                qui consistait à créer un programme de gestion de stock dans une entreprise,
                plus précisément les produits alimentaires.
              </p>
            </div>
          </div>
          
          <div className="reco">
            <h2>Projet en <strong>Python</strong></h2>
            <div className="left">
              <a href="#projet-python" className="project-link">
                <img src={pythonImg} width="200" height="150" alt="Projet en Python" />
                <span className="view-project">Voir le projet</span>
              </a>
            </div>
            <div className="right">
              <p>
                Création d'un jeu en <strong>Python</strong> avec notamment la bibliothèque
                <strong> Pygame</strong> qui permet de créer des jeux vidéo en 2D inspiré du développeur Gaven.
              </p>
            </div>
          </div>
          
          <div className="github-section">
            <h2>Plus de projets</h2>
            <p>
              Pour plus de mes projets, veuillez consulter mon GitHub à l'adresse suivante : 
              <a href="https://github.com/parfait217" target="_blank" rel="noopener noreferrer" className="github-link">
                https://github.com/parfait217
              </a>
            </p>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Experience;