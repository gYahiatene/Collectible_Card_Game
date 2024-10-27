  import React, { useState, useEffect } from 'react';
  import './CreateCollection.css';

  interface Collection {
    name: string;
    imageUrl: string;
    numberOfPokemon: number;
  }

  interface Pokemon {
    name: string;
    imageUrl: string;
  }

  interface CreateCollectionProps {
    onLogout: () => void;
    onViewCollections: () => void;
  }

  export const CreateCollection: React.FC<CreateCollectionProps> = ({ onLogout, onViewCollections }) => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [selectedCollection, setSelectedCollection] = useState<Collection | null>(null);
    const [availablePokemon, setAvailablePokemon] = useState<Pokemon[]>([]);
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
    const [collectionName, setCollectionName] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [accountAddress, setAccountAddress] = useState<string | null>(null);

    useEffect(() => {
      const storedAddress = localStorage.getItem('accountAddress');
      if (storedAddress) setAccountAddress(storedAddress);
    }, []);

    const handleLogout = () => {
      setMessage("Déconnexion du compte...");
      localStorage.removeItem('privateKey');
      localStorage.removeItem('accountAddress');
      setAccountAddress(null);
      setSelectedCollection(null);
      setTimeout(() => onLogout(), 500);
    };

    const fetchCollections = async () => {
      try {
        const response = await fetch('http://localhost:8181/availablePokemon');
        const data = await response.json();
        setCollections(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des collections disponibles:', error);
        setMessage('Erreur lors de la récupération des collections disponibles.');
      }
    };

    const fetchPokemonOfCollection = async (collectionName: string) => {
      try {
        const response = await fetch(`http://localhost:8181/collection/${collectionName}`);
        const data = await response.json();
        setAvailablePokemon(data);
      } catch (error) {
        console.error(`Erreur lors de la récupération des Pokémon pour la collection ${collectionName}:`, error);
        setMessage(`Erreur lors de la récupération des Pokémon pour la collection ${collectionName}.`);
      }
    };

    useEffect(() => {
      fetchCollections();
    }, []);

    const handleCollectionSelect = (collection: Collection) => {
      setSelectedCollection(collection);
      setCollectionName(collection.name);
      fetchPokemonOfCollection(collection.name);
      setSelectedPokemon([]);
    };

    const togglePokemonSelection = (pokemon: Pokemon) => {
      setSelectedPokemon((prevSelected) =>
        prevSelected.includes(pokemon)
          ? prevSelected.filter((p) => p !== pokemon)
          : [...prevSelected, pokemon]
      );
    };

    const handleCreateCollection = async () => {
      const privateKey = localStorage.getItem('privateKey');
      const contractAddress = localStorage.getItem('accountAddress')
      if (!privateKey || !selectedCollection) {
        setMessage("Erreur : Clé privée ou collection non trouvée. Veuillez vous reconnecter.");
        return;
      }

      try {
        const response = await fetch('http://localhost:8181/createCollection', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            collectionName,
            nbCard: selectedPokemon.length,
            privateKey,
            contractAddress,
            imageUri: selectedCollection.imageUrl,
            cards: selectedPokemon.map(pokemon => ({
              name: pokemon.name,
              imageUrl: pokemon.imageUrl,
            })),
          }),
        });

        const result = await response.json();
        if (result.collectionCreated === "True") {
          setMessage('Collection et cartes créées avec succès!');
          setSelectedCollection(null);
        } else {
          setMessage(result[0]?.error || 'Échec de la création de la collection.');
        }
      } catch (error) {
        console.error('Erreur lors de la création de la collection:', error);
        setMessage('Erreur lors de la création de la collection.');
      }
    };

    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => setMessage(''), 3000);
        return () => clearTimeout(timer);
      }
    }, [message]);

    return (
      <div className="collection-page ">
        <nav className="navbar">
          <div className="account-info">
            <span>Adresse du compte : {accountAddress}</span>
          </div>
          {/* Barre de navigation dans le composant */}
          <button onClick={onViewCollections} style={{ padding: '10px', cursor: 'pointer' }}>Voir les Collections</button>
          <button onClick={onLogout} style={{ padding: '10px', cursor: 'pointer', backgroundColor: '#ff4d4d' }}>Déconnexion</button>

        </nav>

        <h2>Créer une Collection</h2>
        
            {message && <p className="message">{message}</p>}
        {!selectedCollection ? (
          <div>
            <h3>Choisissez une collection</h3>
            <ul className="collection-list">
              {collections.map((collection) => (
                <li key={collection.name} className="collection-card" onClick={() => handleCollectionSelect(collection)}>
                  <img src={collection.imageUrl} alt={collection.name} />
                  <div className="collection-info">
                    <div className="collection-name">{collection.name}</div>
                    <div className="collection-count">{collection.numberOfPokemon} Pokémon</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <h3>Collection : {selectedCollection.name}</h3>
            <input
              type="text"
              placeholder="Nom de la Collection"
              value={collectionName}
              onChange={(e) => setCollectionName(e.target.value)}
            />
            <div className="button-container">
              <button onClick={handleCreateCollection}>Créer la Collection et les Cartes</button>
              <button onClick={() => setSelectedCollection(null)}>Retour aux Collections</button>
            </div>
            <h4>Sélectionner des Pokémon</h4>
            <p>Sélectionnez jusqu'à {selectedCollection.numberOfPokemon} Pokémon :</p>
            
            <ul className="pokemon-list">
              {availablePokemon.map((pokemon) => (
                <li 
                  key={pokemon.name} 
                  className={`pokemon-card ${selectedPokemon.includes(pokemon) ? 'selected' : ''}`}
                  onClick={() => togglePokemonSelection(pokemon)}
                >
                  <label>
                    <input  
                      type="checkbox"
                      checked={selectedPokemon.includes(pokemon)}
                      readOnly
                    />
                    <img src={pokemon.imageUrl} alt={pokemon.name} />
                    <div className="pokemon-name">{pokemon.name}</div>
                  </label>
                </li>
              ))}
            </ul>

            
          </div>
        )}
      </div>
    );
  };
