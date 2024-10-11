import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import pyLogo from "/py.svg";
import "./App.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function App() {
  // const [count, setCount] = useState(0);
  const [a_data, setData] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  console.log(a_data);
  console.log(typeof a_data);
  return (
    <div className="container">
      <div className="flex justify-center">
        <a href="" target="_blank">
          <img src={pyLogo} className="logo" alt="Python logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <BarChart width={600} height={400} data={a_data.mock_data}>
          <XAxis dataKey={"test_products"} />
          <YAxis />
          <Tooltip />
          <Legend className="bg-purple-950" />
          <Bar dataKey={"test_sales"} fill="#8884d8" />
        </BarChart>
      </div>
      <h1>Flask + React</h1>
      {/* <div className="card">
        <p>Here's a button for you!</p>
        <button className="mt-2" onClick={() => setCount((count) => count + 1)}>
          My count is {count}
        </button>
        <p className="mt-4">
          A <code>Web-Layout</code> for my projects.
        </p>
      </div> */}
      {/* <p className="read-the-docs">docu link here soon..</p> */}
    </div>
  );
}

export default App;
