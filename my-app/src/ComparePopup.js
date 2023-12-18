import { playersBestObjArray } from "./FormattedData";

const ComparePopup = ({ onClose }) => {

    // const foundPlayer = playersBestObjArray.find(obj => obj.name === name);

    return (
        <div className="overlay">
            <div className="popup-container">
                
                <div className="top-section">
                    <div className="text">
                        aa
                        {/* <p>{name}</p> */}
                        {/* <p>Total Years Played: {foundPlayer.yearsPlayed}</p> */}
                    </div>
                </div>
                <div>——————————————</div>
                <div className="bottom-section">
                    bb
                    {/* <p>Best Completion %: {foundPlayer.completionPerc}</p>
                    <p>Best Yards: {foundPlayer.yards}</p>
                    <p>Best Interceptions: {foundPlayer.int}</p>
                    <p>Best Rate: {foundPlayer.rate}</p> */}
                </div>

                <button className="popup-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default ComparePopup;