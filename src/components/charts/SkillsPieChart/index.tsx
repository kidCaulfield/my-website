import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";
import { useIntersectionObserver } from "../../../hooks/useIntersectionObserver";

const data = [
  { name: "Frontend", value: 40 },
  { name: "Backend", value: 50 },
  { name: "Database", value: 30 },
  { name: "Cloud", value: 20 },
];
// colour looks good, possible customize later
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function SkillPieChart() {
  const [constainerRef, trigger]: any = useIntersectionObserver();

  return (
    <div ref={constainerRef}>
      {trigger ? (
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={120}
            cy={200}
            innerRadius={80}
            outerRadius={120}
            fill="#8884d8"
            paddingAngle={1}
            dataKey="value"
            strokeWidth={0}
          >
            {data.map((e, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            verticalAlign="middle"
            layout="vertical"
            align="right"
            height={0}
            iconSize={36}
            formatter={(value) => {
              return (
                <span
                  style={{
                    fontFamily: "Helvetica",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  {value}
                </span>
              );
            }}
          />
        </PieChart>
      ) : (
        <></>
      )}
    </div>
  );
}
