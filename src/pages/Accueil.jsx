// src/pages/Accueil.js
import React, { useEffect } from 'react';
import AudioPlayer from '../components/AudioPlayer';
import { motion } from 'framer-motion';
import profileImg from '../assets/images/loic1.jpg';
import cImg from '../assets/images/c.jpeg';
import pythonImg from '../assets/images/mages.jpeg';
import accueilAudio from '../assets/audio/accueil.mp3';
// Accueil audio file would be at public/assets/audio/accueil.mp3
//const audioFile = import.meta.env.VITE_PUBLIC_URL + '/assets/audio/accueil.mp3';

function Accueil() {
  //const audioFile = import.meta.env.VITE_PUBLIC_URL + '/assets/audio/accueil.mp3';

  // Animation variants
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
      <AudioPlayer audioFile={accueilAudio} pageName="Accueil" />
      
      <motion.section 
        className="presentation"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <h1>Qui suis-je  ?</h1>
        <div className="sec">
          <div className="left">
            <img src={profileImg} alt="Une photo de moi" width={100}  height={100} /> 
          </div> 
          <div className="right">
            <p>
              Je m'appelle Nkongmenock loic parfait, j'ai 19 ans et je vis au Cameroun 
              plus précisément dans la région de <strong>Yaoundé</strong> aussi connue 
              sous le nom de <strong>Capitale politique du Cameroun</strong>
            </p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="parcour"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ delay: 0.2 }}
      >
        <h1>Parcours scolaire</h1>
        <div className="exp">
          <div className="left">
            <h3>2019 - 2020</h3>
          </div>
          <div className="right">
            <h4>CEP</h4>
            <p>Obtention d'un CEP</p>
          </div>
        </div>
        <div className="exp">
          <div className="left">
            <h3>2019 - 2020</h3>
          </div>
          <div className="right">
            <h4>BEPC</h4>
            <p>Obtention d'un BEPC en espagnol</p>
          </div>
        </div>
        <div className="exp">
          <div className="left">
            <h3>2021 - 2022</h3>
          </div>
          <div className="right">
            <h4>Probatoire scientifique</h4>
            <p>Obtention d'un probatoire scientifique (c)</p>
          </div>
        </div>
        <div className="exp">
          <div className="left">
            <h3>2022 - 2023</h3>
          </div>
          <div className="right">
            <h4>Baccalauréat scientifique</h4>
            <p>Obtention d'un baccalauréat scientifique (c)</p>
          </div>
          
        </div>
        <div className="exp">
          <div className="left">
            <h3>2023 - 2024</h3>
          </div>
          <div className="right">
            <h4>Première année à l'université</h4>
            <p>Premiers pas à l'Université de Yaoundé 1 en filière informatique professionnelle ICT4D.</p>
          </div>
        </div>
        <div className="exp">
          <div className="left">
            <h3>2024 - 2025</h3>
          </div>
          <div className="right">
            <h4>Deuxième année</h4>
            <p>Deuxième année dans la même université, option cyber sécurité (C).</p>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className="competence"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ delay: 0.4 }}
      >
        <h1>Compétences et niveaux</h1>
        
        {/* Langages de programmation */}
        <div className="competence-category">
          <h2>Langages de programmation</h2>
          <div className="sec skills-grid">
            <div className="skill-card">
              <h3>HTML/CSS/JASCRIPT</h3>
              <div className="skill-level">
                <div className="skill-bar expert"></div>
                <span>EXPERT</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>PYTHON</h3>
              <div className="skill-level">
                <div className="skill-bar expert"></div>
                <span>EXPERT</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>LANGAGE C#/C/C++</h3>
              <div className="skill-level">
                <div className="skill-bar intermediate"></div>
                <span>MOYEN</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>JAVA</h3>
              <div className="skill-level">
                <div className="skill-bar intermediate"></div>
                <span>MOYEN</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Cybersécurité */}
        <div className="competence-category">
          <h2>Cybersécurité</h2>
          <div className="sec skills-grid">
            <div className="skill-card">
              <h3>Sécurité des réseaux sans fil (WIFI)</h3>
              <div className="skill-level">
                <div className="skill-bar expert"></div>
                <span>EXPERT</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>Analyse des vulnérabilités dans un réseau</h3>
              <div className="skill-level">
                <div className="skill-bar intermediate"></div>
                <span>MOYEN</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>Cryptographie</h3>
              <div className="skill-level">
                <div className="skill-bar expert"></div>
                <span>EXPERT</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Réseaux informatiques */}
        <div className="competence-category">
          <h2>Réseaux informatiques</h2>
          <div className="sec skills-grid">
            <div className="skill-card">
              <h3>Certissage des câbles réseaux</h3>
              <div className="skill-level">
                <div className="skill-bar beginner"></div>
                <span>DÉBUTANT</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>Configuration des VLAN</h3>
              <div className="skill-level">
                <div className="skill-bar beginner"></div>
                <span>DÉBUTANT</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>Configuration des équipements de base (routeur, switch...)</h3>
              <div className="skill-level">
                <div className="skill-bar intermediate"></div>
                <span>MOYEN</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Design */}
        <div className="competence-category">
          <h2>Design</h2>
          <div className="sec skills-grid">
            <div className="skill-card">
              <h3>Design UX/UI</h3>
              <div className="skill-level">
                <div className="skill-bar intermediate"></div>
                <span>MOYEN</span>
              </div>
            </div>
            
            <div className="skill-card">
              <h3>Design graphique</h3>
              <div className="skill-level">
                <div className="skill-bar intermediate"></div>
                <span>MOYEN</span>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

     
    </>
  );
}

export default Accueil;