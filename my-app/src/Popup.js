import { playersBestObjArray } from "./FormattedData";

const Popup = ({ onClose, name }) => {

    const foundPlayer = playersBestObjArray.find(obj => obj.name === name);

    return (
        <div className="overlay">
            <div className="popup-container">
                
                <div className="top-section">
                    <div className="text">
                        <p>{name}</p>
                        <p>Total Years Played: {foundPlayer.yearsPlayed}</p>
                    </div>
                </div>
                <div>——————————————</div>
                <div className="bottom-section">
                    <p>Best Completion %: {foundPlayer.completionPerc}</p>
                    <p>Best Yards: {foundPlayer.yards}</p>
                    <p>Best Touchdown Count: {foundPlayer.touchDowns}</p>
                    <p>Best Interceptions: {foundPlayer.int}</p>
                </div>

                <button className="popup-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default Popup;