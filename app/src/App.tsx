import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import pyLogo from "/py.svg";
import "./App.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

type MockData = {
  test_products: string;
  test_sales: number;
};
type Summary = {
  avg: number;
  total: number;
};

interface Chart_Data {
  summary: Summary;
  mock_data: MockData[];
}

interface Data_As_Image {
  category: string[];
  summary: number[];
  plot_url: string;
}

function App() {
  const [chart_data, setData] = useState<Chart_Data>({
    summary: { avg: 0, total: 0 },
    mock_data: [{ test_products: "", test_sales: 0 }],
  });
  const [img_data, setImgData] = useState<Data_As_Image>({
    category: [],
    summary: [],
    plot_url: "",
  });

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((response) => response.json())
      .then((data: Chart_Data) => setData(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/pic")
      .then((res) => res.json())
      .then((data) => setImgData(data));
  }, []);

  console.log(chart_data);
  console.log(typeof chart_data);

  return (
    <div className="container">
      <h1>Flask + React</h1>

      <div>
        {img_data.plot_url ? (
          <img
            src={"data:image/png;base64," + img_data["plot_url"]}
            alt="pensi"
          />
        ) : (
          <BarChart width={600} height={400} data={chart_data["mock_data"]}>
            <XAxis dataKey={"test_products"} />
            <YAxis />
            <Tooltip />
            <Legend className="bg-purple-950" />
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
