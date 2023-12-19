import React, { useState } from 'react';
import LineChart from './LineChart';

const TabContent = ({ playerOneData, playerTwoData, yLabel }) => {

    return (
        <div>
            <div>{playerOneData[0]}</div>
            <LineChart yData={playerOneData[1]} xYears={playerOneData[2]} yLabel={yLabel}/>
            <div>{playerTwoData[0]}</div>
            <LineChart yData={playerTwoData[1]} xYears={playerTwoData[2]} yLabel={yLabel}/>
        </div>
    );
  
};

const Carousel = ({ playerOne, playerTwo }) => {

  const [activeTab, setActiveTab] = useState(1);

  const handleTabChange = (direction) => {
    setActiveTab((prevTab) => {
      if (direction === 'left') {
        return prevTab > 1 ? prevTab - 1 : 4;
      } else {
        return prevTab < 4 ? prevTab + 1 : 1;
      }
    });
  };

  return (
    <div className="carousel-container">

    
      <div className="tab">
        <button onClick={() => handleTabChange('left')} className="Previous-Button">←</button>

        {activeTab === 1 &&
            <div>
                <div>Completion Percentage</div>
                <div>——————————————</div>
                <TabContent playerOneData={ [ playerOne.name, playerOne.completionPerc, playerOne.years ] } playerTwoData={ [ playerTwo.name, playerTwo.completionPerc, playerTwo.years ] } yLabel={'Percentage /100'}/>
            </div>
        }
        {activeTab === 2 &&
            <div>
                <div>Yards</div>
                <div>——————————————</div>
                <TabContent playerOneData={ [ playerOne.name, playerOne.yards, playerOne.years ] } playerTwoData={ [ playerTwo.name, playerTwo.yards, playerTwo.years ] } yLabel={'Yards'}/>
            </div>
        }
        {activeTab === 3 &&
            <div>
                <div>Interceptions</div>
                <div>——————————————</div>
                <TabContent playerOneData={ [ playerOne.name, playerOne.int, playerOne.years ] } playerTwoData={ [ playerTwo.name, playerTwo.int, playerTwo.years ] } yLabel={'Intercepts'}/>
            </div>
        }
        {activeTab === 4 &&
            <div>
                <div>Rates</div>
                <div>——————————————</div>
                <TabContent playerOneData={ [ playerOne.name, playerOne.rate, playerOne.years ] } playerTwoData={ [ playerTwo.name, playerTwo.rate, playerTwo.years ] } yLabel={'Rate'}/>
            </div>
        }
        <button onClick={() => handleTabChange('right')} className="Next-Button">→</button>
      </div>
    </div> 
  );
};

export default Carousel;
