import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../qiitaSlice";
import dayjs from "dayjs";
import { Bar, Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import "chartjs-plugin-colorschemes";
import styles from "./ItemChart.module.css";

const ItemChart: React.FC = () => {
  const itemsData = useSelector(selectItems);

  const items = [...itemsData]
    .reverse()
    .reduce((prev: { [key: string]: number }, currentItem) => {
      const createdAtMonth = dayjs(currentItem.created_at).format("'YY-MM");
      prev[createdAtMonth] = (prev[createdAtMonth] || 0) + 1;
      return prev;
    }, {});

  return (
    <div className={styles.container}>
      <Typography align="center" color="textSecondary" gutterBottom>
        月別投稿数
      </Typography>
      <Bar
        data={{
          labels: Object.keys(items),
          datasets: [
            {
              label: "投稿数",
              data: Object.values(items),
            },
          ],
        }}
        options={{
          legend: { display: false },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  stepSize: 1,
                },
              },
            ],
          },
          plugins: {
            colorschemes: {
              scheme: "brewer.SetThree12",
            },
          },
        }}
      />
    </div>
  );
};

export default ItemChart;
