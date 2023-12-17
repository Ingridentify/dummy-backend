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

## User

| Name   | Email            | Password |
| ------ | ---------------- | -------- |
| Fauzan | fauzan@email.com | 12345678 |
| Hanif  | hanif@email.com  | 12345678 |

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

### History

#### Get all history

```http
GET /history
```

##### Request

###### Headers

| Name          | Parameter | Type   | Required           | Example             |
| ------------- | --------- | ------ | ------------------ | ------------------- |
| Authorization | token     | string | :white_check_mark: | bearer eyJhbGciOiJI |

###### Params

| Parameter | Type   | Required | Default |
| --------- | ------ | -------- | ------- |
| page      | number | :x:      | 1       |
| limit     | number | :x:      | 10      |

##### Response

```json
[
  {
    "id": 1,
    "name": "Nasi Goreng",
    "cuisine": "Indonesia",
    "recipes": "https://www.masakapahariini.com/resep/resep-nasi-goreng/",
    "imageUrl": "https://kurio-img.kurioapps.com/20/10/10/a7e9eaa0-1c22-42b0-a11f-0a5ad1d30126.jpeg"
  },
  {
    "id": 2,
    "name": "Nasi Kuning",
    "cuisine": "Indonesia",
    "recipes": "https://www.masakapahariini.com/resep/resep-nasi-kuning/",
    "imageUrl": "https://www.sasa.co.id/medias/page_medias/nasi_kuning_rice_cooker.jpg"
  },
  {
    "id": 3,
    "name": "Nasi Uduk",
    "cuisine": "Indonesia",
    "recipes": "https://www.masakapahariini.com/resep/resep-nasi-uduk/",
    "imageUrl": "https://www.blibli.com/friends-backend/wp-content/uploads/2023/04/B300028-Cover-resep-nasi-uduk.jpg"
  }
]
```
