# FreeCodeHub

This is a monorepo containing the FreeCodeHub Angular app and the FreeCodeHub API.

## FreeCodeHub Angular App

The FreeCodeHub Angular app is a web-based platform for sharing coding resources. It allows users to browse and search for resources, upload their own resources, comment on resources, and mark resources as favorites.

To run the app locally, you'll need to have Node.js and Angular CLI installed. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `freeCodeHub` directory.
3. Run `npm install` to install the app's dependencies.
4. Run `ng serve` to start the development server.
5. Open your web browser and navigate to `http://localhost:4200`.

## FreeCodeHub API

The FreeCodeHub API is a RESTful API built with NestJS and MongoDB. It provides endpoints for managing users, resources, comments, and favorites. It also provides authentication using JSON Web Tokens (JWT).

To run the API locally, you'll need to have Node.js and MongoDB installed. Then, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the `free-code-hub-api` directory.
3. Run `npm install` to install the API's dependencies.
4. Create a `.env` file in the root directory of the API, and populate it with your MongoDB connection information and JWT secret key.
5. Run `npm run start:dev` to start the development server.

