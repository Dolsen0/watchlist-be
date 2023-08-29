import { connect } from "../config/db.js";

export const fetchUsers = async (req, res) => {
  try {
    const client = await connect();
    const db = client.db("watchlist");
    const usersCollection = db.collection("users");

    const users = await usersCollection.find().toArray();

    res.send(users);

    await client.close();
  } catch (error) {
    res
      .status(500)
      .send({ message: "Failed to fetch users.", error: error.message });
  }
};
