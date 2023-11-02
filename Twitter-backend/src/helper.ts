import Pool from "pg-pool";
import "dotenv/config";

import {
  createUser,
  createComments,
  createFollow,
  createLike,
  createRetweet,
  createTweet,
} from "./query.js";
import { PoolClient } from "pg";

interface config {
  host: string;
  database: string;
  user: string;
  password: string;
  port: number;
}

const config: config = {
  host: "localhost",
  database: "twitter",
  user: "postgres",
  password: process.env.PASSWORD,
  port: 5432,
};

const pool = new Pool(config);
let client: PoolClient;

const connectDB = async () => {
  try {
    client = await pool.connect();
    console.log(`connected to database`);
  } catch (error) {
    console.log(error);
  }
};

const createTables = async () => {
  try {
    const allQueries = [
      createUser,
      createTweet,
      createFollow,
      createLike,
      createComments,
      createRetweet,
    ];
    for (const query of allQueries) {
      await pool.query(query);
      console.log("created all tables successfully");
    }
  } catch (error) {
    console.log(error);
  }
};

export { connectDB, createTables, pool };
