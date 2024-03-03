import React, { useState, useEffect } from 'react';
import  { CoinData } from "../../config/api";
import axios from 'axios';
import HeatCoinLarge from './HeatCoinLarge';
import HeatCoinMed from './HeatCoinMed';
import HeatCoinSm from './HeatMapSm';

const HeatMap = () => {
  const [coins, setCoins] = useState([]);
  const fetchCoins = async () => {
    try{
      const { data } = await axios.get(CoinData("USD", 150));
      setCoins(data);
    } catch(err){
      console.log(err)
    } 
  };
  
  useEffect(() => {
    fetchCoins();
  }, []);
  
  return (
    <div className="heatmap">
      <div className="heatmap-container">
        {coins.map((row, index) => (
          index <= 9 ? 
          (
            <HeatCoinLarge 
              key={row.id} // Add a key here
              coinId={row.id} 
              coinSymbol={row.symbol} 
              priceChange={row.price_change_percentage_24h} 
              currentPrice={row.current_price} 
              symbol="$"
            />
          ) :
          index <= 49 ? 
          (
            <HeatCoinMed 
              key={row.id} // Add a key here
              coinId={row.id} 
              coinSymbol={row.symbol} 
              priceChange={row.price_change_percentage_24h} 
              currentPrice={row.current_price} 
              symbol="$"
            />
          ) : 
          (
            <HeatCoinSm 
              key={row.id} // Add a key here
              coinId={row.id} 
              coinSymbol={row.symbol} 
              priceChange={row.price_change_percentage_24h} 
              currentPrice={row.current_price} 
              symbol="$"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default HeatMap;
