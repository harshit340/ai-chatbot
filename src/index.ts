import express from "express"
import {config}  from "dotenv"
import {connecttodatabase} from "./db/connection.js"
config()
const app = express();

app.use(express.json());


// connecting to mongodb server

connecttodatabase().then(()=>{
  app.listen(8000,()=>{
    console.log("server on and connected to database")
  })
})




























































