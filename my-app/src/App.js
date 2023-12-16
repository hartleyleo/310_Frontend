import './App.css';
import PlayerGrid from './components/PlayerGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Legendary Quarterbacks</h1>
        <PlayerGrid />
        <div className="buttons">
          <button className="compare-button">Compare</button>
          <button className="record-button">Record</button>
        </div>
      </header>
    </div>
  );
}

export default App;
