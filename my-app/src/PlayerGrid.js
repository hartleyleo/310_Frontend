import React from 'react';

const PlayerGrid = ({ openPopup, playerTilePhotos }) => {

    const handlePlayerTileClick = (name) => {
        openPopup(name);
    }

    return (
        <div className="player-grid">
            {
                playerTilePhotos.map((photo, index) => (
                    <div
                    key={index}
                    className="player-picture"
                    onClick={() => handlePlayerTileClick(photo[1])}
                    >
                    <img src={require(`${photo[0]}`)} alt="brady" width="100" height="100"/>
                    </div> 
                ))
            }
        </div>
    );

}

export default PlayerGrid;