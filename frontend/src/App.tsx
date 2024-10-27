import React, { useState, useEffect } from 'react';
import { CreateCollection } from './CreateCollection';
import { ViewCollections } from './ViewCollections';
import { Login } from './login';

enum Pages {
  CreateCollection = 'CREATE_COLLECTION',
  ViewCollections = 'VIEW_COLLECTIONS'
}

export const App: React.FC = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [currentPage, setCurrentPage] = useState<Pages>(Pages.ViewCollections);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const superUserAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  // Gestion de la connexion réussie
  const handleLoginSuccess = () => {
    setIsConnected(true);
    const storedAddress = localStorage.getItem("accountAddress");
    setWalletAddress(storedAddress);
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    setIsConnected(false);
    setCurrentPage(Pages.ViewCollections); // Redirige vers la vue des collections pour les utilisateurs normaux
    setWalletAddress(null);
  };

  // Afficher un message pour indiquer le type d'utilisateur
  const isSuperUser = walletAddress === superUserAddress;
  const userMessage = isSuperUser
    ? "Vous êtes le super-utilisateur."
    : "Vous êtes un utilisateur normal.";

  return (
    <div>
      {!isConnected ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          {/* Message d'utilisateur */}
          <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#4a90e2', marginTop: '10px' }}>{userMessage}</p>

          {/* Menu de navigation */}
          <nav style={{ display: 'flex', justifyContent: 'center', padding: '5px', backgroundColor: '#4a90e2', color: '#fff' }}>
            {isSuperUser && (
              <button
                onClick={() => setCurrentPage(Pages.CreateCollection)}
                style={{ margin: '0 10px', padding: '10px', cursor: 'pointer' }}
              >
                Créer une Collection
              </button>
            )}
            <button
              onClick={() => setCurrentPage(Pages.ViewCollections)}
              style={{ margin: '0 5px', padding: '5px', cursor: 'pointer' }}
            >
              Voir les Collections
            </button>
            <button
              onClick={handleLogout}
              style={{ margin: '0 10px', padding: '10px', cursor: 'pointer', backgroundColor: '#ff4d4d' }}
            >
              Déconnexion
            </button>
          </nav>

          {/* Rendu conditionnel de la page */}
          {currentPage === Pages.CreateCollection && isSuperUser && (
            <CreateCollection onLogout={handleLogout} onViewCollections={() => setCurrentPage(Pages.ViewCollections)} />
          )}
          {currentPage === Pages.ViewCollections && (
            <ViewCollections onLogout={handleLogout} onCreateCollection={() => setCurrentPage(Pages.CreateCollection)} />
          )}
        </>
      )}
    </div>
  );
};
