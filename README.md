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
4. Start the server

   ```bash
   npm start
   ```

## Endpoints

The default port is `3000`, but can be changed by setting the `PORT` environment variable.

### Auth

| Method | Endpoint    | Description | Body                                | Response          |
| ------ | ----------- | ----------- | ----------------------------------- | ----------------- |
| POST   | /auth/login | Login User  | { email: string, password: string } | { token: string } |
