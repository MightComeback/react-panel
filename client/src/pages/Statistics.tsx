import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setIsNavOpen, setCurrentNavPage } from "../redux/slices/navSlice";

const Statistics = () => {
  const [coinData, setCoinData] = useState([{}]);
  const coinDispatch = useAppDispatch();
  const navDispatch = useAppDispatch();

  const getCoinDataFromServer = () => {
    axios
      .get("/coin_api")
      .then((res) => setCoinData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCoinDataFromServer();
    navDispatch(setCurrentNavPage("stats"));
    navDispatch(setIsNavOpen(false));
  }, []);

  return (
    <div>
      <section>
        {coinData.map((coin, idx) => (
          <div key={idx}>
            <h2 className="text-bold text-sm">
              {coin["name"]} -{" "}
              <span className="text-gray-500">{coin["symbol"]}</span> -{" "}
              <span className="text-yellow-300">{coin["cmc_rank"]}</span>
            </h2>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Statistics;
