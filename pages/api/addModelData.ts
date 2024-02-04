// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method === 'POST') {
    const {
      title,
      shortDescription,
      longDescription,
      category,
      useCases,
      developedBy,
      codeSnippet,
      isDemo,
      status
    } = req.body;
    // console.log(req.body);

    if (!process.env.MONGODB_URI) {
      res.status(500).json({ message: 'Something went wrong!' });
      return;
    }

    const client = new MongoClient(process.env.MONGODB_URI);

    try {
      await client.connect();
      const database = client.db('ai-marketplace'); // Choose a name for your database

      const collection = database.collection('models'); // Choose a name for your collection

      await collection.insertOne({
        title,
        shortDescription,
        longDescription,
        category,
        useCases,
        developedBy,
        codeSnippet,
        isDemo,
        status
      });

      res.status(201).json({ message: 'Data saved successfully!' });
    } catch (error) {
      res.status(500).json({ message: 'Something went wrong!' });
    } finally {
      await client.close();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed!' });
  }
}
