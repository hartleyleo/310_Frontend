import React from 'react';

const Dropdowns = ({ setOption }) => {

  const options = [
    'Brett Favre',
    'Troy Aikman',
    'Aaron Rodgers',
    'John Elway',
    'Roger Staubach',
    'Dan Marino',
    'Drew Brees',
    'Peyton Manning',
    'Joe Montana',
    'Patrick Mahomes',
    'Tom Brady',
    'Steve Young'
];

  return (
    <div className="dropdown-container">
      <div className="dropdown">
        <select
          id="dropdown"
          onChange={(e) => setOption(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdowns;
