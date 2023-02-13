import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setIsNavOpen, setCurrentNavPage } from "../redux/slices/navSlice";

const Statistics = () => {
  const [coinData, setCoinData] = useState([{}]);
  const navDispatch = useAppDispatch();

  const getCoinDataFromServer = () => {
    axios
      .get("/coin_api")
      .then((res) => {
        setCoinData(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCoinDataFromServer();
    navDispatch(setCurrentNavPage("stats"));
    navDispatch(setIsNavOpen(false));
  }, []);

  return (
    <div>
      <section className="px-8 flex items-center justify-center flex-wrap">
        {coinData.map((coin, idx) => (
          <div
            className="shadow-md w-full max-w-[16rem] h-full p-2 m-4 rounded-lg
             flex flex-col space-y-2"
            key={idx}
          >
            <div className="flex items-center justify-start">
              <h2 className="text-bold text-sm">
                {coin["name"]} -{" "}
                <span className="text-gray-500">{coin["symbol"]}</span> -{" "}
                <span className="text-yellow-300">{coin["cmc_rank"]}</span>
              </h2>
            </div>
            <div className="">
              <div className="flex justify-between items-center">
                <h3 className="text-md mr-2">
                  ${coin["quote"].USD.price.toFixed(2)}
                </h3>
                <p>
                  24h change:{" "}
                  <span className="text-green-300">
                    ${coin["quote"].USD.volume_change_24h.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Statistics;
