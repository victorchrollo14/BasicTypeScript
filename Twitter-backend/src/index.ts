import { pool, connectDB } from "./helper.js";

connectDB();

// let's simulate the functions user would do on twitter
// 1) user => create account, login, update profile, delete account.
// 2) after logging In => create tweets, deleting tweets, comment on tweets, like tweets, retweet tweets.
// 3) other functions => follow other_users, unfollow other_users.

