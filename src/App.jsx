import { useState } from 'react';
import './App.css';

function App() {
  // State for bread quantities
  const [smallBread, setSmallBread] = useState(0);
  const [bigBread, setBigBread] = useState(0);

  // Prices
  const SMALL_PRICE = 180;
  const BIG_PRICE = 240;

  //state for selling price 
  const SELLING_SMALL_PRICE = 200;
  const SELLING_BIG_PRICE = 280;

  // Calculate totals
  const smallTotal = smallBread * SMALL_PRICE;
  const bigTotal = bigBread * BIG_PRICE;
  const grandTotal = smallTotal + bigTotal;

  return (
    <div className="app">
      <h1>Bread Cost Calculator 🍞</h1>
      
      <div className="input-group">
        <label>Small Bread (180 each):</label>
        <input
          type="number"
          value={smallBread}
          onChange={(e) => setSmallBread(Number(e.target.value))}
          min="0"
        />
      </div>

      <div className="input-group">
        <label>Big Bread (240 each):</label>
        <input
          type="number"
          value={bigBread}
          onChange={(e) => setBigBread(Number(e.target.value))}
          min="0"
        />
      </div>

      <div className="results">
        <p>Small Bread Total: {smallTotal} </p>
        <p>Big Bread Total: {bigTotal} </p>
        <h2>Grand Total: {grandTotal}</h2>
      </div>
    </div>
  );
}

export default App;