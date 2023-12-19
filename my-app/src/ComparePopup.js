import { comparisonArray } from "./FormattedData";
import Carousel from "./components/Carousel";
import { useState } from "react";
import Dropdowns from "./components/Dropdowns";
import LineChart from "./components/LineChart";

const ComparePopup = ({ onClose }) => {

    const [playersSelected, setPlayersSelected] = useState(false);
    const [optionOne, setOptionOne] = useState('');
    const [optionTwo, setOptionTwo] = useState('');

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
                <div>
                    <div className="top-section">
                        <div className="text">
                            stat 
                            {/* put stat name here if possible */}
                        </div>
                    </div>
                    <div>——————————————</div>
                    <Carousel playerOne={comparisonArray.find(obj => obj.name === optionOne)} playerTwo={comparisonArray.find(obj => obj.name === optionTwo)}/>
                    {/* <LineChart yData={[1,2,3,5,2,4]} xYears={[1990,1991,1992,1993,1994,1995]} /> */}
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