import {Pool} from 'pg'

const client = new Pool({
  host: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
})


export const clientSingleton = () => {
  return client
}