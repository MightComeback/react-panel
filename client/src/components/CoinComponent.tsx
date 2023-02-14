import React, { useEffect, useState } from "react";

type CoinData = {
  name: string;
  symbol: string;
  rank: string;
  price: number;
  volume_24h: number;
};

const CoinComponent = ({ name, symbol, rank, price, volume_24h }: CoinData) => {
  const [isVolumeNegative, setIsVolumeNegative] = useState(false);

  useEffect(() => {
    if (volume_24h < 0) setIsVolumeNegative(true);
  }, []);

  return (
    <div>
      <div className="flex items-center justify-start">
        <h2 className="text-bold text-sm">
          {name} - <span className="text-gray-500">{symbol}</span> -{" "}
          <span className="text-yellow-300">{rank}</span>
        </h2>
      </div>
      <div className="">
        <div className="flex justify-between items-center">
          <h3 className="text-md mr-2">${price.toFixed(2)}</h3>
          <p>
            24h volume:{" "}
            <span
              className={isVolumeNegative ? "text-red-300" : "text-green-300"}
            >
              ${volume_24h.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinComponent;
