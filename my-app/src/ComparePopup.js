import { comparisonArray } from "./FormattedData";
import Carousel from "./components/Carousel";
import { useState } from "react";
import Dropdowns from "./components/Dropdowns";

const ComparePopup = ({ onClose }) => {

    const [playersSelected, setPlayersSelected] = useState(false);
    const [optionOne, setOptionOne] = useState('Brett Favre');
    const [optionTwo, setOptionTwo] = useState('Brett Favre');

    const handleCompareClick = () => {
        setPlayersSelected(true);
    };
    
    return (
        <div className="overlay">
            <div className="popup-container">
                
                {!playersSelected && <div>

                    <div>Choose two players to compare:</div>
                    <Dropdowns setOption={setOptionOne} />
                    <Dropdowns setOption={setOptionTwo} />
                    <div>
                    <button className="compare-button" onClick={handleCompareClick}>
                        Compare
                    </button>
                    <button className="popup-button" onClick={onClose}>
                        Close
                    </button>
                    </div>

                </div>}

                {playersSelected && 
                <div className="popup-container">
                    <Carousel playerOne={comparisonArray.find(obj => obj.name === optionOne)} playerTwo={comparisonArray.find(obj => obj.name === optionTwo)}/>
                    <button className="popup-button" onClick={onClose}>
                        Close
                    </button>
                </div>
                }
            </div>
        </div>
    );
};

export default ComparePopup;