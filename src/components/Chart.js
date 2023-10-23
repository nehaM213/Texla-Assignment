import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";

const size = {
  width: 275,
  height: 250,
};

const data = [
  { value: 5, label: "east" },
  { value: 10, label: "north" },
  { value: 15, label: "south" },
  { value: 20, label: "west" },
];

export default function Chart() {
  return (
    <PieChart
      colors={["#FF5630", "#3366FF", "#36B37E", "#FFAB00"]}
      series={[
        {
          arcLabelMinAngle: 100,
          data,
          innerRadius: 40,
          outerRadius: 70,
          paddingAngle: 0,
          cornerRadius: 0,
          startAngle: -180,
          endAngle: 180,
          cx: 70,
          cy: 95,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: "white",
          fontWeight: "bold",
        },
      }}
      {...size}
    />
  );
}
