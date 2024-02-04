// pages/api/featureTest.js

export default async function handler(req:any, res:any) {
    if (req.method === 'POST') {
        const apiKey = process.env.TEXT_API_KEY as string;

        // Define the request body
        const requestBody = {
            language: 'auto',
            text: req.body.text,
            min_length: 5,
            max_length: 100
        };
        // console.log('Request Body:', requestBody);
        try {
            const apiRes = await fetch(process.env.TEXT_SUMMARIZER_URL as string, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-KEY': apiKey
                },
                body: JSON.stringify(requestBody)
            });

            const data = await apiRes.json();
            res.status(200).json(data);
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
