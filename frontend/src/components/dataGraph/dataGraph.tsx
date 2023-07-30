import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import axios from "../../axios";
import SelectGraph from "../selectGraph/selectGraph";

interface NumberData {
  _id: string;
  number: number;
}

const DataGraph = () => {
  const [data, setData] = useState<NumberData[]>([]);
  const [key, setKey] = useState<string>('');

  useEffect(() => {
    if (key !== "") {
      if (key.includes("mobility")) {
        axios
          .get("/matchData/mobility")
          .then((response) => setData(response.data));
      } else {
        const isCount = key.includes("position");
        const path = isCount ? "count" : "avg";
        const splitKey = key.split(".");
        const body = isCount
          ? {
              period: splitKey[0],
              position: splitKey[splitKey.length - 1],
            }
          : {
              path: key,
            };
        axios
          .post(`/matchData/${path}`, body)
          .then((response) => setData(response.data));
      }
    }
  }, [key]);

  return (
    <>
      <ResponsiveContainer width="80%" aspect={2.5}>
        <BarChart data={data}>
          <CartesianGrid />
          <XAxis dataKey="_id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="number" fill="#ff9c34" />
        </BarChart>
      </ResponsiveContainer>
      <SelectGraph setKey={setKey} />
    </>
  );
};

export default DataGraph;