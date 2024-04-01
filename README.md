Sure, here's an improved version of the README:

---

# Room Booking System API

This repository hosts the code for a robust Room Booking System API built using Express.js. The API facilitates seamless management of room types and bookings for a variety of applications.

## Features

- **Room Types Management**: Create, retrieve, update, and delete room types.
- **Room Management**: Perform CRUD operations on rooms, including creation, retrieval, updating, and deletion.
- **Authentication and Authorization**: Secure endpoints using authentication and role-based authorization.
- **Request Data Validation**: Validate incoming request data against predefined schemas to ensure data integrity.
- **Flexible Middleware**: Utilize middleware functions for authentication, authorization, and request validation.

## Prerequisites

Ensure the following dependencies are installed on your machine:

- Node.js
- npm or yarn package manager

## Installation

1. Clone the repository to your local machine:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd <project-directory>
   ```

3. Install dependencies:

   ```
   npm install
   ```

   or

   ```
   yarn install
   ```

## Usage

1. Start the server:

   ```
   npm start
   ```

2. The server will be available at `http://localhost:3001` by default.

## API Routes

- **GET /api/v1/room-types**: Retrieve all room types.
- **POST /api/v1/room-types**: Create a new room type.
- **GET /api/v1/rooms**: Retrieve all rooms.
- **POST /api/v1/rooms**: Create a new room (requires authentication and admin authorization).
- **GET /api/v1/rooms/:roomId**: Retrieve a room by ID.
- **PATCH /api/v1/rooms/:roomId**: Update a room by ID (requires authentication and admin authorization).
- **DELETE /api/v1/rooms/:roomId**: Delete a room by ID (requires authentication and admin authorization).

## Middleware Functions

- **authenticate**: Middleware for user authentication.
- **authorize**: Middleware for user authorization based on roles.
- **validate**: Middleware for validating request data against predefined schemas.

## Validation

Incoming request data is validated against predefined schemas located in the `./validation/` directory.

## Contributing

Contributions are welcome! Please follow the guidelines outlined in CONTRIBUTING.md.

## License

This project is licensed under the terms of the [MIT License](LICENSE).
