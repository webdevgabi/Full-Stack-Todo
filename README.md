# Full-Stack To-Do Application

It is a full-stack application that stores tasks created by registed users in a database. Users can create, modify, and delete tasks. 

## How to use

The application is built in [NodeJS](https://nodejs.org/en) environment, so it must first be installed on your computer.

Datas are stored in a [MongoDB](https://www.mongodb.com/) database, so you need to have a database in local or cloud. The connection URL of which is specified in `connectionString.js` in the config folder.

You should run `npm install` in the backend and frontend folders, which will download all the packages that needs for the application

Finally you can start the application, which must be done on both client and backend side:
- Client (frontend folder): `npm run dev`
- Backend (backend folder): `nodemon main`

## What i used
- **Backend:**
    - cors 2.8.5 ([official documentation](https://www.npmjs.com/package/cors))
    - express 4.19.2 ([official documentation](https://expressjs.com/))
    - mongodb 6.5.0 ([official documentation](https://www.mongodb.com/docs/drivers/node/current/))
    - nodemon 3.1.0 ([official documentation](https://nodemon.io/))
