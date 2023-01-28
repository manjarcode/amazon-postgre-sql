import {clientSingleton} from '../../backend/client.js';

export default async function handler(req, res) {

  const client = clientSingleton()
  await client.connect()
  const result = await client.query('SELECT account FROM visits LIMIT 1')
  res.status(200).json(result.rows)
}
