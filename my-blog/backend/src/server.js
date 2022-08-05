import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const withDB = async (operations, res) => {
  try {
    const { MongoClient } = require("mongodb");
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db("my-blog");

    await operations(db);
  } catch (error) {
    res.status(500).json({ message: "Error connecting to db", error });
  } finally {
    await client.close();
  }
};

app.post("/api/articles/:name/upvote", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    
    await db
      .collection("articles")
      .updateOne(
        { name: articleName },
        { '$set': { upvotes: articleInfo.upvotes + 1 } }
      );

    const updateArticleInfo = await db.collection("articles").findOne({
      name: articleName,
    });   

    res.status(200).json(updateArticleInfo);

  }, res);
});

app.get("/api/articles/:name", async (req, res) => {
  withDB(async (db) => {
    const articleName = req.params.name;
    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });
    res.status(200).json(articleInfo);
  }, res);
});

app.post("/api/articles/:name/add-comment", (req, res) => {
  withDB(async (db)=> {
    const { username, text } = req.body;
    const articleName = req.params.name;

    const articleInfo = await db.collection("articles").findOne({
      name: articleName,
    });

    await db
      .collection("articles")
      .updateOne(
        { name: articleName },
        { $set: { comments: articleInfo.comments.concat({username, text}) } }
      );

    const updateArticleInfo = await db.collection("articles").findOne({
      name: articleName,
    });

    res.status(200).json(updateArticleInfo);
  }, res)
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
