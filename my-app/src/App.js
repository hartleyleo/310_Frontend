import './App.css';
import PlayerGrid from './PlayerGrid.js';
import React, { useState } from 'react';
import { playerTilePhotos } from './FormattedData.js';
import Popup from './Popup.js';
import ComparePopup from './ComparePopup.js';
import RecordPopup from './RecordPopup.js';

function App() {

  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isComparisonPopupOpen, setComparisonPopupOpen] = useState(false);
  const [isRecordPopupOpen, setRecordPopupOpen] = useState(false);
  const [name, setName] = useState("");

  const openPopup = (playerName) => {
    setPopupOpen(true);
    setName(playerName);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const openComparisonPopup = () => {
    setComparisonPopupOpen(true);
  };

  const closeComparisonPopup = () => {
    setComparisonPopupOpen(false);
  };

  const openRecordPopup = () => {
    setRecordPopupOpen(true);
  };

  const closeRecordPopup = () => {
    setRecordPopupOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Legendary Quarterbacks</h1>
        <PlayerGrid openPopup={openPopup} playerTilePhotos={playerTilePhotos} />
        <div className="buttons">
          <button className="compare-button" onClick={() => openComparisonPopup()}>Compare</button>
          <button className="record-button" onClick={() => openRecordPopup()}>Record</button>
        </div>

        {isPopupOpen && <Popup onClose={closePopup} name={name}/>}
        {isComparisonPopupOpen && <ComparePopup onClose={closeComparisonPopup}/>}
        {isRecordPopupOpen && <RecordPopup onClose={closeRecordPopup}/>}

      </header>
    </div>
  );
}

export default App;
