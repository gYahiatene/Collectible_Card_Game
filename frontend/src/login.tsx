import React, { useState } from 'react';
import './login.css';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [privateKey, setPrivateKey] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleConnect = async () => {
    try {
      const response = await fetch('http://localhost:8181/connection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ adresse: walletAddress, privateKey }),
      });

      const result = await response.json();

      if (result[0].isConnected === "True") {
        setMessage("Connexion réussie !");
        localStorage.setItem('privateKey', privateKey);
        localStorage.setItem('accountAddress', walletAddress);
        onLoginSuccess();
      } else {
        setMessage(result[0].error || "Connexion échouée.");
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setMessage("Erreur de connexion au serveur.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Connexion Pokémon NFT</h1>
        <input
          type="text"
          placeholder="Adresse Ethereum"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
        />
        <input
          type="password"
          placeholder="Clé Privée"
          value={privateKey}
          onChange={(e) => setPrivateKey(e.target.value)}
        />
        <button onClick={handleConnect}>Connectez-vous</button>
        <p>{message}</p>
      </div>
    </div>
  );
};
