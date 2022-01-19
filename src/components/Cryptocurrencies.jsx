import React from 'react';
import './cryptocurrencies.css'
import Coin from "./Coin";

const Cryptocurrencies = ({ onChange, coins }) => {
  return (
    <div>
    <div className="coin-search">
    <h1 className="coin-text">Cryptocurrencies</h1>
    <form>
      <input type='text' placeholder="Search..." className="coin-input"
      onChange={onChange}></input>
    </form>
    </div>
    {coins.map(coin => {
      return (
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.total_volume}
          volume={coin.market_cap}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      );
    })}
    </div>
    );
};

export default Cryptocurrencies;
