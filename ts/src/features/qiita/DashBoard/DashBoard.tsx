import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Cards";
import ItemChart from "../Item/ItemChart";
import {
  fetchAsyncGetUser,
  fetchAsyncGetUserItems,
  selectItems,
  selectUser,
} from "../qiitaSlice";
import SwitchUser from "../SwitchUser/SwitchUser";
import TagChart from "../Tag/TagChart";
import styles from "./DashBoard.module.css";

const DashBoard: React.FC = () => {
  const userData = useSelector(selectUser);
  const itemData = useSelector(selectItems);

  return (
    <div>
      <AppBar position="absolute">
        <Toolbar className={styles.title}>
          <Typography variant="h6">Qiita Dashboard</Typography>
          <Typography variant="body1">
            {userData.id === "" ? "名無しさん" : userData.id}
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={styles.content}>
        <div className={styles.container}>
          <SwitchUser />
        </div>
        {itemData.length !== 0 && (
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Cards />
            </Grid>
            <Grid item xs={12} md={6}>
              <ItemChart />
            </Grid>
            <Grid item xs={12} md={6}>
              <TagChart />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
};

export default DashBoard;
