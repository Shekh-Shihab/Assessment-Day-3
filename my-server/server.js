const express = require('express')
const app = express()
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });
const { TwitterApi } = require("twitter-api-v2");

app.use(cors({
  origin: "*", // replace with your frontend url
}));
app.use(express.json());

app.get('/getAuthLink',async (req, res) =>{
    const client = new TwitterApi({
      appKey: process.env.API_KEY,
      appSecret: process.env.API_SECRET,
    });
    const twitterClient = client.readWrite;  
    const authLink = await twitterClient.generateAuthLink(
      "https://f7e8-103-204-209-115.ngrok-free.app/dashboard",
      {linkMode: "authorize"}
    );
    console.log(authLink)
    res.json(authLink);
})

app.listen(4000, () => {
  console.log('Server is running on port 4000');
});