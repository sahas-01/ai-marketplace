## AI Marketplace - Atlan Frontend Hiring challenge 

### Project Goal 
To build an application that showcases the various models deployed by organisations and developers alike. The application should capture the nuances of a real-life production application, and show the various models available, their categories, and should allow end-users to select and explore any one model.

### Tech Stack
- Programming Language: Typescript
- Web Framework: NextJS, TailwindCSS
- Database: MongodB

### Instructions to run

First, clone the repository:
```bash
git clone https://github.com/sahas-01/ai-marketplace.git
cd ai-marketplace
```

Install dependencies:
```bash
npm install
```

Set environment variables:
```bash
MONGODB_URI= mongodb+srv://<username>:<password>@cluster0.zynymms.mongodb.net/
NEXT_PUBLIC_MOCKDATA_API="https://mockend.com/api/<username>/<repo name>/<collection name>"
TEXT_API_KEY=your api key
TEXT_SUMMARIZER_URL="summarizer url"
```

Run the app:
```bash
npm run dev
```

This will open up the project on <a href="">http://localhost:3000/</a>
