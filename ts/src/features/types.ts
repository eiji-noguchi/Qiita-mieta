import itemDataJson from "./qiita/itemData.json";
import userDataJson from "./qiita/userData.json";

export interface User {
  description: null | string;
  facebook_id: null | string;
  followees_count: number;
  followers_count: number;
  github_login_name: null | string;
  id: string;
  items_count: number;
  linkedin_id: null | string;
  location: null | string;
  name: null | string;
  organization: null | string;
  permanent_id: number;
  profile_image_url: string;
  team_only: boolean;
  twitter_screen_name: null | string;
  website_url: null | string;
}

export interface Item {
  rendered_body: string;
  body: string;
  coediting: boolean;
  comments_count: number;
  created_at: string;
  group: any;
  id: string;
  likes_count: number;
  private: boolean;
  reactions_count: number;
  tags: {
    name: string;
    versions: [];
  }[];
  title: string;
  updated_at: string;
  url: string;
  user: User;
  page_views_count: null | number;
  team_membership: any;
}

export interface qiitaState {
  user: User;
  items: Item[];
}
