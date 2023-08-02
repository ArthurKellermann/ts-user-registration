# User Management API

This project is a simple API for managing users, built with TypeScript, Node.js, Express, and MongoDB. The API supports CRUD (Create, Read, Update, Delete) operations on users.

## Technologies Used

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation and Running

1. Clone this repository to your workspace.
2. Install the project dependencies with the command `npm install`.
3. Set up your environment variables. For example, set `MONGO_URL` to the URL of your MongoDB instance.
4. Compile the project with the command `npx tsc`. This will compile the TypeScript code and create a `dist` folder with the compiled JavaScript code.
5. Start the server with the command `npm start`.

## Usage

The API supports the following operations:

- **GET /users**: Returns all users.
- **POST /users**: Creates a new user. Expects a request body with the fields `email`, `firstName`, and `lastName`.
- **GET /users/:id**: Returns a specific user, identified by `id`.
- **PUT /users/:id**: Updates a specific user. Expects a request body with the fields `email`, `firstName`, and `lastName`.
- **DELETE /users/:id**: Deletes a specific user.

## Contributing

Contributions are welcome! Please feel free to open an issue or pull request.

## License

This project is licensed under the MIT license. See the `LICENSE` file for more details.
