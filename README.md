# Ingridentify dummy-backend

This is a dummy backend for [Ingridentify android app](https://github.com/Ingridentify/Ingridentify).

## Setup

1. Clone the repository

   ```bash
   # using ssh
   git clone git@github:Ingridentify/dummy-backend.git

   # using https
   git clone https://github.com/Ingridentify/dummy-backend.git
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory or just copy the `.env.example` file
4. Seed the database

   ```bash
   npm run seed
   ```

5. Start the server

   ```bash
   npm start
   ```

6. The server should be running on `http://localhost:3000`

## Endpoints

The default port is `3000`, but can be changed by setting the `PORT` environment variable.

### Auth

#### Login

```http
POST /auth/login
```

##### Request body

| Parameter | Type   | Required           |
| --------- | ------ | ------------------ |
| email     | string | :white_check_mark: |
| password  | string | :white_check_mark: |

##### Response

###### Success

```json
{
  "name": "Fauzan",
  "username": "fauzan",
  "email": "fauzan@email.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
```

###### Error

```json
{
  "message": "Invalid email or password"
}
```
