"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTweet = exports.createTweet = void 0;
const helper_js_1 = require("../helper.js");
const createTweet = async (user_id, content) => {
    try {
        const query = `INSERT INTO tweets(user_id, content)
      VALUES ($1, $2)`;
        const response = await helper_js_1.pool.query(query, [user_id, content]);
        if (response.rowCount !== 1) {
            console.log("501 internal server eror");
            return;
        }
        console.log("Tweet created successfully");
    }
    catch (error) {
        console.log(error);
    }
};
exports.createTweet = createTweet;
const deleteTweet = async (tweet_id) => {
    try {
        await helper_js_1.pool.query("BEGIN");
        await helper_js_1.pool.query("DELETE FROM LIKES WHERE tweet_id=$1", [tweet_id]);
        await helper_js_1.pool.query(`DELETE FROM retweets WHERE tweet_id=$1`, [tweet_id]);
        await helper_js_1.pool.query(`DELETE FROM comments WHERE tweet_id = $1`, [tweet_id]);
        const response = await helper_js_1.pool.query(`DELETE FROM tweets WHERE tweet_id = $1`, [tweet_id]);
        await helper_js_1.pool.query("COMMIT");
        console.log(`Tweet deleted successfully`);
    }
    catch (error) {
        await helper_js_1.pool.query("ROLLBACK");
        console.log(error);
    }
};
exports.deleteTweet = deleteTweet;
//# sourceMappingURL=tweet.js.map