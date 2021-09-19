import { Button, makeStyles, TextField, Theme } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncGetUser, fetchAsyncGetUserItems } from "../qiitaSlice";
import styles from "./SwitchUser.module.css";

const useStyles = makeStyles((theme: Theme) => ({
  field: {
    margin: theme.spacing(2),
    minWidth: 240,
  },
}));

const SwitchUser: React.FC = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const classes = useStyles();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <TextField
        label="ユーザー名"
        type="text"
        name="userName"
        className={classes.field}
        InputLabelProps={{
          shrink: true,
        }}
        value={userName}
        onChange={handleInputChange}
      />
      <br />
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => {
          dispatch(fetchAsyncGetUser(userName));
          dispatch(fetchAsyncGetUserItems(userName));
        }}
      >
        検索
      </Button>
    </>
  );
};

export default SwitchUser;
