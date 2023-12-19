import { recordValues } from "./FormattedData";

const RecordPopup = ({ onClose }) => {
    
    return (
        <div className="overlay">
            <div className="popup-container">
                <div>Records</div>
                <div>——————————————</div>
                <div>Completion %: {recordValues.completionPerc[0]} | {recordValues.completionPerc[1]}</div>
                <div>Yards: {recordValues.yards[0]} | {recordValues.yards[1]}</div>
                <div>Intercepts: {recordValues.ints[0]} | {recordValues.ints[1]}</div>
                <div>Rating: {recordValues.rate[0]} | {recordValues.rate[1]}</div>

                <button className="popup-button" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default RecordPopup;