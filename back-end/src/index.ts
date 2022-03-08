// tslint:disable:no-console
import express from "express";
import { ConnectOptions, MongoClient } from "mongodb";
const app = express();
const port = 8080;

const DBclient = new MongoClient(
  "mongodb://localhost:27017/?maxPoolSize=20&w=majority",
  { useUnifiedTopology: true } as ConnectOptions
);

DBclient.connect()
  .then(async (client) => {
    console.log("Connected successfully to DB server");

    const db = DBclient.db("salc");
    const users = db.collection("users");

    app.listen(port, () => {
      console.log(`server started at http://localhost:${port}`);
    });

    DBclient.close();
  })
  .catch(console.error);
