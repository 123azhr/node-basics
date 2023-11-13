const { MongoClient } = require('mongodb');
const url = "mongodb://127.0.0.1:27017";
const databaseName = "nodeBasics";
const client = new MongoClient(url);

async function dbConnect() {
  try {
    await client.connect();
    const db = client.db(databaseName);
    console.log("connected");
    return db.collection("products");
  } catch (error) {
    console.log(error);
  }
}

module.exports = dbConnect;

// const mongoose = require('mongoose')
// const url = "mongodb://localhost:27017";

// async function dbConnect() {
//   try {
//     let result = await mongoose.connect(url);
//     if (result) {
//       console.log("Db Connected");
//     }
//     // db = result.db(databaseName);
//     // return db.collection("products");
//   } catch (error) {
//     console.log(error);
//   }
// }

// module.exports = dbConnect;

