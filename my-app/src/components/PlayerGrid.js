import React from 'react';

const PlayerGrid = () => {

    const playerTilePhotos = [];

    const handlePlayerTileClick = (index) => {
        // do job here
        console.log(`index: ${index + 1}`);
    }

    return (
        <div className="player-grid">
            {playerTilePhotos.map((tile, index) => (
                <div
                key={index}
                className="player-picture"
                style={{ backgroundImage: `url(${tile})` }}
                onClick={() => handlePlayerTileClick(index)}
                ></div>
            ))}
        </div>
    );

}

export default PlayerGrid;