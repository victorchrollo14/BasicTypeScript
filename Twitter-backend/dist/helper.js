"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = exports.createTables = exports.connectDB = void 0;
const pg_pool_1 = __importDefault(require("pg-pool"));
require("dotenv/config");
const query_js_1 = require("./query.js");
const config = {
    host: "localhost",
    database: "twitter",
    user: "postgres",
    password: process.env.PASSWORD,
    port: 5432,
};
const pool = new pg_pool_1.default(config);
exports.pool = pool;
let client;
const connectDB = async () => {
    try {
        client = await pool.connect();
        console.log(`connected to database`);
    }
    catch (error) {
        console.log(error);
    }
};
exports.connectDB = connectDB;
const createTables = async () => {
    try {
        const allQueries = [
            query_js_1.createUser,
            query_js_1.createTweet,
            query_js_1.createFollow,
            query_js_1.createLike,
            query_js_1.createComments,
            query_js_1.createRetweet,
        ];
        for (const query of allQueries) {
            await pool.query(query);
            console.log("created all tables successfully");
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.createTables = createTables;
//# sourceMappingURL=helper.js.map