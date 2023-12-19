import React, { useState } from 'react';
import LineChart from './LineChart';

const TabContent = ({ playerOneData, playerTwoData }) => {

    console.log(playerOneData[0]);
    console.log(playerOneData[1]);

    return (
        <div>
            <div style={{ float: 'left', width: '50%' }}>
                <LineChart yData={playerOneData[0]} xYears={playerOneData[1]}/>
            </div>
            <div style={{ float: 'right', width: '50%' }}>
                <LineChart yData={playerTwoData[0]} xYears={playerTwoData[1]} />
            </div>
        </div>
    );
  
};

const Carousel = ({ playerOne, playerTwo }) => {
  const [activeTab, setActiveTab] = useState(1);

  console.log(playerOne);

  console.log(playerTwo);

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
        <button onClick={() => handleTabChange('left')}>Prev</button>
        <div className={`tab-content ${activeTab === 1 ? 'active' : ''}`}>
          <TabContent playerOneData={ [ [5,10,4,6,7,1], [12,13,14,15,16,17] ] } playerTwoData={ [ [6,3,15,3,7,15], [12,13,14,15,16,17] ] }/>
            one
        </div>
        <div className={`tab-content ${activeTab === 2 ? 'active' : ''}`}>
          <TabContent playerOneData={ [ playerOne.yards, playerOne.years ] } playerTwoData={ [ playerTwo.yards, playerTwo.years ] }/>
            two
        </div>
        <div className={`tab-content ${activeTab === 3 ? 'active' : ''}`}>
          <TabContent playerOneData={ [ playerOne.int, playerOne.years ] } playerTwoData={ [ playerTwo.int, playerTwo.years ] }/>
            three
        </div>
        <div className={`tab-content ${activeTab === 4 ? 'active' : ''}`}>
          <TabContent playerOneData={ [ playerOne.rate, playerOne.years ] } playerTwoData={ [ playerTwo.rate, playerTwo.years ] }/>
            four
        </div>
        <button onClick={() => handleTabChange('right')}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
