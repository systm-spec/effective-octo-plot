import axios from "axios";
import { useState, useEffect } from "react";
import { ImageData } from "../types/ImageChart";
import NoData from "./NoData";

export default function ImgData() {
  const [img_data, setImgData] = useState<ImageData>({
    category: [],
    summary: [],
    plot_url: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/pic");
        setImgData(res.data);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    if (!img_data.plot_url) {
      fetchData();
    }
    // fetchImgData();
  }, []);

  return (
    (img_data.plot_url && (
      <img
        src={"data:image/png;base64," + img_data["plot_url"]}
        alt="picture"
      />
    )) || <NoData />
  );
}
