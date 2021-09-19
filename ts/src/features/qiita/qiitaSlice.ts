import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";
import { Item, qiitaState, User } from "../types";

const baseApiUrl = "https://qiita.com/api/v2";

const initialState: qiitaState = {
  user: {
    description: null,
    facebook_id: null,
    followees_count: 0,
    followers_count: 0,
    github_login_name: null,
    id: "",
    items_count: 0,
    linkedin_id: null,
    location: null,
    name: null,
    organization: null,
    permanent_id: 0,
    profile_image_url: "",
    team_only: false,
    twitter_screen_name: null,
    website_url: null,
  },
  items: [],
};

/** データ取得非同期処理 */
// ユーザーデータを取得
export const fetchAsyncGetUser = createAsyncThunk(
  "qiita/getUser",
  async (userName: string) => {
    const { data } = await axios.get<User>(`${baseApiUrl}/users/${userName}`);
    return data;
  }
);

// 投稿ーデータを取得
export const fetchAsyncGetUserItems = createAsyncThunk(
  "qiita/getUserItems",
  async (userName: string) => {
    const { data } = await axios.get<Item[]>(
      `${baseApiUrl}/users/${userName}/items`
    );
    return data;
  }
);

/** Slice */
const qiitaSlice = createSlice({
  name: "qiita",
  initialState: initialState,
  reducers: {
    // sumLikes(state, action: PayloadAction<Item[]>) {
    //   const likesCountSum = 0;
    //   action.payload.forEach((item) => item.likes_count + likesCountSum);
    //   state.likes = likesCountSum;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetUser.rejected, (state, action) => {
      return {
        ...state,
        user: initialState.user,
      };
    });
    builder.addCase(fetchAsyncGetUserItems.fulfilled, (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    });
    builder.addCase(fetchAsyncGetUserItems.rejected, (state, action) => {
      return {
        ...state,
        items: initialState.items,
      };
    });
  },
});

export const selectUser = (state: RootState) => state.qiita.user;
export const selectItems = (state: RootState) => state.qiita.items;

export default qiitaSlice.reducer;
