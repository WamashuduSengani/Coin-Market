# League of Legends Champions SPA

This is a React Single Page App (SPA) that consumes the GraphQL API developed in the backend. 
The SPA displays a list of all the champions in League of Legends and allows users to view the details of each champion.

# Prerequisites
To run this project locally, you will need the following tools:

Node.js version 14 or later `https://nodejs.org/en/download/package-manager`
Visual Studio Code

# Getting started

1. Clone the repository `git clone git@bitbucket.org:sovtech/grad-23b-wamashudu.git`
2. cd into the client directory
3. Install the required dependencies by running `npm install` in your terminal while you are in the client directory.
4. Start the server by running `npm start` in your terminal while you are in the client directory.
    `Open your web browser and navigate to http://localhost:3000 to view the app.`

# Features

This SPA has the following features:

1. Displays a list of all the champions in League of Legends on the Home page.
2. Allows users to search champion by their name
3. Allows users to click on a champion to view their details on a separate Detail page.
4. Provides a Back button to allow users to navigate back to the Home page from the Detail page.
5. Allows users to filter champions by their difficulty level
6. Allows users to filter champion by their tags eg. Assassins, Fighters etc.

# Technologies Used

This SPA was built using the following technologies:

React: A JavaScript library for building user interfaces.
TypeScript: A statically typed superset of JavaScript.
GraphQL: A query language for APIs.
Apollo Client: A client-side library for fetching data with GraphQL.
React Router: A library for client-side routing in React applications.

Testing
To run the tests, use the following command:

`npm test'

# Conclusion

This project is a React Single Page App (SPA) that consumes a GraphQL API developed in the backend using TypeScript and Node.js. The SPA has a Home page that lists all the Champions, A search bar that allow users to search champions by name, filters to filter champions according to their tags and difficulties and a Detail page that displays a Champion's details when clicked. The project uses React, Apollo Client and GraphQL