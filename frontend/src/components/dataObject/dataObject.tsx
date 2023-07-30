import { TableCell } from "@mui/material";
import DataObjectProps from "./dataObjectProps";
import { GpState } from "../../interfaces/interfaces";

const DataObject: React.FC<DataObjectProps> = (props) => {
  const { object } = props;

  return Object.values(object).map((value, index) =>
    typeof value === "object" ? (
      Object.values(value as GpState).map((innerValue, innerIndex) => (
        <TableCell key={innerIndex}>{innerValue.toString()}</TableCell>
      ))
    ) : (
      <TableCell key={index}>{value.toString()}</TableCell>
    )
  );
};

export default DataObject;
