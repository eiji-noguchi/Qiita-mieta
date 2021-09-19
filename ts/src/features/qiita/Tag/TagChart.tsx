import React from "react";
import { Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { selectItems } from "../qiitaSlice";
import "chartjs-plugin-colorschemes";

const TagChart: React.FC = () => {
  const itemsData = useSelector(selectItems);

  const tags = itemsData.reduce((prev: string[], currentItem) => {
    return prev.concat(currentItem.tags.map((tag) => tag.name));
  }, []);

  const tagsCount = tags.reduce((prev: { [key: string]: number }, current) => {
    prev[current] = (prev[current] || 0) + 1;
    return prev;
  }, {});

  return (
    <>
      <Typography align="center" color="textSecondary" gutterBottom>
        タグ一覧
      </Typography>
      <Doughnut
        data={{
          labels: Object.keys(tagsCount),
          datasets: [
            {
              data: Object.values(tagsCount),
            },
          ],
        }}
        options={{
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 15,
            },
          },
          plugins: {
            colorschemes: {
              scheme: "brewer.SetThree12",
            },
          },
        }}
      />
    </>
  );
};

export default TagChart;
