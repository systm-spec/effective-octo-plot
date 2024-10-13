import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import { BarData } from "../types/BarChart";
import axios from "axios";
import NoData from "./NoData";

export default function BarTest() {
  const [chart_data, setData] = useState<BarData>({
    summary: { avg: 0, total: 0 },
    payload: [{ test_products: "", test_sales: 0 }],
    isPayload: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/data");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    if (!chart_data.isPayload) {
      fetchData();
    }
  }, []);

  return (
    (chart_data.isPayload && (
      <BarChart width={600} height={400} data={chart_data["payload"]}>
        <XAxis dataKey={"test_products"} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={"test_sales"} fill="#8884d8" />
      </BarChart>
    )) || <NoData />
  );
}
