import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from 'mongodb';

type Comment = {
    modelId: string;
    comment: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Comment[] | { message: string }>,
) {
    if (req.method === 'GET') {
        const { modelId } = req.query;

        if (!process.env.MONGODB_URI) {
            res.status(500).json({ message: 'Something went wrong!' });
            return;
        }

        const client = new MongoClient(process.env.MONGODB_URI);

        try {
            await client.connect();
            const database = client.db('ai-marketplace'); // Choose a name for your database

            const collection = database.collection('models'); // Choose a name for your collection

            const filter = { _id: new ObjectId(modelId as string) };
            const projection = { comments: 1, _id: 0 }; // Only retrieve comments field, exclude _id field

            const result = await collection.findOne(filter, { projection });

            console.log('result', result);

            if (!result) {
                res.status(404).json({ message: 'Model not found!' });
                return;
            }

            const comments: Comment[] = result.comments || [];
            console.log('comments', comments);
            res.status(200).json(comments);
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
