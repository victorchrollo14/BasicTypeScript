import { pool } from "../helper.js";

const registerUser = async (userData: {
  username: string;
  email: string;
  password: string;
  bio: string;
  location: string;
}) => {
  try {
    const { username, email, password, bio, location } = userData;
    const user = await pool.query(
      `SELECT * FROM users WHERE email='${email}';`
    );
    if (user.rowCount === 1) {
      console.log(`user already exists`);
      return;
    }
    const insertQuery = `INSERT INTO users(username, email, password, bio, location)
    VALUES ('${username}','${email}', '${password}', '${bio}', '${location}');`;

    const createUser = await pool.query(insertQuery);
    if (createUser.rowCount === 0) {
      console.log(`Some error occured`);
    }

    console.log("user registered successfully");
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (userData: {
  user_id: number;
  username: string;
  location: string;
  bio: string;
}) => {
  try {
    const { user_id, username, location, bio } = userData;
    const findUserQuery = `SELECT user_id from users WHERE user_id=$1`;
    const user = await pool.query(findUserQuery, [user_id]);
    if (user.rowCount === 0) {
      console.log("user not found");
      return;
    }

    const updtQuery = `UPDATE users SET username=$1, location=$2, bio=$3 WHERE user_id=$4`;
    const updateUser = await pool.query(updtQuery, [
      username,
      location,
      bio,
      user_id,
    ]);
    if (updateUser.rowCount === 1) {
      console.log("updated successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (email: string, password: string) => {
  try {
    console.log(email, password);
    const query = `SELECT u.user_id, u.username, u.email, u.bio, u.location, COUNT(t.tweet_id) AS total_tweets,
    (SELECT COUNT(f1.user_id) from follows f1 WHERE f1.user_id = u.user_id) AS follower_count,
    (SELECT COUNT(f2.follower_id) from follows f2 WHERE f2.follower_id = u.user_id) AS following_count
    FROM users u
    LEFT JOIN tweets t ON u.user_id = t.user_id
    WHERE u.email = $1 AND u.password = $2
    GROUP BY u.user_id`;

    const response = await pool.query(query, [email, password]);
    const data = response.rows[0];
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export { registerUser, updateUser, getUser };
