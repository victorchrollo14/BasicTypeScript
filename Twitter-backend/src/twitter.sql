CREATE TABLE users (
    user_id SERIAL NOT NULL UNIQUE PRIMARY KEY,
    username VARCHAR(60) UNIQUE,
    email VARCHAR(60) UNIQUE,
    password VARCHAR(255),
    bio VARCHAR,
    location VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

CREATE TABLE tweets (
    tweet_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id INT,
    content VARCHAR(280),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE follows (
    follow_id SERIAL,
    user_id INT,
    follower_id INT,
    UNIQUE (user_id, follower_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(follower_id) REFERENCES users(user_id)
);

CREATE TABLE likes (
    like_id SERIAL,
    tweet_id INT,
    user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(tweet_id, user_id),
    FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

CREATE TABLE retweets (
    retweet_id SERIAL,
    tweet_id INT,   
    quote VARCHAR(280),
    retweet_user_id INT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY(retweet_user_id) REFERENCES users(user_id)
);

CREATE TABLE comments (
    comment_id SERIAL,
    tweet_id INT,
    user_id INT,
    content VARCHAR(280),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

SELECT
    u.user_id,
    u.username,
    u.email,
    u.bio,
    u.location,
    COUNT(t.tweet_id) AS total_tweets,
    (
        SELECT
            COUNT(f1.user_id)
        from
            follows f1
        WHERE
            f1.user_id = u.user_id
    ) AS follower_count,
    (
        SELECT
            COUNT(f2.follower_id)
        from
            follows f2
        WHERE
            f2.follower_id = u.user_id
    ) AS following_count
FROM
    users u
    LEFT JOIN tweets t ON u.user_id = t.user_id
WHERE
    u.email = $ 1
    AND u.password = $ 2
GROUP BY
    u.user_id