import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  ssl: true,
  database: "personal"
})

export default dataSource;