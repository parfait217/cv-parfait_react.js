import React, { useEffect, useState } from 'react';

const InstallPWA = () => {
    const [installPrompt, setInstallPrompt] = useState(null);
    const [isAppInstalled, setIsAppInstalled] = useState(false);
    const [alreadyInstalledMessage, setAlreadyInstalledMessage] = useState('');

    useEffect(() => {
        // Détectez si l'app est déjà installée au chargement
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setIsAppInstalled(true);
        }

        // Capturez l'événement beforeinstallprompt
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setInstallPrompt(e);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        // Détectez quand l'app est installée
        window.addEventListener('appinstalled', () => {
            setIsAppInstalled(true);
            setInstallPrompt(null);
            console.log('Application installée avec succès!');
        });

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (isAppInstalled) {
            setAlreadyInstalledMessage("L'application est déjà installée sur votre appareil. Si vous souhaitez la réinstaller, veuillez d'abord désinstaller l'application existante.");
            return;
        }

        if (!installPrompt) {
            // Ceci ne devrait pas arriver si beforeinstallprompt a été capturé
            console.log("L'invite d'installation n'est pas disponible.");
            return;
        }

        installPrompt.prompt();

        installPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('L\'utilisateur a accepté l\'installation');
            } else {
                console.log('L\'utilisateur a refusé l\'installation');
            }
            setInstallPrompt(null); // L'invite ne peut être utilisée qu'une seule fois
        });
    };

    return (
        <>
            {alreadyInstalledMessage && (
                <div className="already-installed-banner">
                    <p>{alreadyInstalledMessage}</p>
                </div>
            )}

            {installPrompt && !isAppInstalled && (
                <div className="install-banner">
                    <p>Installer l'application CV ?</p>
                    <button onClick={handleInstallClick} className="install-button">
                        Installer
                    </button>
                </div>
            )}
        </>
    );
};

export default InstallPWA;