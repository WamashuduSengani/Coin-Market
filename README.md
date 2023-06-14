# Server Documentation

# Introduction

This document provides an overview of the Apollo GraphQL API server that wraps the Coinlore Crypto API using TypeScript and Node.js. The server exposes two GraphQL queries that allow users to retrieve crypto information.

# Prerequisites
To run this project locally, you will need the following tools:

Node.js version 14 or later `https://nodejs.org/en/download/package-manager`
Visual Studio Code

# Getting started

1. Clone the repository `git clone https://github.com/WamashuduSengani/coin-market.git`
2. cd into the server directory
3. Install the required dependencies by running `npm install` in your terminal while you are in the server directory.
4. Start the server by running `npm start` in your terminal while you are in the server directory.

Once the server is running, you can interact with it using a GraphQL client such as GraphiQL or GraphQL Playground

# Queries

The server supports the following GraphQL queries:

Query: `coins`
The `coins` query retrieves all coins in the Api. Here is an example query:

  query {
    coins {
      id
      name
      symbol
      rank
    }
  }
`

The query returns coins data, each containing the following fields

1. id 
2. name 
3. symbol 
4. rank 

Query: `coinMarket`
The coinMarket query retrieves a specific coin in the API given their id. Here is an example query:

 query GetCoinMarket($coinId: String!) {
    coinMarket(coinId: $coinId) {
      name
      symbol
      priceUsd
      volume24
      marketCapUsd
    }
  }
`;

The query returns a single coin.

# Testing

The server has been tested using Jest, a popular testing framework for Node.js. The tests ensure that the GraphQL API is working correctly and handling errors as expected.

Run the tests by running `npm test` in the server directory.


# Conclusion

The Apollo GraphQL API server that wraps the Coinlore Crypto API provides a simple and intuitive way to retrieve information about cryptocurrency in the API. By following the instructions in this document, you should be able to use the server to enhance your Coinlore Crypto API experience.

# Client Documentation

# Prerequisites
To run this project locally, you will need the following tools:

Node.js version 14 or later `https://nodejs.org/en/download/package-manager`
Visual Studio Code

# Getting started

1. Clone the repository `git clone https://github.com/WamashuduSengani/coin-market.git`
2. cd into the client directory
3. Install the required dependencies by running `npm install` in your terminal while you are in the client directory.
4. Start the server by running `npm start` in your terminal while you are in the client directory.
    `Open your web browser and navigate to the local host link provided to view the app.`

# Features

This SPA has the following features:

1. Displays a list of all the Coins in the API
2. Allows users to click on a Coin to view its market data on a separate detail page.
3. Provides a Back button to allow users to navigate back to the Home page from the Detail page.
4. Allows users to hide coins they don't want to see
5. Allows users to unhide all the hidden coins


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

This project is a React Single Page App (SPA) that consumes a GraphQL API developed in the backend using TypeScript and Node.js. The SPA has a Home page that lists all the Coins in the Coinlore Crypto API, A button that allows users to hide specific coins, and a Detail page that displays a Coins's market data details when clicked. The project uses React, Apollo Client and GraphQL