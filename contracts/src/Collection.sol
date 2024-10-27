// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "./Card.sol";

contract Collection {
    string public name;
    uint public cardCount;
    uint private idCollection;
    Card[] private setCard;
    string private imageURI;
  
    constructor(string memory _name, uint _cardCount, uint _idCollection, string memory _imageURI) {
        name = _name;
        cardCount = _cardCount;
        idCollection = _idCollection;
        imageURI = _imageURI;
    }

    function createCard(string memory _cardName, string memory _imageUrl, uint cardId, address creator) public returns (Card) {
        require(setCard.length < cardCount, "Le nombre de cartes a atteint sa limite."); 
        Card newCard = new Card(_cardName, _imageUrl, cardId, creator);  // Ajout de 'creator' comme paramètre
        setCard.push(newCard);
        return newCard;
    }

    function getCards() public view returns (Card[] memory) {
        return setCard;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function getCardCount() public view returns (uint) {
        return cardCount;
    }

    function getId() public view returns (uint) {
        return idCollection;
    }

    function getImageURI() public view returns (string memory) {
        return imageURI; 
    }
}
