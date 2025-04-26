// src/pages/Loisirs.js
import React, { useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { motion } from 'framer-motion';
import footballImg from '../assets/images/Untitled.jpeg';
import veloImg from '../assets/images/velo.jpeg';
import guerreImg from '../assets/images/guerre.jpeg';
import loisirsAudio from '../assets/audio/loisirs.mp3';


function Loisirs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };
  
  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AudioPlayer audioFile={loisirsAudio} pageName="Loisirs" />
      
      <motion.section 
        className="vert"
        variants={sectionVariants}
      >
        <h1>Football</h1>
        <div className="sec">
          <div className="left">
            <motion.img 
              src={footballImg} 
              alt="Cameroun" 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="right">
            <p>
              Lorsque j'étais en classe de terminale, j'ai été sollicité pour mon talent car 
              en ce jour le 04 février 2023 lors de la finale contre notre salle de classe 
              (terminale(c)) et notre opposant la terminale(d2), j'ai été le meilleur buteur 
              et le meilleur passeur à la fin du match.
            </p>
            <p>
              Reconnu en salle de classe (ICTL1) pour mes multiples talents en dribble, buteur, 
              j'ai été rapidement nommé capitaine de la salle (ICTL1).
            </p>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="blue"
        variants={sectionVariants}
      >
        <h1>Vélo</h1>
        <div className="sec">
          <div className="left">
            <motion.img 
              src={veloImg} 
              alt="Une image de moi en pleine action" 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="right">
            <p>
              Je fais habituellement du vélo pour me détendre et pour fortifier mon corps.
            </p>
            <motion.div 
              className="hobby-details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3>Mes parcours préférés</h3>
              <ul className="hobby-list">
                <li>Parcours en montagne</li>
                <li>Circuits urbains</li>
                <li>Pistes cyclables en nature</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <motion.section 
        className="jaune"
        variants={sectionVariants}
      >
        <h1>World-war</h1>
        <div className="sec">
          <div className="left">
            <motion.img 
              src={guerreImg} 
              alt="Une image de moi en pleine action" 
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <div className="right">
            <p>
              Reconnu en salle de classe pour ma technique exceptionnelle de jeu, je figure 
              toujours parmi les 05 premiers de ce jeu grâce à ma technique si fluide et rapide,
              j'envoie très rapidement mes camarades au sol (les élimine du jeu afin de maximiser
              le plus de points possible) afin de remporter la partie.
            </p>
            <motion.div 
              className="game-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <h3>Statistiques de jeu</h3>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-label">Victoires</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: '85%' }}></div>
                  </div>
                  <span className="stat-value">85%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Éliminations</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: '92%' }}></div>
                  </div>
                  <span className="stat-value">92%</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Classement</span>
                  <div className="stat-bar">
                    <div className="stat-fill" style={{ width: '95%' }}></div>
                  </div>
                  <span className="stat-value">Top 5</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default Loisirs;