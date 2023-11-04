"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helper_js_1 = require("./helper.js");
const user_js_1 = require("./controllers/user.js");
const tweet_js_1 = require("./controllers/tweet.js");
(0, helper_js_1.connectDB)();
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
(0, user_js_1.getUser)("johndoe1@example.com", "password1");
// create Tweet
(0, tweet_js_1.createTweet)(67, "football wa Waku Waku");
// delete tweet
(0, tweet_js_1.deleteTweet)(25);
//# sourceMappingURL=index.js.map