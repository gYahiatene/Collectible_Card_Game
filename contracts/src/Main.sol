// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "./Collection.sol";

contract Main {
  address private owner;
  uint public count;
  uint public cardCount;
  mapping(uint => Collection) private collections;
  mapping(uint => Card) private cards;

  constructor() {
    owner = 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266;
    count = 0;
    cardCount = 0;
  }

  function createCollection(string calldata name, uint cardCount, string memory imageURI) external returns (uint) {
        require(msg.sender == owner, "You are not allowed to call this function.");
        collections[count] = new Collection(name, cardCount, count, imageURI);
        count++;
        return count - 1;
    }

  function createCardInCollection(uint collectionId, string memory cardName, string memory imageUrl) external {
      require(msg.sender == owner, "You are not allowed to call this function.");
      require(address(collections[collectionId]) != address(0), "collectionId not defined");
      Collection selectedCollection = collections[collectionId];
      
      // Appel de createCard avec l'adresse du créateur comme argument
      Card newCard = selectedCollection.createCard(cardName, imageUrl, cardCount, owner);  
      cards[cardCount] = newCard; 
      cardCount++;
  }

  function getCollection(Collection _collection) external view returns (uint, string memory, uint, string memory) {
      require(msg.sender == owner, "You are not allowed to call this function.");
      return (_collection.getId(), _collection.getName(), _collection.getCardCount(), _collection.getImageURI());
  }

  function getAllCollections() external view returns (Collection[] memory) {
    require(msg.sender == owner, "You are not allowed to call this function.");
    Collection[] memory allCollections = new Collection[](count);
    for (uint i = 0; i < count; i++) {
        allCollections[i] = collections[i];
    }
    return allCollections;
  }

  function getCardOfCollection(uint collectionId) external view returns (Card[] memory){
    require(msg.sender == owner, "You are not allowed to call this function.");
    require(address(collections[collectionId]) != address(0), "Collection not found.");
    return collections[collectionId].getCards();
  }

  function getCardInfo(Card _card) external view returns (uint, string memory, string memory){
    require(msg.sender == owner, "You are not allowed to call this function.");
    return (_card.getIdCard(), _card.getNameCard(), _card.getImageURI());
  }

  function getOwnerOf(uint idCard) external view returns (address) {
    return cards[idCard].ownerOf(idCard);
  }

  function transferCard(uint cardId, address to) external {
    
    require(address(cards[cardId]) != address(0), "Card not defined");
    cards[cardId].transferFrom(msg.sender, to, cardId);  
  }

  function getAllCard() external view returns (uint){
    return cardCount;
  }
  
  function getCardInfoById(uint id) external view returns (string memory, string memory, uint){
    return (cards[id].getNameCard(), cards[id].getImageURI(), id);
  }
  
}
