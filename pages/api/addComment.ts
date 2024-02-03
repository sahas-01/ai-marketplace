import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from 'mongodb';

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (req.method === 'POST') {
        const {
            modelId,
            comment
        } = req.body;

        if (!process.env.MONGODB_URI) {
            res.status(500).json({ message: 'Something went wrong!' });
            return;
        }

        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();
            const database = client.db('ai-marketplace'); // Choose a name for your database

            const collection = database.collection('models'); // Choose a name for your collection

            // Add a new comment to an existing model
            const filter = { _id: new ObjectId(modelId) };
            const update = {
                $push: {
                    comments: {
                        id: new ObjectId(),
                        comment
                    }
                }
            };

            await collection.updateOne(filter, update);

            res.status(201).json({ message: 'Comment added successfully!' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Something went wrong!' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}
