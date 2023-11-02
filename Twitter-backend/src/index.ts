import { connectDB } from "./helper.js";
import { registerUser, updateUser } from "./controllers/user.js";

connectDB();

// let's simulate the functions user would do on twitter
// 1) user => create account, login, update profile, delete account.
// 2) after logging In => create tweets, deleting tweets, comment on tweets, like tweets, retweet tweets.
// 3) other functions => follow other_users, unfollow other_users.

// create user
const userData = {
  username: "Victor",
  email: "Victor@gmail.com",
  password: "Ambrose",
  bio: "just a new bio",
  location: "bangalore",
};
registerUser(userData);

// update user
const newData = {
  user_id: 5,
  username: "chrollo34je",
  location: "hyderabad",
  bio: "from hyderabad, phatom troupe",
};

updateUser(newData);
