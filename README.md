## AI Marketplace - Atlan Frontend Hiring challenge 

### Project Goal 
To build an application that showcases the various models deployed by organisations and developers alike. The application should capture the nuances of a real-life production application, and show the various models available, their categories, and should allow end-users to select and explore any one model.

### Tech Stack
- Programming Language: Typescript
- Web Framework: NextJS, TailwindCSS
- Database: MongodB


<b>IMPORTANT:</b> <br />
Currently, there are two separate pages - one for viewing mock data information and one for viewing data created by you(or any user)
The mock data information was created using mockend(a free provider of mock data for take home assignments by https://jsonplaceholder.typicode.com/), however at times the service stops, hence I created a database to put in information about a model, hence there are two tabs in the navbar which say <b>Home</b> and <b>Mock Data</b>. Hence in order to view the complete functionality of the application, use the space available inside <b>Home</b>. A detailed explanation of the same is given under Features section

## Features
- #### View All Models
A space provided for viewers to get information about various models available in the marketplace, along with certain details such as downloads, number of stars and their category

- #### Detailed Page to view model information

##### This page shows detailed information about a particular model. It has the following features:
1. Basic details such as Name, number of stars ,downloads, status(not ready, production, testing), category, developer/organization name
2. Use cases of the model- one line explanation split into bullet points
3. Sample code - A section which gives instructions to use the model
4. Try it out - This section allows the user to try out the functionality of the said model

- #### Featured models
A separate functionality to view those models which have certain number of stars and downloads, at the moment, the criteria for a featured model is 2000+ stars and 30+ downloads

- #### Add model details
A form which is enclosed within a page to add details about a model such as:
1. Model name
2. Short one-liner description
3. Longer description explaining the history of the model such as training details, etc.
4. Category of the model(eg: Text summarization)
5. Demo details - to tell the user if that model is available to be tested
6. Status - not ready, testing, production
7. Use cases - heading of the use case followed by a one line explanation of the same
8. Name of the developer/organization who developed the model

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
