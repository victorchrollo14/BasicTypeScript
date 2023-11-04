import { connectDB } from "./helper.js";
import { registerUser, updateUser, getUser } from "./controllers/user.js";
import { createTweet, deleteTweet } from "./controllers/tweet.js";

connectDB();

// let's simulate the functions user would do on twitter
// 1) user => create account, login, update profile, delete account, getUser data.
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
// registerUser(userData);

// update user
const newData = {
  user_id: 5,
  username: "chrollo34je",
  location: "hyderabad",
  bio: "from hyderabad, phatom troupe",
};
// updateUser(newData);

// getUser Data => userdata, total tweets, following count, follwer count
getUser("johndoe1@example.com", "password1");

// create Tweet
createTweet(67, "football wa Waku Waku");

// delete tweet
deleteTweet(25);
