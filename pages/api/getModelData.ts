import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId } from 'mongodb';
import { ModelData } from "@/interfaces";

type Data = {
    message: string;
    model?: ModelData | any;
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

            // Convert the id from the query string to ObjectId
            const id = req.query._id as string;
            const objectId = new ObjectId(id);

            // Find the model by its id, it should be of type ModelData
            const model = await collection.findOne({ _id: objectId });

            if (!model) {
                res.status(404).json({ message: 'Model not found!' });
                return;
            }

            res.status(200).json({ message: 'Data fetched successfully!', model });
        } catch (error) {
            res.status(500).json({ message: 'Something went wrong!' });
        } finally {
            await client.close();
        }
    } else {
        res.status(405).json({ message: 'Method not allowed!' });
    }
}
