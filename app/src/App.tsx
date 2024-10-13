import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import pyLogo from "/py.svg";
import "./App.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { BarData } from "./types/BarChart";
import { ImageData } from "./types/ImageChart";
import axios from "axios";

function App() {
  const [chart_data, setData] = useState<BarData>({
    summary: { avg: 0, total: 0 },
    payload: [{ test_products: "", test_sales: 0 }],
  });
  const [img_data, setImgData] = useState<ImageData>({
    category: [],
    summary: [],
    plot_url: "",
  });

  // todo: fix effect to error not showing up ion console
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/pic")
      .then((res) => setImgData(res.data))
      .catch((er) => {
        console.log("Error: ", er);
      });
  }, []);

  // console.log(chart_data);

  return (
    <div className="container">
      <h1>Flask + React</h1>

      <div>
        {img_data.plot_url ? (
          <img
            src={"data:image/png;base64," + img_data["plot_url"]}
            alt="picture"
          />
        ) : (
          <BarChart width={600} height={400} data={chart_data["payload"]}>
            <XAxis dataKey={"test_products"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"test_sales"} fill="#8884d8" />
          </BarChart>
        )}
      </div>
      <div className="flex justify-center">
        <a href="" target="_blank"></a>
        <img src={pyLogo} className="logo" alt="Python logo" />
        <a href="https://react.dev" target="_blank"></a>
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
    </div>
  );
}

export default App;
