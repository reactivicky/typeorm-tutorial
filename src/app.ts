import 'dotenv/config'
import "reflect-metadata"
import express, { Request, Response } from 'express'
import dataSource from "./dataSource";
const app = express();

dataSource.initialize().then(() => {
  console.log("DataSource connected.")
}).catch(err => console.log(err))

app.get("/", (req: Request, res: Response) => {
  res.send('hello world')
})

const PORT = 4000
app.listen(PORT, async () => {
  console.log(`Server is listening on ${PORT}`)
})