## AI Marketplace


## Project Goal 
To build an application that showcases the various models deployed by organisations and developers alike. The application should capture the nuances of a real-life production application, and show the various models available, their categories, and should allow end-users to select and explore any one model.

## Tech Stack
- Programming Language: Typescript
- Web Framework: NextJS, TailwindCSS
- Database: MongodB


<b>IMPORTANT:</b> <br />
Currently, there are two separate pages - one for viewing mock data information and one for viewing data created by you(or any user)
The mock data information was created using mockend(a free provider of mock data for take home assignments by https://jsonplaceholder.typicode.com/), however at times the service stops, hence I created a database to put in information about a model, which is why there are separate options to view created data(<b>Home</b>) and <b>Mock Data</b>. Hence in order to view the complete functionality of the application, use the space available inside <b>Home</b>. A detailed explanation of the same is given under Features section

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


### Bonus Features
- #### Try it out
While creating a model, one can select if the model is available for the general audience to try it out, at present, there is support to add only 1 model

- #### Comments
For each model, any user can add comments(anonymous for now), and they can be viewed under the <b>Discussion</b> section. 


## Speed of Website
Some metrics I used to measure the speed of the website:
1. #### https://pagespeed.web.dev/
For the <a href="https://market-place-ai.vercel.app/">Home Page</a>
- <b>First Contentful Paint (FCP)</b> - 1.1s on mobile and 0.4s on the web, which is pretty decent in my opinion, cannot be optimized further

For the <a href="https://market-place-ai.vercel.app/models">Models Page</a>
- <b>First Contentful Paint</b> - 0.2 s on Desktop and 0.9s on mobile, which again I find is pretty decent, cannot be optimized further
- <b>Speed Index</b> - 2.8s for mobile and 1.7s for desktop, this can be optimized(probably) with server side rendering where the content loads first on the server and is then served to the client

For the <a href="https://market-place-ai.vercel.app/addmodel">Add Model</a>
- <b>First Contentful Paint</b> - 0.2s on Desktop and 0.8s on mobile, which again I find is pretty decent, cannot be optimized further
- <b>Speed Index</b> - 0.8s for mobile and 0.4s for desktop, this can be optimized(probably) with server side rendering where the content loads first on the server and is then served to the client.

However, it is worth noting that for the above page, Accessibility is a little below par, as recommended by the insights



## Instructions to run

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
