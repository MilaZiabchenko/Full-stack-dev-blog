import { MongoClient, Db, MongoServerError } from 'mongodb';
import { env } from '../helpers/envValidator.helper.js';
import type { Article } from '../models/Article.model.js';
import { articleValidator } from '../models/Article.schema.js';

const client = new MongoClient(env.DB_CONN_STRING);
const database = client.db(env.DB_NAME);
const collection = database.collection<Article>(env.ARTICLES_COLLECTION_NAME);

const applySchemaValidation = async (database: Db) => {
  await database
    .command({
      collMod: env.ARTICLES_COLLECTION_NAME,
      validator: articleValidator
    })
    .catch(async (err: MongoServerError) => {
      if (err.codeName === 'NamespaceNotFound') {
        await database.createCollection(env.ARTICLES_COLLECTION_NAME, {
          validator: articleValidator
        });
      }
    });
};

const connectToDb = async () => {
  await client.connect();

  await applySchemaValidation(database);

  console.log(`Connected to the database '${database.databaseName}'`);
  console.log(`Connected to the collection '${collection.collectionName}'
  `);
};

export { collection, connectToDb };
