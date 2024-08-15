import 'dotenv/config'
import "reflect-metadata"
import express, { Request, Response } from 'express'
import dataSource from "./dataSource";
const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send('hello world')
})

const PORT = 4000
app.listen(PORT, async () => {
  try {
    await dataSource.initialize()
    console.log(`DataSource connected. Server is listening on ${PORT}`)
  } catch (error) {
    console.log(error)
  }
})