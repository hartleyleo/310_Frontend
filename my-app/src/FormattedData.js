import qbData from "./QBdata";

const playerTilePhotos = [
    [ './playerCards/favre_player_card.png', 'Brett Favre' ],
    [ './playerCards/aikman_player_card.png', 'Troy Aikman' ],
    [ './playerCards/rodgers_player_card.png', 'Aaron Rodgers' ],
    [ './playerCards/elway_player_card.png', 'John Elway' ],
    [ './playerCards/staubach_player_card.png', 'Roger Staubach' ],
    [ './playerCards/marino_player_card.png', 'Dan Marino' ],
    [ './playerCards/brees_player_card.png', 'Drew Brees' ],
    [ './playerCards/manning_player_card.png', 'Peyton Manning' ],
    [ './playerCards/montana_player_card.png', 'Joe Montana' ],
    [ './playerCards/mahomes_player_card.png', 'Patrick Mahomes' ],
    [ './playerCards/brady_player_card.png', 'Tom Brady' ],
    [ './playerCards/young_player_card.png', 'Steve Young' ]
];

const bestPlayerStats = new Map();

qbData.forEach(entry => {
    const [name, year, completionPerc, yards, int, rate] = entry;
    const player = bestPlayerStats.get(name);

    if (player) {
        player.yearsPlayed++;
        player.completionPerc = Math.max(player.completionPerc, completionPerc);
        player.yards = Math.max(player.yards, yards);
        player.int = Math.max(player.int, int);
        player.rate = Math.max(player.rate, rate);
    } else {
        bestPlayerStats.set(name, {
            name,
            yearsPlayed: 1,
            completionPerc,
            yards,
            int,
            rate
        });
    }
});

// Convert the Map values to an array of player objects
const playersBestObjArray = Array.from(bestPlayerStats.values());

const resultObject = {};

qbData.forEach((entry) => {
    const [name, year, completionPerc, yards, int, rate] = entry;

    if (resultObject[name]) {
        // If the entry already exists, append values to their respective arrays
        resultObject[name].years.push(year);
        resultObject[name].completionPerc.push(completionPerc);
        resultObject[name].yards.push(yards);
        resultObject[name].int.push(int);
        resultObject[name].rate.push(rate);
    } else {
        // If the entry doesn't exist, create a new object with arrays
        resultObject[name] = {
            years: [year],
            completionPerc: [completionPerc],
            yards: [yards],
            int: [int],
            rate: [rate],
        };
    }
});

// Convert the resultObject into an array of objects
const comparisonArray = Object.keys(resultObject).map((name) => ({
    name,
    years: resultObject[name].years,
    completionPerc: resultObject[name].completionPerc,
    yards: resultObject[name].yards,
    int: resultObject[name].int,
    rate: resultObject[name].rate,
}));

console.log(comparisonArray);

export {
    playerTilePhotos,
    playersBestObjArray,
    comparisonArray
};