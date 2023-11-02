"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.createTweet = exports.createRetweet = exports.createLike = exports.createFollow = exports.createComments = void 0;
const createUser = `CREATE TABLE users (
    user_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
    username VARCHAR(60) UNIQUE,
    email VARCHAR(60) UNIQUE,
    password VARCHAR(255),
    bio VARCHAR,
    location VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);`;
exports.createUser = createUser;
const createTweet = `CREATE TABLE tweets (
    tweet_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT,
    content VARCHAR(280),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);`;
exports.createTweet = createTweet;
const createFollow = `CREATE TABLE follows (
    follow_id SERIAL,
    user_id INT,
    follower_id INT,
    UNIQUE (user_id, follower_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(follower_id) REFERENCES users(user_id)
);`;
exports.createFollow = createFollow;
const createLike = `CREATE TABLE likes (
    like_id SERIAL,
    tweet_id INT,
    user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);`;
exports.createLike = createLike;
const createRetweet = `CREATE TABLE retweets (
    retweet_id SERIAL,
    tweet_id INT,
    quote VARCHAR(280),
    retweet_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY(retweet_user_id) REFERENCES users(user_id)
);`;
exports.createRetweet = createRetweet;
const createComments = `CREATE TABLE comments (
    comment_id SERIAL,
    tweet_id INT,
    user_id INT,
    content VARCHAR(280),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);`;
exports.createComments = createComments;
//# sourceMappingURL=query.js.map