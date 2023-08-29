import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;
let _client = null; 

export async function connect() {
  if (!_client) {
    _client = new MongoClient(uri, {
      serverApi: {
        version: '1',
        strict: true,
        deprecationErrors: true,
      }
    });
    await _client.connect();
  }

  return _client;
}
