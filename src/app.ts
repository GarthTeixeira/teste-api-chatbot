import express from "express";
import config from 'config'
import logger from './utils/logger'
import routes from "./routes";
import admin from "firebase-admin"


const app = express()
const port = config.get<number>('port')


var serviceAccount = require("../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

console.log(typeof admin.firestore().collection('users'))

app.listen(port,()=>{
    logger.info(`app is running at http://localhost:${port}`)
    routes(app,admin.firestore())
})