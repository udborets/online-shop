
# Online shop

Full-stack PERN `"Online shop"` app

# App stack

## Backend

`Typescript`, `ExprssJS`, `PostgreSQL`

## Frontend

`Typescript`, `React`, `React RTK`, `Scss`

# Setting up app

## Cloning repository

```bash
  git clone git@github.com:udborets/online-shop.git
```

You have to be in that position

```
. <-- You are here 
└── online-shop/
    ├── server
    └── client
```
## Environment variables

To run this project, you will need to add the following environment variables to your `.env` file

in `online-shop/server` folder:

`SERVER_PORT`

`DB_NAME`

`DB_USER`

`DB_PASSWORD`

`DB_HOST`

`DB_PORT`

`JWT_KEY`

in `online-shop/client` folder:

`VITE_REACT_APP_API_URL`
## Static folders

To save file info on server add `static` folder in `online-shop/server`

```bash
  cd online-shop/server
  mkdir static
  cd ..
```
## Dependencies

Install dependencies

```bash
  cd server
  npm i
  cd ..
  cd client
  npm i
  cd ../../
```
## Run locally in development mode

Run two terminals

Start server on one

```bash
  cd online-shop/server
  npm run dev
```

then client on another

```bash
  cd online-shop/client
  npm run dev
```
