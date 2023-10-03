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
import SelectGraph from "../selectGraph/selectGraph";
import { DataGraphProps } from "./dataGraphProps";
import { NumberData, getAvgForGroup, getCountForGroup, groupBy } from "../../utils/general";

const DataGraph: React.FC<DataGraphProps> = (props) => {
  const { data } = props;

  const [graphData, setGraphData] = useState<NumberData[]>([]);
  const [key, setKey] = useState<string>("");

  useEffect(() => {
    const groupedData = groupBy(data, "team");
    setGraphData(key.includes("position") ? getCountForGroup(groupedData, key) : getAvgForGroup(groupedData, key))
  }, [key]);

  return (
    <>
      <ResponsiveContainer width="80%" aspect={2.5}>
        <BarChart data={graphData}>
          <CartesianGrid />
          <XAxis dataKey="team" />
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
