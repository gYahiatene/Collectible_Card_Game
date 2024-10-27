var http = require('http');

var cors = require("cors");
const axios = require("axios");
const express = require("express");
const {checkKeyForAccount} = require("./authentification")
const {getAllCard, getCollections, createCard, getCardOfCollection, createCollectionAndCards, transferCard} = require("./collection")

const app = express();

var serveur = http.createServer(app);
app.use(express.urlencoded({extended : true}));
app.use(cors());


const port = 8181;

app.use(express.json({
    type: "*/*" 
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.post('/connection', async function(req, res){
    try{
        const  {adresse, privateKey} = req.body;

        if(!adresse || !privateKey){
            res.send([{ error: 'Donnée manquante' }])
            return;
        }
        const addr  = await checkKeyForAccount(privateKey)
        console.log("La connexion: ", addr)
        if(addr != false){
            if(addr == adresse){
                console.log("La connexion: ", addr)
                res.send([{ isConnected: "True", "adresse": adresse, "privateKey": privateKey}]);
            }
        }
    }catch (error){
        res.send([{ error: 'Erreur' }])
    }
})
app.get('/availablePokemon', async (req, res) => {
    try {
        // Appel vers l'API Pokémon pour obtenir les types (collections)
        const response = await axios.get('https://pokeapi.co/api/v2/type');
        const typeList = response.data.results;

        // Récupération des détails pour chaque type pour obtenir un Pokémon représentatif avec son image stylisée
        const collectionsWithImages = await Promise.all(
            typeList.map(async (type) => {
                // Obtenir la liste des Pokémon pour chaque type
                const typeDetailsResponse = await axios.get(type.url);
                const typeDetailsData = typeDetailsResponse.data;

                // Sélectionner le premier Pokémon du type comme image représentative
                const firstPokemon = typeDetailsData.pokemon[0]?.pokemon;
                let imageUrl = '';

                if (firstPokemon) {
                    // Récupérer les détails du premier Pokémon pour obtenir l'URL de l'image
                    const pokemonDetailsResponse = await axios.get(firstPokemon.url);
                    const pokemonData = pokemonDetailsResponse.data;
                    
                    // Vérification des autres sprites disponibles
                    // Utilisation de sprites supplémentaires pour une image de carte plus stylisée, si disponible
                    imageUrl = pokemonData.sprites.other['official-artwork'].front_default 
                        || pokemonData.sprites.front_default 
                        || ''; // Utilisation de l'image officielle par défaut
                }

                return {
                    name: type.name,                // Nom du type de Pokémon
                    imageUrl: imageUrl || '',       // URL de l'image stylisée du premier Pokémon
                    numberOfPokemon: typeDetailsData.pokemon.length // Nombre de Pokémon dans ce type
                };
            })
        );

        res.json(collectionsWithImages); // Renvoyer la liste des types avec noms et images stylisées
    } catch (error) {
        console.error("Erreur lors de la récupération des collections de Pokémon:", error.message);
        res.status(500).json({ error: "Erreur lors de la récupération des collections de Pokémon." });
    }
});


// Nouvelle route pour obtenir toutes les cartes d'une collection spécifique
app.get('/collection/:type', async (req, res) => {
    const { type } = req.params;

    try {
        // Obtenir tous les Pokémon d'un type donné
        const typeResponse = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
        const pokemonList = typeResponse.data.pokemon;

        // Obtenir les détails de chaque Pokémon pour obtenir leur image
        const pokemonDetails = await Promise.all(
            pokemonList.map(async (pokemonEntry) => {
                const pokemonUrl = pokemonEntry.pokemon.url;
                const detailsResponse = await axios.get(pokemonUrl);
                const detailsData = detailsResponse.data;

                // Remplacer l'URL de sprite par une image HD (par exemple, depuis un CDN tiers)
                const pokemonId = detailsData.id;
                const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;

                return {
                    name: detailsData.name,
                    imageUrl
                };
            })
        );

        res.json(pokemonDetails); // Retourne la liste complète des Pokémon avec noms et images HD
    } catch (error) {
        console.error(`Erreur lors de la récupération des cartes pour la collection ${type}:`, error.message);
        res.status(500).json({ error: `Erreur lors de la récupération des cartes pour la collection ${type}.` });
    }
});
app.post('/createCollection', async (req, res) => {
    const { collectionName, nbCard, privateKey,imageUri, cards, contractAddress } = req.body;
  
    const result = await createCollectionAndCards(collectionName, nbCard, imageUri, privateKey, cards, contractAddress);
    if (result) {
      res.json({ collectionCreated: "True" });
    } else {
      res.status(500).json({ error: "Erreur lors de la création de la collection et des cartes." });
    }
  });
  

app.post('/getCollection', async function(req, res){
    try{
        const privateKey = req.body.privateKey;
        const collection = await getCollections(privateKey);
        res.send(collection)
    }catch(error){
        console.log(error.message)
        res.send([])
    }
})

app.post('/getCardOfCollection', async function(req, res){
    try{
        const privateKey = req.body.privateKey;
        const collectionId = req.body.collectionId; 
        const cards = await getCardOfCollection(privateKey, collectionId);
        res.send(cards)
    }catch(error){
        console.log(error.message)
        res.send([])
    }
})

app.post('/mintCard', async function(req, res){
    try{
        const privateKey = req.body.privateKey;
        const cardId = req.body.cardId; 
        const addressTo = req.body.addressTo; 
        const result = await mintCard(privateKey, idCard, addressTo)
        if(result){
            res.send([{"info": "La carte a bien été donnée à l'adresse donnée."}])
        }else{
            res.send([{"info": "Il y a une erreur : soit la carte a déjà été donnée à un utilisateur, soit elle n'existe pas, ou il y a une autre erreur."}])
        }
    }catch (error){
        res.send([{"info": "Il y a une erreur."}])
    }
})

app.post('/transferCard', async function(req, res){
    try{
        console.log("J'ai recu : ", req.body)
        const privateKey = req.body.privateKey;
        const cardId = req.body.cardId; 
        const addressTo = req.body.addressTo; 
        const result = await transferCard(privateKey, cardId, addressTo)
        if(result){
            res.send(true)
        }else{
            res.send([{"info": "Il y a une erreur : soit la carte n'est pas associée à la clé privée donnée, soit elle n'existe pas, ou il y a une autre erreur."}])
        }
    }catch (error){
        res.send([{"info": "Il y a une erreur."}])
    }
})

app.post('/getAllCards', async function(req, res){
    try{
        const privateKey = req.body.privateKey;
        
        const result = await getAllCard(privateKey)
        if(result){
            res.send(result)
        }else{
            res.send([{"info": "Il y a une erreur."}])
        }
    }catch (error){
        res.send([{"info": "Il y a une erreur."}])
    }
})

serveur.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});