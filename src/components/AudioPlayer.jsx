// src/components/AudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';

function AudioPlayer({ audioFile, pageName }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Erreur lors de la lecture de l'audio:", error);
          // Vous pourriez également mettre à jour un état d'erreur ici
        });
      }
      setIsPlaying(!isPlaying);
    } else {
      console.error("Erreur: L'élément audio n'est pas correctement référencé pour la lecture.");
    }
  };

  const handleAudioError = () => {
    console.error("Erreur lors du chargement du fichier audio:", audioFile);
    // Vous pourriez également mettre à jour un état d'erreur ici
  };

  useEffect(() => {
    const audioElement = audioRef.current; // Stocker la référence dans une variable locale

    if (audioElement) {
      audioElement.addEventListener('error', handleAudioError);

      return () => {
        audioElement.removeEventListener('error', handleAudioError);
      };
    }

    // Vérification si la référence n'est toujours pas là après le montage
    if (!audioElement) {
      console.error("Erreur: L'élément audio n'a pas été référencé après le montage.");
    }
  }, [audioFile]); // Dépendance ajoutée pour se ré-exécuter si audioFile change

  return (
    <div className="audio-player">
      <button
        className={`audio-button ${isPlaying ? 'playing' : ''}`}
        onClick={togglePlay}
        aria-label={isPlaying ? "Pause l'audio" : "Lire l'audio"}
      >
        {isPlaying ? (
          <span className="material-icons">pause</span>
        ) : (
          <span className="material-icons">play_arrow</span>
        )}
        {isPlaying ? "Pause" : `Écouter cette page`}
      </button>
      <audio
        ref={audioRef}
        src={audioFile}
        onEnded={() => setIsPlaying(false)}
        onError={handleAudioError}
      />
    </div>
  );
}

export default AudioPlayer;