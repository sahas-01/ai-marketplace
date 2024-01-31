// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from 'mongodb';

type Data = {
    message: string;
    models?: any[];
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'GET') {
        if (!process.env.MONGODB_URI) {
            res.status(500).json({ message: 'Something went wrong!' });
            return;
        }

        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();
            const database = client.db('ai-marketplace'); // Choose a name for your database

            const collection = database.collection('models'); // Choose a name for your collection

            const models = await collection.find().toArray();

            res.status(200).json({ message: 'Data fetched successfully!', models });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong!' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}
