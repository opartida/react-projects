import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

app.post("/api/articles/:name/upvote", async (req, response) => {
  try {
    const { MongoClient } = require("mongodb");
    const articleName = req.params.name;
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    await client.connect();
    const db = client.db("my-blog");

    const articleInfo = await db.collection('articles').findOne({ name: articleName });
    console.log(articleInfo)
    await db
      .collection("articles")
      .updateOne(
        { name: articleName },
        { '$set': { upvotes: articleInfo.upvotes + 1 } }
      );
    const updateArticleInfo = await db.collection('articles').findOne({
      name: articleName,
    });
    response.status(200).json(updateArticleInfo);
  } catch (error) {
    response.status(500).json({ message: "Error connecting to db", error });
  } finally {
    await client.close();
  }
});

app.post("/api/articles/:name/add-comment", (req, response) => {
  const { username, text } = req.body;
  const articleName = req.params.name;
  articlesInfo[articleName].comments.push({ username, text });
  response.status(200).send(articlesInfo[articleName]);
});

app.get("/api/articles/:name", async (req, response) => {
  try {
    const { MongoClient } = require("mongodb");
    const articleName = req.params.name;
    const uri = "mongodb://localhost:27017";
    const client = new MongoClient(uri);

    await client.connect();

    const db = client.db("my-blog");

    const articleInfo = await db
      .collection("articles")
      .findOne({ name: articleName });

    response.status(200).json(articleInfo);
  } catch (error) {
    response.status(500).json({ message: "Error connecting to db", error });
  } finally {
    await client.close();
  }
});

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
