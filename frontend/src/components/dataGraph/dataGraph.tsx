import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
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
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    if(key !== "") {
        const isCount = (key.includes('position') || key.includes('mobility'));
        const path = isCount ? 'count' : 'avg';
        const splitKey = key.split('.');
        const body = isCount ? 
        {
            period: splitKey[0],
            position: splitKey[splitKey.length - 1]
        } :
        {
            path: key
        }
        axios
        .post(`/matchData/${path}`, body)
        .then((response) => setData(response.data));
    }
  }, [key]);

  return (
    <>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid />
        <XAxis dataKey="_id" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="number" fill="#8884d8" />
      </BarChart>
      <SelectGraph key={key} setKey={setKey} />
    </>
  );
};

export default DataGraph;
