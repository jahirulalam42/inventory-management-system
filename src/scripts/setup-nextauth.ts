// scripts/setup-nextauth.ts
import { MongoClient } from "mongodb";

async function setupNextAuthCollections() {
  const uri = process.env.MONGODB_URI as string;
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db();

    // Create users collection indexes
    await db.collection("users").createIndex({ email: 1 }, { unique: true });

    // Create accounts collection indexes
    await db
      .collection("accounts")
      .createIndex({ provider: 1, providerAccountId: 1 }, { unique: true });

    // Create sessions collection indexes
    await db
      .collection("sessions")
      .createIndex({ sessionToken: 1 }, { unique: true });

    // console.log("NextAuth collections setup completed!");
  } catch (error) {
    console.error("Setup error:", error);
  } finally {
    await client.close();
  }
}

setupNextAuthCollections();
