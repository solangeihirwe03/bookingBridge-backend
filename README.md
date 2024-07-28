# bookingBridge-backend

Booking Bridge is a comprehensive hotel booking and reservation system designed to help tourists visiting Rwanda find hotels that meet their expectations. This platform connects travelers with a wide range of accommodations, ensuring a comfortable and memorable stay in Rwanda.

## Features

- **User Authentication**: Robust authentication system with email/password .

## Technologies Used

- **Backend**: Node JS, Express JS
- **Database**: PostgreSQL
- **ORM**: sequelize
- **Authentication**: JWT
- **Email service**: Nodemailer
- **API Documentation**: Swagger

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Docker (optional)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/solangeihirwe03/bookingBridge-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd bookingBridge
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root directory and add the necessary environment variables as specified in `.env.example`.
6. Start the development server:
    ```bash
    npm run dev
    ```

### Usage

- Access the API documentation at `http://localhost:7000/api-docs`
- Register as a new user and verify your email to start booking hotels.

### API Endpoints

No   | Route                           | Method | Description                              |
-----|---------------------------------|--------|------------------------------------------|
  1  | `/api/auth/register-user`       |  POST  | Register user endpoint                   |
  2  | `/api/auth/email-verification`  |  POST  | Send Email verification endpoint         |
  3  | `/api/auth/verify-email`        |  GET   | Email verifying endpoint                 |
  4  | `/api/auth/login-user`          |  POST  | Login user endpoint                      |



  ## INITILIAZE SEQUELIZE CLI

  1. Initialize Sequelize CLI:
   ```sh
   npx sequelize-cli init
   ```
2. Generate Seeder:
   ```sh
   npx sequelize-cli seed:generate --name name-of-your-seeder
   ```
3. Generate Migrations:
   ```sh
   npx sequelize-cli migration:generate --name name-of-your-migration
   ```
4. Define Migration:
   Edit the generated migration file to include the tables you want to create.
5. Define Seeder Data:
   Edit the generated seeder file to include the data you want to insert.
6. Run the Seeder:
   ```sh
   npm run createAllSeeders
   ```
7. Run the Migration:
   ```sh
   npm run createAllTables
   ```


