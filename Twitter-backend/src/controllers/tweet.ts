import { Pool } from "pg";
import { pool } from "../helper.js";

const createTweet = async (user_id: number, content: string) => {
  try {
    const query = `INSERT INTO tweets(user_id, content)
      VALUES ($1, $2)`;
    const response = await pool.query(query, [user_id, content]);

    if (response.rowCount !== 1) {
      console.log("501 internal server eror");
      return;
    }

    console.log("Tweet created successfully");
  } catch (error) {
    console.log(error);
  }
};

const deleteTweet = async (tweet_id: number) => {
  try {
    await pool.query("BEGIN");
    await pool.query("DELETE FROM LIKES WHERE tweet_id=$1", [tweet_id]);
    await pool.query(`DELETE FROM retweets WHERE tweet_id=$1`, [tweet_id]);
    await pool.query(`DELETE FROM comments WHERE tweet_id = $1`, [tweet_id]);
    const response = await pool.query(
      `DELETE FROM tweets WHERE tweet_id = $1`,
      [tweet_id]
    );
    await pool.query("COMMIT");
    console.log(`Tweet deleted successfully`);
  } catch (error) {
    await pool.query("ROLLBACK");
    console.log(error);
  }
};

export { createTweet, deleteTweet };
