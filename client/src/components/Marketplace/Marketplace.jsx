// components/Marketplace/Marketplace.jsx
import { useState } from 'react';
import SellProduct from './SellProduct';
import BuyProduct from './BuyProduct';
import '../../styles/marketplace.css'

const Marketplace = () => {
  const [view, setView] = useState(null);

  return (
    <div className="marketplace-container">
      {!view && (
        <div className="marketplace-options">
          <h2>Welcome to the Farmer Marketplace</h2>
          <p>Choose an option below:</p>
          <div className="options">
            <button onClick={() => setView("sell")}>Sell Product</button>
            <button onClick={() => setView("buy")}>Buy Product</button>
          </div>
        </div>
      )}

      {view === "sell" && <SellProduct />}
      {view === "buy" && <BuyProduct />}
    </div>
  );
};

export default Marketplace;
