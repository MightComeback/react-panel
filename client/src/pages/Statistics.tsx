import axios from "axios";
import React, { useEffect, useState } from "react";
import CoinComponent from "../components/CoinComponent";
import { useAppDispatch } from "../redux/hooks";
import { setIsNavOpen, setCurrentNavPage } from "../redux/slices/navSlice";
import ReactECharts from "echarts-for-react";

const Statistics = () => {
  const [coinData, setCoinData] = useState([{}]);
  const [chartOptions, setChartOptions] = useState({});
  const [coinDataIsLoaded, setCoinDataIsLoaded] = useState(false);
  const navDispatch = useAppDispatch();

  let options = {
    xAxis: {
      type: "category",
      data: ["1h", "24h", "7d", "30d", "60d", "90d"],
    },
    yAxis: {
      type: "percent %",
    },
    series: [
      {
        data: [],
        type: "bar",
      },
    ],
  };

  const getCoinDataFromServer = () => {
    axios
      .get("/coin_api")
      .then((res) => {
        setCoinData(res.data);
        setCoinDataIsLoaded(true);
        console.log("Coindata is loaded");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCoinDataFromServer();
    navDispatch(setCurrentNavPage("stats"));
    navDispatch(setIsNavOpen(false));
  }, []);

  return (
    <div className="flex items-center justify-center">
      {coinDataIsLoaded ? (
        <section className="px-8 flex items-center justify-center flex-wrap">
          {coinData.map((coin, idx) => (
            <div
              className="shadow-md w-full max-w-5xl h-full p-2 m-4 rounded-lg
             flex flex-col space-y-2"
              key={idx}
            >
              <CoinComponent
                name={coin["name"]}
                symbol={coin["symbol"]}
                rank={coin["cmc_rank"]}
                price={coin["quote"].USD.price}
                volume_24h={coin["quote"].USD.volume_change_24h}
              />
              <ReactECharts
                option={{
                  xAxis: {
                    type: "category",
                    data: ["1h", "24h", "7d", "30d", "60d", "90d"],
                  },
                  yAxis: {
                    type: "value",
                  },
                  series: [
                    {
                      data: [
                        coin["quote"].USD.percent_change_1h,
                        coin["quote"].USD.percent_change_24h,
                        coin["quote"].USD.percent_change_7d,
                        coin["quote"].USD.percent_change_30d,
                        coin["quote"].USD.percent_change_60d,
                        coin["quote"].USD.percent_change_90d,
                      ],
                      type: "bar",
                    },
                  ],
                }}
              />
            </div>
          ))}
        </section>
      ) : (
        <p>Loading Coin Data...</p>
      )}
    </div>
  );
};

export default Statistics;
