import './App.css';

function App() {
  return (
    <div className="app">

      <div className="c1">
        <div className="head">
          Bill
        </div>
        <div className="price">
          142.55
        </div>

        <div className="head">
          Select Tip %
        </div>
        <button type="submit">5%</button>
        <button type="submit">10%</button>
        <button type="submit">15%</button>
        <button type="submit">25%</button>
        <button type="submit">50%</button>
        <button type="submit">Custom</button>

        <div className="head">
          Number of People
        </div>
      </div>

      <div className="c2">
        <div className="text-container">
          <div className="amount-row">
            <div className="left-text">
              <div className="head">Tip Amount</div>
              <div className="sub">/ person</div>
            </div>
            <div className="amount">$4.27</div>
          </div>

          <div className="amount-row">
            <div className="left-text">
              <div className="head">Total</div>
              <div className="sub">/ person</div>
            </div>
            <div className="amount">$32.79</div>
          </div>
        </div>
        <button type="submit">RESET</button>
      </div>

    </div>
  );
}

export default App;
