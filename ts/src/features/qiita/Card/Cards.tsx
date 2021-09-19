import React, { useEffect } from "react";
import styles from "./Cards.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  fetchAsyncGetUser,
  fetchAsyncGetUserItems,
  selectItems,
} from "../qiitaSlice";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Cards: React.FC = () => {
  const userData = useSelector(selectUser);
  const itemData = useSelector(selectItems);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAsyncGetUser("eiji-noguchi00"));
  //   dispatch(fetchAsyncGetUserItems("eiji-noguchi00"));
  // }, [dispatch]);

  let likesCountSum = 0;
  itemData.forEach((item) => {
    likesCountSum = item.likes_count + likesCountSum;
  });

  return (
    <div className={styles.container}>
      <Grid container spacing={1} justifyContent="center">
        <Grid item xs={12} md={3} component={Card} className={styles.items}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              投稿数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={userData.items_count}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.likes}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <FavoriteIcon fontSize="small" color="secondary" />
              いいね数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={likesCountSum}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={styles.followers}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              フォロワー数
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={userData.followers_count}
                duration={1.5}
                separator=","
              />
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
