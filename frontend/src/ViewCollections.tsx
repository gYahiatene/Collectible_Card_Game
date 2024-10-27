import React, { useState, useEffect } from 'react';
import './ViewCollections.css';

interface Card {
  nom: string;
  url: string;
  owner: string;
  id: number;
}

interface ViewCollectionsProps {
  onLogout: () => void;
  onCreateCollection: () => void;
}

export const ViewCollections: React.FC<ViewCollectionsProps> = ({ onLogout, onCreateCollection }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [message, setMessage] = useState<string>('');
  const [accountAddress, setAccountAddress] = useState<string | null>(null);
  const [newOwner, setNewOwner] = useState<string>('');

  useEffect(() => {
    const storedAddress = localStorage.getItem('accountAddress');
    if (storedAddress) setAccountAddress(storedAddress);
    fetchAllCards();
  }, []);

  const handleLogout = () => {
    setMessage("Déconnexion du compte...");
    localStorage.removeItem('privateKey');
    localStorage.removeItem('accountAddress');
    setAccountAddress(null);
    setTimeout(() => onLogout(), 500);
  };

  const fetchAllCards = async () => {
    const privateKey = localStorage.getItem('privateKey');
    if (!privateKey) {
      setMessage("Erreur : Clé privée non trouvée. Veuillez vous reconnecter.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8181/getAllCards', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ privateKey }),
      });

      const data = await response.json();
      console.log(data)
      setCards(data);
    } catch (error) {
      console.error('Erreur lors de la récupération des cartes:', error);
      setMessage('Erreur lors de la récupération des cartes.');
    }
  };

  const handleCardClick = (card: Card) => {
    setSelectedCard(card);
  };

  const handleTransfer = async () => {
    if (!selectedCard || !newOwner) {
      setMessage("Veuillez entrer une adresse de propriétaire valide.");
      return;
    }
    const privateKey = localStorage.getItem('privateKey');
    if (!privateKey) {
      setMessage("Erreur : Clé privée non trouvée. Veuillez vous reconnecter.");
      return;
    }

    try {
      const response = await fetch('http://localhost:8181/transferCard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          privateKey,
          cardId: selectedCard.id,
          addressTo: newOwner,
        }),
      });

      const data = await response.json();
      if (data === true) {
        setMessage("Transfert réussi !");
        setSelectedCard(null);
        setNewOwner('');
        fetchAllCards(); // Recharger les cartes après le transfert
      } else {
        setMessage(data.info || 'Erreur lors du transfert de la carte.');
        setSelectedCard(null); // Revenir à l'affichage des cartes en cas d'erreur
        fetchAllCards();
      }
    } catch (error) {
      console.error('Erreur lors du transfert de la carte:', error);
      setMessage('Erreur lors du transfert de la carte.');
      setSelectedCard(null); // Revenir à l'affichage des cartes en cas d'erreur
    }
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="collection-page">
      <nav className="navbar">
        <div className="account-info">
          <span>Adresse du compte : {accountAddress}</span>
        </div>
        <button onClick={onCreateCollection} style={{ padding: '10px', cursor: 'pointer' }}>Créer une Collection</button>
        <button onClick={handleLogout} style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#ff4d4d' }}>Déconnexion</button>
      </nav>

      <h2>Mes Cartes</h2>
      {!selectedCard ? (
        cards.length > 0 ? (
          <ul className="card-list">
            {cards.map((card) => (
              <li key={card.id} onClick={() => handleCardClick(card)}>
                <img src={card.url} alt={card.nom} width="50" height="50" />
                <span>{card.nom}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucune carte disponible.</p>
        )
      ) : (
        <div className="card-detail">
          <h3>Détails de la carte</h3>
          <img src={selectedCard.url} alt={selectedCard.nom} width="150" height="150" />
          <p>Nom : {selectedCard.nom}</p>
          <p>Propriétaire : {selectedCard.owner}</p>

          <h4>Transférer la carte</h4>
          <input
            type="text"
            placeholder="Nouvelle adresse du propriétaire"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
          />
          <button onClick={handleTransfer}>Transférer</button>
          <button onClick={() => setSelectedCard(null)}>Retour aux cartes</button>
        </div>
      )}
      <p>{message}</p>
    </div>
  );
};
